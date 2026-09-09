import os
import re
import time
import uuid
import json
import secrets
import ipaddress
from datetime import datetime, timedelta, timezone
from urllib.request import Request, urlopen
from urllib.parse import quote

from flask import Flask, render_template, jsonify, request, session, Response
from werkzeug.middleware.proxy_fix import ProxyFix
from sqlalchemy import (
    create_engine, MetaData, Table, Column, Integer, String, DateTime, Text,
    select, insert, update, func, text, inspect
)
from sqlalchemy.exc import IntegrityError

from store_config import STORE, PRODUCTS, PAYMENT_METHODS, SOCIAL_PLATFORMS

app = Flask(__name__)
app.wsgi_app = ProxyFix(app.wsgi_app, x_for=1, x_proto=1, x_host=1, x_port=1)
app.secret_key = os.environ.get("SECRET_KEY") or secrets.token_hex(32)
app.permanent_session_lifetime = timedelta(days=365)
app.config.update(
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE="Lax",
    SESSION_COOKIE_SECURE=bool(os.environ.get("RAILWAY_ENVIRONMENT")) or os.environ.get("SESSION_COOKIE_SECURE") == "1",
)

# -----------------------------------------------------------------------------
# DATABASE: PostgreSQL on Railway if DATABASE_URL exists, SQLite as local fallback
# -----------------------------------------------------------------------------
def normalized_database_url():
    url = (os.environ.get("DATABASE_URL") or "").strip()
    if url:
        if url.startswith("postgres://"):
            url = "postgresql+psycopg://" + url[len("postgres://"):]
        elif url.startswith("postgresql://"):
            url = "postgresql+psycopg://" + url[len("postgresql://"):]
        return url

    db_path = os.path.join(app.root_path, "data", "metrics.db")
    os.makedirs(os.path.dirname(db_path), exist_ok=True)
    return f"sqlite:///{db_path}"

DATABASE_URL = normalized_database_url()
ENGINE_KW = {"pool_pre_ping": True, "future": True}
if DATABASE_URL.startswith("sqlite:"):
    ENGINE_KW["connect_args"] = {"check_same_thread": False}
engine = create_engine(DATABASE_URL, **ENGINE_KW)
metadata = MetaData()

visitors = Table(
    "visitors", metadata,
    Column("visitor_id", String(64), primary_key=True),
    Column("first_seen", DateTime(timezone=True), nullable=False),
    Column("last_seen", DateTime(timezone=True), nullable=False),
    Column("country", String(80), nullable=False, default="País no disponible"),
    Column("country_code", String(2), nullable=False, default=""),
    Column("device", String(24), nullable=False, default="Desconocido"),
    Column("display_name", String(80), nullable=False, default="Visitante"),
)

events = Table(
    "analytics_events", metadata,
    Column("id", Integer, primary_key=True, autoincrement=True),
    Column("visitor_id", String(64), nullable=True),
    Column("event_type", String(32), nullable=False),
    Column("product_id", String(100), nullable=True),
    Column("product_name", String(180), nullable=True),
    Column("plan", String(180), nullable=True),
    Column("payment", String(80), nullable=True),
    Column("country", String(80), nullable=False, default="País no disponible"),
    Column("country_code", String(2), nullable=False, default=""),
    Column("device", String(24), nullable=False, default="Desconocido"),
    Column("visitor_name", String(80), nullable=True),
    Column("created_at", DateTime(timezone=True), nullable=False),
)


chat_messages = Table(
    "chat_messages", metadata,
    Column("id", Integer, primary_key=True, autoincrement=True),
    Column("visitor_id", String(64), nullable=False),
    Column("display_name", String(80), nullable=False),
    Column("country", String(80), nullable=False, default=""),
    Column("country_code", String(2), nullable=False, default=""),
    Column("message", Text, nullable=False),
    Column("created_at", DateTime(timezone=True), nullable=False),
)

