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


product_reviews = Table(
    "product_reviews", metadata,
    Column("id", Integer, primary_key=True, autoincrement=True),
    Column("product_id", String(100), nullable=False, index=True),
    Column("product_name", String(180), nullable=False),
    Column("visitor_id", String(64), nullable=False, index=True),
    Column("display_name", String(80), nullable=False),
    Column("rating", Integer, nullable=False),
    Column("comment", Text, nullable=False),
    Column("created_at", DateTime(timezone=True), nullable=False),
    Column("updated_at", DateTime(timezone=True), nullable=False),
)


live_activity = Table(
    "live_activity", metadata,
    Column("visitor_id", String(64), primary_key=True),
    Column("action", String(24), nullable=False, default="browsing"),
    Column("product_id", String(100), nullable=True),
    Column("product_name", String(180), nullable=True),
    Column("display_name", String(80), nullable=False, default="Visitante"),
    Column("country", String(80), nullable=False, default="País no disponible"),
    Column("country_code", String(2), nullable=False, default=""),
    Column("share_identity", Integer, nullable=False, default=0),
    Column("updated_at", DateTime(timezone=True), nullable=False),
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


LIVE_ACTIVITY_ACTIONS = {"browsing", "view_product", "checkout", "order"}


def update_live_activity(visitor_id, action="browsing", product_id=None, product_name=None, share_identity=None):
    if not visitor_id:
        visitor_id = ensure_visitor()

    context = visitor_context(visitor_id)
    if share_identity is None:
        share_identity = bool(session.get("share_live_identity", False))

    values = {
        "action": action if action in LIVE_ACTIVITY_ACTIONS else "browsing",
        "product_id": str(product_id or "")[:100] or None,
        "product_name": str(product_name or "")[:180] or None,
        "display_name": (context.get("display_name") or "Visitante")[:80],
        "country": (context.get("country") or "País no disponible")[:80],
        "country_code": (context.get("country_code") or "")[:2],
        "share_identity": 1 if share_identity else 0,
        "updated_at": utcnow(),
    }

    with engine.begin() as conn:
        exists = conn.execute(
            select(live_activity.c.visitor_id)
            .where(live_activity.c.visitor_id == visitor_id)
        ).first()

        if exists:
            conn.execute(
                update(live_activity)
                .where(live_activity.c.visitor_id == visitor_id)
                .values(**values)
            )
        else:
            conn.execute(
                insert(live_activity).values(visitor_id=visitor_id, **values)
            )


def current_live_activity(limit=24):
    cutoff = utcnow() - timedelta(seconds=ONLINE_WINDOW_SECONDS)

    stmt = (
        select(
            visitors.c.display_name,
            visitors.c.country,
            visitors.c.country_code,
            visitors.c.last_seen,
            live_activity.c.action,
            live_activity.c.product_id,
            live_activity.c.product_name,
            live_activity.c.share_identity,
            live_activity.c.updated_at,
        )
        .select_from(
            visitors.outerjoin(
                live_activity,
                visitors.c.visitor_id == live_activity.c.visitor_id
            )
        )
        .where(visitors.c.last_seen >= cutoff)
        .order_by(visitors.c.last_seen.desc())
        .limit(max(1, min(int(limit or 24), 50)))
    )

    with engine.connect() as conn:
        rows = [dict(r) for r in conn.execute(stmt).mappings().all()]

    now = utcnow()
    output = []

    for row in rows:
        action = row.get("action") or "browsing"
        updated_at = row.get("updated_at")

        if action in {"checkout", "order"} and isinstance(updated_at, datetime):
            if now - updated_at > timedelta(seconds=60):
                action = "browsing"

        share = bool(row.get("share_identity"))

        output.append({
            "name": (row.get("display_name") or "Visitante") if share else "Visitante",
            "country": (row.get("country") or "País no disponible") if share else "",
            "country_code": (row.get("country_code") or "") if share else "",
            "action": action,
            "product_id": row.get("product_id") if action != "browsing" else None,
            "product_name": row.get("product_name") if action != "browsing" else None,
            "share_identity": share,
        })

    return output


ONLINE_WINDOW_SECONDS = 45


def get_stats():
    """Real site metrics.

    visitors: unique browser sessions stored in the visitors table
    page_views: real page-load events recorded by the browser
    online: unique visitor sessions with a heartbeat in the last 45 seconds
    orders: order intents already tracked by the site
    """
    cutoff = utcnow() - timedelta(seconds=ONLINE_WINDOW_SECONDS)
    with engine.connect() as conn:
        visitor_total = conn.execute(
            select(func.count()).select_from(visitors)
        ).scalar_one()

        order_total = conn.execute(
            select(func.count()).select_from(events).where(events.c.event_type == "order")
        ).scalar_one()

        page_view_total = conn.execute(
            select(func.count()).select_from(events).where(events.c.event_type == "page_view")
        ).scalar_one()

        online_total = conn.execute(
            select(func.count()).select_from(visitors).where(visitors.c.last_seen >= cutoff)
        ).scalar_one()

    return {
        "visitors": int(visitor_total or 0),
        "page_views": int(page_view_total or 0),
        "online": int(online_total or 0),
        "orders": int(order_total or 0),
    }


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
        select(
            events.c.id,
            events.c.visitor_id,
            events.c.visitor_name,
            events.c.country,
            events.c.country_code,
            events.c.created_at,
            live_activity.c.share_identity,
        )
        .select_from(
            events.outerjoin(
                live_activity,
                events.c.visitor_id == live_activity.c.visitor_id
            )
        )
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
        share = bool(row.pop("share_identity", 0))
        row.pop("visitor_id", None)

        if not share:
            row["visitor_name"] = "Visitante"
            row["country"] = ""
            row["country_code"] = ""

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

def latest_chat_messages(limit=100, after_id=None, before_id=None):
    """Read chat history without deleting messages.

    after_id: newer messages, ascending
    before_id: older messages, returned ascending
    default: latest messages, ascending
    """
    limit = max(1, min(int(limit or 100), 200))

    stmt = select(
        chat_messages.c.id,
        chat_messages.c.display_name,
        chat_messages.c.country,
        chat_messages.c.country_code,
        chat_messages.c.message,
        chat_messages.c.created_at,
    )

    if after_id is not None and after_id > 0:
        stmt = (
            stmt.where(chat_messages.c.id > after_id)
            .order_by(chat_messages.c.id.asc())
            .limit(limit)
        )
    elif before_id is not None and before_id > 0:
        stmt = (
            stmt.where(chat_messages.c.id < before_id)
            .order_by(chat_messages.c.id.desc())
            .limit(limit)
        )
    else:
        stmt = stmt.order_by(chat_messages.c.id.desc()).limit(limit)

    with engine.connect() as conn:
        rows = list(conn.execute(stmt).mappings().all())

    # Always send chronological order to the browser.
    if before_id or not after_id:
        rows = list(reversed(rows))

    return [serialize_chat_row(row) for row in rows]



# -----------------------------------------------------------------------------
# PRODUCT REVIEWS
# Una reseña por visitante y producto. Si vuelve a enviar, actualiza la anterior.
# No se permiten teléfonos, correos ni enlaces dentro de la reseña pública.
# -----------------------------------------------------------------------------
REVIEW_MAX_LENGTH = 500
REVIEW_COOLDOWN_SECONDS = 8
VALID_PRODUCT_MAP = {str(p.get("id")): p for p in PRODUCTS}

def clean_review_comment(value):
    value = re.sub(r"\s+", " ", str(value or "").strip())
    value = "".join(ch for ch in value if ch.isprintable())
    return value[:REVIEW_MAX_LENGTH].strip()

def serialize_review_row(row):
    item = dict(row)
    item.pop("visitor_id", None)
    for key in ("created_at", "updated_at"):
        value = item.get(key)
        if isinstance(value, datetime):
            item[key] = value.isoformat()
    return item

def review_summary(product_id):
    with engine.connect() as conn:
        row = conn.execute(
            select(
                func.count(product_reviews.c.id).label("count"),
                func.avg(product_reviews.c.rating).label("average"),
            ).where(product_reviews.c.product_id == product_id)
        ).mappings().first()
    count = int((row or {}).get("count") or 0)
    average = float((row or {}).get("average") or 0)
    return {"count": count, "average": round(average, 1) if count else 0}

def all_review_summaries():
    summaries = {str(p.get("id")): {"count": 0, "average": 0} for p in PRODUCTS}
    with engine.connect() as conn:
        rows = conn.execute(
            select(
                product_reviews.c.product_id,
                func.count(product_reviews.c.id).label("count"),
                func.avg(product_reviews.c.rating).label("average"),
            ).group_by(product_reviews.c.product_id)
        ).mappings().all()
    for row in rows:
        pid = str(row.get("product_id") or "")
        if pid:
            count = int(row.get("count") or 0)
            average = float(row.get("average") or 0)
            summaries[pid] = {"count": count, "average": round(average, 1) if count else 0}
    return summaries

def latest_product_reviews(product_id, limit=24):
    limit = max(1, min(int(limit or 24), 40))
    with engine.connect() as conn:
        rows = conn.execute(
            select(product_reviews)
            .where(product_reviews.c.product_id == product_id)
            .order_by(product_reviews.c.updated_at.desc(), product_reviews.c.id.desc())
            .limit(limit)
        ).mappings().all()
    return [serialize_review_row(row) for row in rows]


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
        review_summaries=all_review_summaries(),
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
    response = jsonify(get_stats())
    response.headers["Cache-Control"] = "no-store, max-age=0"
    return response


@app.route("/api/page-view", methods=["POST"])
def page_view():
    """Record one real browser page view.

    A very small cooldown prevents accidental duplicate JavaScript calls while
    still allowing a normal refresh/navigation to be counted as another view.
    """
    ensure_visitor()
    now_epoch = time.time()
    last_page_view = float(session.get("last_page_view", 0) or 0)

    if now_epoch - last_page_view >= 2:
        record_event("page_view")
        session["last_page_view"] = now_epoch

    response = jsonify({"ok": True, **get_stats()})
    response.headers["Cache-Control"] = "no-store, max-age=0"
    return response


@app.route("/api/heartbeat", methods=["POST"])
def heartbeat():
    """Keep the current browser session marked as online."""
    visitor_id = ensure_visitor()

    with engine.connect() as conn:
        exists = conn.execute(
            select(live_activity.c.visitor_id)
            .where(live_activity.c.visitor_id == visitor_id)
        ).first()

    if not exists:
        update_live_activity(visitor_id, action="browsing")

    response = jsonify({"ok": True, **get_stats()})
    response.headers["Cache-Control"] = "no-store, max-age=0"
    return response


@app.route("/api/live-activity", methods=["GET", "POST"])
def live_activity_api():
    if request.method == "POST":
        visitor_id = ensure_visitor()
        payload = request.get_json(silent=True) or {}
        action = str(payload.get("action") or "browsing").strip().lower()

        if action not in LIVE_ACTIVITY_ACTIONS:
            return jsonify({"ok": False, "error": "invalid_action"}), 400

        update_live_activity(
            visitor_id,
            action=action,
            product_id=payload.get("product_id"),
            product_name=payload.get("product_name"),
        )

    response = jsonify({
        "ok": True,
        "stats": get_stats(),
        "activity": current_live_activity(),
    })
    response.headers["Cache-Control"] = "no-store, max-age=0"
    return response


@app.route("/api/presence", methods=["POST"])
def presence():
    visitor_id = ensure_visitor()
    geo = detect_country_from_ip(client_public_ip())
    payload = request.get_json(silent=True) or {}
    display_name = clean_required_name(payload.get("name") or session.get("display_name"))
    if len(display_name) < 2:
        return jsonify({"ok": False, "error": "name_required"}), 400
    session["display_name"] = display_name
    share_identity = bool(payload.get("share_identity", False))
    session["share_live_identity"] = share_identity
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

    update_live_activity(
        visitor_id,
        action="browsing",
        share_identity=share_identity,
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


def recent_order_events(limit=20, after_id=None):
    """Return real order intents recorded by the site.

    If after_id is provided, only newer orders are returned.
    Public identity is exposed only when the visitor consented.
    """
    stmt = (
        select(
            events.c.id,
            events.c.visitor_id,
            events.c.product_name,
            events.c.plan,
            events.c.visitor_name,
            events.c.country,
            events.c.country_code,
            events.c.created_at,
            live_activity.c.share_identity,
        )
        .select_from(
            events.outerjoin(
                live_activity,
                events.c.visitor_id == live_activity.c.visitor_id
            )
        )
        .where(events.c.event_type == "order")
    )

    if after_id is not None:
        stmt = (
            stmt
            .where(events.c.id > after_id)
            .order_by(events.c.id.asc())
        )
    else:
        stmt = stmt.order_by(events.c.id.desc())

    stmt = stmt.limit(max(1, min(int(limit or 20), 50)))

    with engine.connect() as conn:
        rows = [dict(r) for r in conn.execute(stmt).mappings().all()]

    output = []
    for row in rows:
        # En V91+ el consentimiento de nombre+país es obligatorio para acceder.
        # Por eso el aviso de pedido usa el mismo nombre registrado.
        row.pop("share_identity", None)
        row.pop("visitor_id", None)

        created_at = row.get("created_at")
        if isinstance(created_at, datetime):
            created_at = created_at.isoformat()

        output.append({
            "id": row.get("id"),
            "product": row.get("product_name") or "Producto",
            "plan": row.get("plan") or "",
            "visitor_name": row.get("visitor_name") or "Cliente",
            "country": row.get("country") or "",
            "country_code": row.get("country_code") or "",
            "created_at": created_at or "",
        })

    return output


@app.route("/api/recent-orders")
def recent_orders():
    try:
        after = max(0, int(request.args.get("after", "0")))
    except ValueError:
        after = 0

    orders_data = recent_order_events(
        limit=30,
        after_id=after if after > 0 else None
    )

    if orders_data:
        latest_id = max(int(item.get("id") or 0) for item in orders_data)
    else:
        latest_id = after

    response = jsonify({
        "ok": True,
        "orders": orders_data,
        "latest_id": latest_id,
    })
    response.headers["Cache-Control"] = "no-store, max-age=0"
    return response


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

    if event_type == "details":
        update_live_activity(
            session.get("visitor_id"),
            action="view_product",
            product_id=payload.get("product_id"),
            product_name=payload.get("product_name"),
        )
    elif event_type == "checkout":
        update_live_activity(
            session.get("visitor_id"),
            action="checkout",
            product_id=payload.get("product_id"),
            product_name=payload.get("product_name"),
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

    visitor_id = ensure_visitor()
    event_id = record_event(
        "order",
        product_id=product_id,
        product_name=product,
        plan=plan,
        payment=payment,
    )

    update_live_activity(
        visitor_id,
        action="order",
        product_id=product_id,
        product_name=product,
    )

    context = visitor_context(visitor_id)

    public_event = {
        "id": event_id,
        "product": product,
        "plan": plan,
        "visitor_name": context.get("display_name") or "Cliente",
        "country": context.get("country") or "",
        "country_code": context.get("country_code") or "",
        "created_at": utcnow().isoformat(),
    }

    response = jsonify({
        "ok": True,
        "orders": get_stats()["orders"],
        "event": public_event,
    })
    response.headers["Cache-Control"] = "no-store, max-age=0"
    return response




@app.route("/api/reviews", methods=["GET"])
def product_review_feed():
    visitor_id = ensure_visitor()
    product_id = str(request.args.get("product_id") or "").strip()[:100]
    if product_id not in VALID_PRODUCT_MAP:
        return jsonify({"ok": False, "error": "invalid_product"}), 404

    reviews = latest_product_reviews(product_id)
    summary = review_summary(product_id)

    own_review = None
    with engine.connect() as conn:
        row = conn.execute(
            select(product_reviews)
            .where(
                product_reviews.c.product_id == product_id,
                product_reviews.c.visitor_id == visitor_id,
            )
            .order_by(product_reviews.c.id.desc())
            .limit(1)
        ).mappings().first()
        if row:
            own_review = serialize_review_row(row)

    return jsonify({
        "ok": True,
        "product_id": product_id,
        "summary": summary,
        "reviews": reviews,
        "own_review": own_review,
    })


@app.route("/api/reviews", methods=["POST"])
def product_review_submit():
    visitor_id = ensure_visitor()
    payload = request.get_json(silent=True) or {}

    product_id = str(payload.get("product_id") or "").strip()[:100]
    product = VALID_PRODUCT_MAP.get(product_id)
    if not product:
        return jsonify({"ok": False, "error": "invalid_product"}), 404

    try:
        rating = int(payload.get("rating"))
    except (TypeError, ValueError):
        return jsonify({"ok": False, "error": "invalid_rating"}), 400
    if rating < 1 or rating > 5:
        return jsonify({"ok": False, "error": "invalid_rating"}), 400

    comment = clean_review_comment(payload.get("comment"))
    if len(comment) < 3:
        return jsonify({"ok": False, "error": "comment_too_short"}), 400
    if chat_message_has_private_contact(comment):
        return jsonify({"ok": False, "error": "private_contact_not_allowed"}), 400

    context = visitor_context(visitor_id)
    display_name = clean_required_name(
        payload.get("name")
        or session.get("display_name")
        or context.get("display_name")
    )
    if len(display_name) < 2 or display_name.lower() in {
        "visitante", "visitor", "guest", "usuario", "user", "invitado"
    }:
        return jsonify({"ok": False, "error": "registration_required"}), 403

    session["display_name"] = display_name

    # Mantener sincronizado el nombre registrado.
    with engine.begin() as conn:
        conn.execute(
            update(visitors)
            .where(visitors.c.visitor_id == visitor_id)
            .values(display_name=display_name[:80], last_seen=utcnow())
        )

    now_epoch = int(time.time())
    last_review = int(session.get("last_product_review", 0) or 0)
    if now_epoch - last_review < REVIEW_COOLDOWN_SECONDS:
        return jsonify({"ok": False, "error": "slow_down"}), 429

    now = utcnow()
    updated_existing = False
    with engine.begin() as conn:
        existing = conn.execute(
            select(product_reviews.c.id)
            .where(
                product_reviews.c.product_id == product_id,
                product_reviews.c.visitor_id == visitor_id,
            )
            .order_by(product_reviews.c.id.desc())
            .limit(1)
        ).first()

        if existing:
            review_id = existing[0]
            conn.execute(
                update(product_reviews)
                .where(product_reviews.c.id == review_id)
                .values(
                    display_name=display_name[:80],
                    rating=rating,
                    comment=comment,
                    updated_at=now,
                )
            )
            updated_existing = True
        else:
            result = conn.execute(
                insert(product_reviews).values(
                    product_id=product_id,
                    product_name=str(product.get("name") or "")[:180],
                    visitor_id=visitor_id,
                    display_name=display_name[:80],
                    rating=rating,
                    comment=comment,
                    created_at=now,
                    updated_at=now,
                )
            )
            review_id = result.inserted_primary_key[0]

    session["last_product_review"] = now_epoch
    record_event(
        "review",
        product_id=product_id,
        product_name=str(product.get("name") or ""),
    )

    with engine.connect() as conn:
        row = conn.execute(
            select(product_reviews).where(product_reviews.c.id == review_id)
        ).mappings().first()

    return jsonify({
        "ok": True,
        "updated": updated_existing,
        "review": serialize_review_row(row),
        "summary": review_summary(product_id),
    })


@app.route("/api/chat", methods=["GET"])
def chat_feed():
    try:
        after = max(0, int(request.args.get("after", "0")))
    except ValueError:
        after = 0

    try:
        before = max(0, int(request.args.get("before", "0")))
    except ValueError:
        before = 0

    if before:
        messages = latest_chat_messages(limit=100, before_id=before)
        oldest_id = messages[0]["id"] if messages else before

        with engine.connect() as conn:
            older_exists = conn.execute(
                select(func.count())
                .select_from(chat_messages)
                .where(chat_messages.c.id < oldest_id)
            ).scalar_one()

        return jsonify({
            "ok": True,
            "messages": messages,
            "oldest_id": oldest_id,
            "has_more": bool(older_exists),
        })

    messages = latest_chat_messages(limit=100, after_id=after if after else None)
    latest_id = messages[-1]["id"] if messages else after

    if after:
        has_more = False
    else:
        oldest_id = messages[0]["id"] if messages else 0
        with engine.connect() as conn:
            older_exists = conn.execute(
                select(func.count())
                .select_from(chat_messages)
                .where(chat_messages.c.id < oldest_id)
            ).scalar_one() if oldest_id else 0
        has_more = bool(older_exists)

    return jsonify({
        "ok": True,
        "messages": messages,
        "latest_id": latest_id,
        "oldest_id": messages[0]["id"] if messages else 0,
        "has_more": has_more,
    })


@app.route("/api/chat", methods=["POST"])
def chat_send():
    visitor_id = ensure_visitor()
    payload = request.get_json(silent=True) or {}
    message = clean_chat_message(payload.get("message"))

    context = visitor_context(visitor_id)

    # El nombre del chat SIEMPRE sale del registro de acceso.
    # No se permite cambiarlo enviando otro nombre desde el navegador.
    display_name = clean_required_name(
        session.get("display_name")
        or context.get("display_name")
    )

    if len(display_name) < 2 or display_name.lower() in {"visitante", "visitor", "guest", "usuario", "user"}:
        return jsonify({"ok": False, "error": "registration_required"}), 403

    session["display_name"] = display_name

    # Mantener el mismo nombre registrado en la tabla de visitantes.
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