metadata.create_all(engine)


def migrate_analytics_schema():
    """Adds V18 analytics columns to an existing V17 database without deleting data."""
    inspector = inspect(engine)
    existing = {name: {c["name"] for c in inspector.get_columns(name)} for name in ("visitors", "analytics_events")}
    statements = []
    if "display_name" not in existing.get("visitors", set()):
        statements.append("ALTER TABLE visitors ADD COLUMN display_name VARCHAR(80) NOT NULL DEFAULT 'Visitante'")
    if "visitor_name" not in existing.get("analytics_events", set()):
        statements.append("ALTER TABLE analytics_events ADD COLUMN visitor_name VARCHAR(80)")
    if statements:
        with engine.begin() as conn:
            for statement in statements:
                conn.execute(text(statement))


migrate_analytics_schema()


def utcnow():
    return datetime.now(timezone.utc)


def device_from_user_agent():
    ua = (request.headers.get("User-Agent") or "").lower()
    if any(x in ua for x in ("ipad", "tablet", "kindle", "silk/")):
        return "Tablet"
    if any(x in ua for x in ("mobile", "iphone", "android", "windows phone")):
        return "Celular"
    return "Computadora"


def clean_display_name(value):
    value = re.sub(r"\s+", " ", str(value or "").strip())[:40]
    value = re.sub(r"[^\w\s\-'.À-ÿ]", "", value, flags=re.UNICODE).strip()
    return value or "Visitante"


def clean_required_name(value):
    value = re.sub(r"\s+", " ", str(value or "").strip())[:40]
    value = re.sub(r"[^\w\s\-'.À-ÿ]", "", value, flags=re.UNICODE).strip()
    return value


def ensure_visitor():
    session.permanent = True
    visitor_id = session.get("visitor_id")
    if not visitor_id:
        visitor_id = str(uuid.uuid4())
        session["visitor_id"] = visitor_id

    now = utcnow()
    device = device_from_user_agent()
    with engine.begin() as conn:
        row = conn.execute(select(visitors).where(visitors.c.visitor_id == visitor_id)).mappings().first()
        if row:
            conn.execute(
                update(visitors)
                .where(visitors.c.visitor_id == visitor_id)
                .values(last_seen=now, device=device)
            )
        else:
            try:
                conn.execute(insert(visitors).values(
                    visitor_id=visitor_id,
                    first_seen=now,
                    last_seen=now,
                    country="País no disponible",
                    country_code="",
                    device=device,
                    display_name="Visitante",
                ))
            except IntegrityError:
                pass
    return visitor_id


def visitor_context(visitor_id):
    with engine.connect() as conn:
        row = conn.execute(
            select(visitors.c.country, visitors.c.country_code, visitors.c.device, visitors.c.display_name)
            .where(visitors.c.visitor_id == visitor_id)
        ).mappings().first()
    return dict(row) if row else {"country": "País no disponible", "country_code": "", "device": device_from_user_agent(), "display_name": "Visitante"}


def record_event(event_type, product_id=None, product_name=None, plan=None, payment=None):
    visitor_id = ensure_visitor()
    context = visitor_context(visitor_id)
    with engine.begin() as conn:
        result = conn.execute(insert(events).values(
            visitor_id=visitor_id,
            event_type=str(event_type or "event")[:32],
            product_id=(str(product_id)[:100] if product_id else None),
            product_name=(str(product_name)[:180] if product_name else None),
            plan=(str(plan)[:180] if plan else None),
            payment=(str(payment)[:80] if payment else None),
            country=context.get("country") or "País no disponible",
            country_code=context.get("country_code") or "",
            device=context.get("device") or "Desconocido",
            visitor_name=context.get("display_name") or "Visitante",
            created_at=utcnow(),
        ))
        event_id = result.inserted_primary_key[0]
    return event_id


def get_stats():
    with engine.connect() as conn:
        visitor_total = conn.execute(select(func.count()).select_from(visitors)).scalar_one()
        order_total = conn.execute(
            select(func.count()).select_from(events).where(events.c.event_type == "order")
        ).scalar_one()
    return {"visitors": int(visitor_total or 0), "orders": int(order_total or 0)}


# -----------------------------------------------------------------------------
# COUNTRY / PRESENCE (country only; never stores IP, city or coordinates)
# -----------------------------------------------------------------------------
COUNTRY_NAMES_ES = {
    "PE":"Perú","AR":"Argentina","BO":"Bolivia","BR":"Brasil","CL":"Chile","CO":"Colombia",
    "CR":"Costa Rica","CU":"Cuba","DO":"República Dominicana","EC":"Ecuador","SV":"El Salvador",
    "GT":"Guatemala","HN":"Honduras","MX":"México","NI":"Nicaragua","PA":"Panamá","PY":"Paraguay",
    "PR":"Puerto Rico","UY":"Uruguay","VE":"Venezuela","US":"Estados Unidos","CA":"Canadá",
    "ES":"España","PT":"Portugal","FR":"Francia","DE":"Alemania","IT":"Italia","GB":"Reino Unido",
    "IE":"Irlanda","NL":"Países Bajos","BE":"Bélgica","CH":"Suiza","AT":"Austria","SE":"Suecia",
    "NO":"Noruega","DK":"Dinamarca","FI":"Finlandia","PL":"Polonia","RO":"Rumanía","UA":"Ucrania",
    "RU":"Rusia","TR":"Turquía","CN":"China","JP":"Japón","KR":"Corea del Sur","IN":"India",
    "ID":"Indonesia","PH":"Filipinas","TH":"Tailandia","VN":"Vietnam","AU":"Australia","NZ":"Nueva Zelanda",
    "ZA":"Sudáfrica","EG":"Egipto","MA":"Marruecos","NG":"Nigeria","AE":"Emiratos Árabes Unidos",
    "SA":"Arabia Saudita","IL":"Israel","SG":"Singapur","MY":"Malasia"
}

def country_name_from_code(code):
    code = clean_country_code(code)
    return COUNTRY_NAMES_ES.get(code, code) if code else ""

def clean_country(value):
    value = str(value or "").strip()[:80]
    value = re.sub(r"[^\w\s\-'.À-ÿ]", "", value, flags=re.UNICODE).strip()
    return value or "País no disponible"


def clean_country_code(value):
    value = str(value or "").strip().upper()
    return value if re.fullmatch(r"[A-Z]{2}", value) else ""


def client_public_ip():
    candidates = []
    for header in ("CF-Connecting-IP", "X-Real-IP"):
        if request.headers.get(header):
            candidates.append(request.headers.get(header))
    forwarded = request.headers.get("X-Forwarded-For", "")
    if forwarded:
        candidates.extend(part.strip() for part in forwarded.split(","))
    if request.remote_addr:
        candidates.append(request.remote_addr)

    for candidate in candidates:
        try:
            ip = ipaddress.ip_address((candidate or "").strip())
            if ip.is_global:
                return str(ip)
        except ValueError:
            continue
    return ""


def fetch_json(url, timeout=2.5):
    req = Request(url, headers={"User-Agent": "AlexStreaming/18 name-country-analytics"})
    with urlopen(req, timeout=timeout) as response:
        return json.loads(response.read().decode("utf-8", errors="replace"))


def country_from_proxy_headers():
    for header in ("CF-IPCountry", "X-Vercel-IP-Country", "CloudFront-Viewer-Country", "X-AppEngine-Country"):
        code = clean_country_code(request.headers.get(header))
        if code and code not in {"XX", "T1"}:
            return {"country": country_name_from_code(code), "country_code": code}
    return None


def detect_country_from_ip(ip):
    header_geo = country_from_proxy_headers()
    if header_geo:
        return header_geo
    if not ip:
        return {"country": "País no disponible", "country_code": ""}

    providers = [
        (f"https://ipwho.is/{quote(ip)}", "ipwho"),
        (f"https://ipapi.co/{quote(ip)}/json/", "ipapi"),
        (f"https://api.country.is/{quote(ip)}", "countryis"),
    ]
    for url, provider in providers:
        try:
            data = fetch_json(url)
            if provider == "ipwho" and data.get("success") is False:
                continue
            if provider == "countryis":
                code = data.get("country")
                country = country_name_from_code(code)
            else:
                country = data.get("country") or data.get("country_name")
                code = data.get("country_code") or data.get("country_code2")
            code = clean_country_code(code)
            if country or code:
                return {"country": clean_country(country or code), "country_code": code}
        except Exception:
            continue
    return {"country": "País no disponible", "country_code": ""}


def latest_visitor_events(limit=8, after_id=None):
    stmt = (
        select(events.c.id, events.c.visitor_name, events.c.country, events.c.country_code, events.c.created_at)
        .where(events.c.event_type == "visit")
        .order_by(events.c.id.asc() if after_id is not None else events.c.id.desc())
        .limit(limit)
    )
    if after_id is not None:
        stmt = stmt.where(events.c.id > after_id)
    with engine.connect() as conn:
        rows = [dict(r) for r in conn.execute(stmt).mappings().all()]
    if after_id is None:
        rows.reverse()
    for row in rows:
        if isinstance(row.get("created_at"), datetime):
            row["created_at"] = row["created_at"].isoformat()
    return rows



# -----------------------------------------------------------------------------
# GLOBAL CUSTOMER CHAT
# Public text-only chat. No IP/city/coordinates are stored.
# -----------------------------------------------------------------------------
CHAT_MAX_LENGTH = 240
CHAT_COOLDOWN_SECONDS = 4

def clean_chat_message(value):
    value = re.sub(r"\s+", " ", str(value or "").strip())
    value = value[:CHAT_MAX_LENGTH]
    # Strip control characters.
    value = "".join(ch for ch in value if ch.isprintable())
    return value.strip()

def chat_message_has_private_contact(value):
    value = str(value or "")
    # Keep public chat safer: no URLs, email addresses or phone-number-like strings.
    if re.search(r"https?://|www\.", value, flags=re.I):
        return True
    if re.search(r"\b[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}\b", value):
        return True
    digits = re.sub(r"\D", "", value)
    if len(digits) >= 8:
        return True
    return False

def serialize_chat_row(row):
    item = dict(row)
    created = item.get("created_at")
    if isinstance(created, datetime):
        item["created_at"] = created.isoformat()
    item.pop("visitor_id", None)
    return item

def latest_chat_messages(limit=40, after_id=None):
    limit = max(1, min(int(limit or 40), 60))
    stmt = select(
        chat_messages.c.id,
        chat_messages.c.display_name,
        chat_messages.c.country,
        chat_messages.c.country_code,
        chat_messages.c.message,
        chat_messages.c.created_at,
    )
    if after_id is not None and after_id > 0:
        stmt = stmt.where(chat_messages.c.id > after_id).order_by(chat_messages.c.id.asc()).limit(limit)
    else:
        stmt = stmt.order_by(chat_messages.c.id.desc()).limit(limit)

    with engine.connect() as conn:
        rows = conn.execute(stmt).mappings().all()

    if not after_id:
        rows = list(reversed(rows))
    return [serialize_chat_row(row) for row in rows]


# -----------------------------------------------------------------------------
# ROUTES
# -----------------------------------------------------------------------------
@app.after_request
def add_security_headers(response):
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "SAMEORIGIN"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    return response


@app.route("/")
def home():
    ensure_visitor()
    categories = list(dict.fromkeys(p["category"] for p in PRODUCTS))
    return render_template(
        "index.html",
        store=STORE,
        products=PRODUCTS,
        categories=categories,
        payment_methods=PAYMENT_METHODS,
        social_platforms=SOCIAL_PLATFORMS,
        stats=get_stats(),
    )




@app.route("/favicon.ico")
def favicon():
    return app.send_static_file("img/favicon.ico")

@app.route("/sitemap.xml")
def sitemap():
    xml = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://alexstreaming.store/</loc>
    <lastmod>2026-09-09</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
"""
    return Response(xml, mimetype="application/xml")


@app.route("/robots.txt")
def robots():
    content = """User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://alexstreaming.store/sitemap.xml
"""
    return Response(content, mimetype="text/plain")

@app.route("/api/catalog")
def catalog():
    return jsonify({
        "store": STORE,
        "products": PRODUCTS,
        "payment_methods": PAYMENT_METHODS,
        "social_platforms": SOCIAL_PLATFORMS,
    })


@app.route("/api/stats")
def stats():
    return jsonify(get_stats())


@app.route("/api/presence", methods=["POST"])
def presence():
    visitor_id = ensure_visitor()
    geo = detect_country_from_ip(client_public_ip())
    payload = request.get_json(silent=True) or {}
    display_name = clean_required_name(payload.get("name") or session.get("display_name"))
    if len(display_name) < 2:
        return jsonify({"ok": False, "error": "name_required"}), 400
    session["display_name"] = display_name
    if geo["country"] == "País no disponible":
        fallback_country = clean_country(payload.get("country"))
        fallback_code = clean_country_code(payload.get("country_code"))
        if fallback_country != "País no disponible":
            geo = {"country": fallback_country, "country_code": fallback_code}

    with engine.begin() as conn:
        conn.execute(
            update(visitors)
            .where(visitors.c.visitor_id == visitor_id)
            .values(
                last_seen=utcnow(),
                country=geo["country"],
                country_code=geo["country_code"],
                device=device_from_user_agent(),
                display_name=display_name,
            )
        )

    now_epoch = int(time.time())
    last_presence = int(session.get("last_presence", 0) or 0)
    event = None
    if now_epoch - last_presence >= 600:
        event_id = record_event("visit")
        with engine.connect() as conn:
            row = conn.execute(
                select(events.c.id, events.c.visitor_name, events.c.country, events.c.country_code, events.c.created_at)
                .where(events.c.id == event_id)
            ).mappings().first()
        if row:
            event = dict(row)
            if isinstance(event.get("created_at"), datetime):
                event["created_at"] = event["created_at"].isoformat()
        session["last_presence"] = now_epoch

    feed = latest_visitor_events(limit=8)
    latest_id = feed[-1]["id"] if feed else 0
    return jsonify({
        "ok": True,
        "event": event,
        "feed": feed,
        "latest_id": latest_id,
        "name": display_name,
        "country": geo["country"],
        "country_code": geo["country_code"],
        "stats": get_stats(),
    })


@app.route("/api/visitor-feed")
def visitor_feed():
    try:
        after = max(0, int(request.args.get("after", "0")))
    except ValueError:
        after = 0
    if after > 0:
        events_data = latest_visitor_events(limit=12, after_id=after)
        latest_id = events_data[-1]["id"] if events_data else after
    else:
        events_data = latest_visitor_events(limit=12)
        latest_id = events_data[-1]["id"] if events_data else 0
    return jsonify({"ok": True, "events": events_data, "latest_id": latest_id})


@app.route("/api/track-event", methods=["POST"])
def track_event():
    payload = request.get_json(silent=True) or {}
    event_type = str(payload.get("event_type", "")).strip().lower()
    if event_type not in {"details", "checkout", "social_quote"}:
        return jsonify({"ok": False, "error": "invalid_event"}), 400
    event_id = record_event(
        event_type,
        product_id=payload.get("product_id"),
        product_name=payload.get("product_name"),
        plan=payload.get("plan"),
    )
    return jsonify({"ok": True, "event_id": event_id})


@app.route("/api/track-order", methods=["POST"])
def track_order():
    payload = request.get_json(silent=True) or {}
    product = str(payload.get("product", "")).strip()[:180]
    product_id = str(payload.get("product_id", "")).strip()[:100]
    plan = str(payload.get("plan", "")).strip()[:180]
    payment = str(payload.get("payment", "")).strip()[:80]
    if not product:
        return jsonify({"ok": False, "error": "missing_product"}), 400
    record_event("order", product_id=product_id, product_name=product, plan=plan, payment=payment)
    return jsonify({"ok": True, "orders": get_stats()["orders"]})



@app.route("/api/chat", methods=["GET"])
def chat_feed():
    try:
        after = max(0, int(request.args.get("after", "0")))
    except ValueError:
        after = 0
    messages = latest_chat_messages(limit=50, after_id=after if after else None)
    latest_id = messages[-1]["id"] if messages else after
    return jsonify({"ok": True, "messages": messages, "latest_id": latest_id})


@app.route("/api/chat", methods=["POST"])
def chat_send():
    visitor_id = ensure_visitor()
    payload = request.get_json(silent=True) or {}
    message = clean_chat_message(payload.get("message"))

    context = visitor_context(visitor_id)

    # V37: usa exactamente el nombre con el que la persona se registró
    # en la portada. El navegador lo envía junto con el mensaje y aquí
    # se sincroniza con la sesión/registro del visitante.
    display_name = clean_required_name(
        payload.get("name")
        or session.get("display_name")
        or context.get("display_name")
    )
    if len(display_name) < 2 or display_name.lower() in {"visitante", "visitor", "guest", "usuario", "user"}:
        return jsonify({"ok": False, "error": "registration_required"}), 403

    session["display_name"] = display_name

    # Mantener sincronizado el nombre del visitante con el usado en el chat.
    with engine.begin() as conn:
        conn.execute(
            update(visitors)
            .where(visitors.c.visitor_id == visitor_id)
            .values(
                display_name=display_name[:80],
                last_seen=utcnow(),
            )
        )

    if not message:
        return jsonify({"ok": False, "error": "empty_message"}), 400
    if len(message) > CHAT_MAX_LENGTH:
        return jsonify({"ok": False, "error": "message_too_long"}), 400
    if chat_message_has_private_contact(message):
        return jsonify({"ok": False, "error": "private_contact_not_allowed"}), 400

    now_epoch = int(time.time())
    last_chat = int(session.get("last_chat_message", 0) or 0)
    if now_epoch - last_chat < CHAT_COOLDOWN_SECONDS:
        return jsonify({"ok": False, "error": "slow_down"}), 429

    with engine.begin() as conn:
        result = conn.execute(insert(chat_messages).values(
            visitor_id=visitor_id,
            display_name=display_name[:80],
            country=(context.get("country") or "")[:80],
            country_code=(context.get("country_code") or "")[:2],
            message=message,
            created_at=utcnow(),
        ))
        message_id = result.inserted_primary_key[0]

    session["last_chat_message"] = now_epoch

    with engine.connect() as conn:
        row = conn.execute(
            select(
                chat_messages.c.id,
                chat_messages.c.display_name,
                chat_messages.c.country,
                chat_messages.c.country_code,
                chat_messages.c.message,
                chat_messages.c.created_at,
            ).where(chat_messages.c.id == message_id)
        ).mappings().first()

    return jsonify({"ok": True, "message": serialize_chat_row(row)})


@app.route("/health")
def health():
    try:
        with engine.connect() as conn:
            conn.execute(select(func.count()).select_from(visitors)).scalar_one()
        return {"status": "ok", "database": "ok"}, 200
    except Exception:
        return {"status": "degraded", "database": "error"}, 503


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=os.environ.get("FLASK_DEBUG") == "1")
