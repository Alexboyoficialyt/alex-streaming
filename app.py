import os
import re
import sqlite3
import time
import uuid
import json
import ipaddress
from datetime import timedelta
from urllib.request import Request, urlopen
from urllib.parse import quote
from flask import Flask, render_template, jsonify, request, session
from werkzeug.middleware.proxy_fix import ProxyFix
from store_config import STORE, PRODUCTS, PAYMENT_METHODS, SOCIAL_PLATFORMS

app = Flask(__name__)
app.wsgi_app = ProxyFix(app.wsgi_app, x_for=1, x_proto=1, x_host=1, x_port=1)
app.secret_key = os.environ.get("SECRET_KEY", "alex-streaming-v12-premium-access")
app.permanent_session_lifetime = timedelta(days=365)

ANALYTICS_DB = os.environ.get(
    "ANALYTICS_DB",
    os.path.join(app.root_path, "data", "metrics.db"),
)


def db_connect():
    db_dir = os.path.dirname(ANALYTICS_DB)
    if db_dir:
        os.makedirs(db_dir, exist_ok=True)
    conn = sqlite3.connect(ANALYTICS_DB, timeout=10)
    conn.row_factory = sqlite3.Row
    return conn


def init_analytics():
    with db_connect() as conn:
        conn.execute("CREATE TABLE IF NOT EXISTS counters (key TEXT PRIMARY KEY, value INTEGER NOT NULL DEFAULT 0)")
        conn.execute("CREATE TABLE IF NOT EXISTS visitors (visitor_id TEXT PRIMARY KEY, first_seen TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)")
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS order_events (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                product TEXT NOT NULL,
                plan TEXT,
                payment TEXT,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
            """
        )
        # Guarda solamente país/código y un ID de evento. No guarda IP, ciudad ni coordenadas.
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS visitor_events (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                country TEXT NOT NULL,
                country_code TEXT,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
            """
        )
        conn.execute("INSERT OR IGNORE INTO counters(key, value) VALUES('visitors', 0)")
        conn.execute("INSERT OR IGNORE INTO counters(key, value) VALUES('orders', 0)")


def get_stats():
    with db_connect() as conn:
        rows = conn.execute("SELECT key, value FROM counters").fetchall()
    stats = {row["key"]: int(row["value"]) for row in rows}
    return {"visitors": stats.get("visitors", 0), "orders": stats.get("orders", 0)}


def ensure_visitor():
    session.permanent = True
    visitor_id = session.get("visitor_id")
    if not visitor_id:
        visitor_id = str(uuid.uuid4())
        session["visitor_id"] = visitor_id

    with db_connect() as conn:
        cursor = conn.execute("INSERT OR IGNORE INTO visitors(visitor_id) VALUES(?)", (visitor_id,))
        if cursor.rowcount == 1:
            conn.execute("UPDATE counters SET value = value + 1 WHERE key = 'visitors'")
    return visitor_id


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
        candidate = (candidate or "").strip()
        try:
            ip = ipaddress.ip_address(candidate)
            if ip.is_global:
                return candidate
        except ValueError:
            continue
    return ""


def fetch_json(url, timeout=2.8):
    req = Request(url, headers={"User-Agent": "AlexStreaming/12 country-only-presence"})
    with urlopen(req, timeout=timeout) as response:
        return json.loads(response.read().decode("utf-8", errors="replace"))


def country_from_proxy_headers():
    """Usa cabeceras de CDN/proxy si existen. Solo devuelve país, nunca IP."""
    for header in (
        "CF-IPCountry",
        "X-Vercel-IP-Country",
        "CloudFront-Viewer-Country",
        "X-AppEngine-Country",
    ):
        code = clean_country_code(request.headers.get(header))
        if code and code not in {"XX", "T1"}:
            # El navegador convertirá el código ISO a nombre localizado si hace falta.
            return {"country": code, "country_code": code}
    return None


def detect_country_from_ip(ip):
    """Devuelve solo país/código aproximados. Nunca persiste la IP."""
    header_geo = country_from_proxy_headers()
    if header_geo:
        return header_geo
    if not ip:
        return {"country": "País no disponible", "country_code": ""}

    providers = [
        (f"https://ipwho.is/{quote(ip)}", "ipwho"),
        (f"https://ipapi.co/{quote(ip)}/json/", "ipapi"),
        (f"https://ipinfo.io/{quote(ip)}/json", "ipinfo"),
        (f"https://api.country.is/{quote(ip)}", "countryis"),
    ]
    for url, provider in providers:
        try:
            data = fetch_json(url, timeout=2.4)
            if provider == "ipwho" and data.get("success") is False:
                continue
            if provider == "ipinfo":
                code = data.get("country")
                country = code
            elif provider == "countryis":
                code = data.get("country")
                country = code
            else:
                country = data.get("country") or data.get("country_name")
                code = data.get("country_code") or data.get("country_code2")
            code = clean_country_code(code)
            if country or code:
                return {"country": clean_country(country or code), "country_code": code}
        except Exception:
            continue
    return {"country": "País no disponible", "country_code": ""}


def latest_visitor_events(limit=6, after_id=None):
    with db_connect() as conn:
        if after_id is not None:
            rows = conn.execute(
                "SELECT id, country, country_code, created_at FROM visitor_events WHERE id > ? ORDER BY id ASC LIMIT ?",
                (after_id, limit),
            ).fetchall()
        else:
            rows = conn.execute(
                "SELECT id, country, country_code, created_at FROM visitor_events ORDER BY id DESC LIMIT ?",
                (limit,),
            ).fetchall()
            rows = list(reversed(rows))
    return [dict(row) for row in rows]


init_analytics()


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
    ensure_visitor()
    geo = detect_country_from_ip(client_public_ip())

    # Fallback opcional: si el backend no pudo localizar el país, acepta el país
    # aproximado enviado por el navegador. Nunca acepta ni guarda una IP del cliente.
    payload = request.get_json(silent=True) or {}
    if geo["country"] == "País no disponible":
        fallback_country = clean_country(payload.get("country"))
        fallback_code = clean_country_code(payload.get("country_code"))
        if fallback_country != "País no disponible":
            geo = {"country": fallback_country, "country_code": fallback_code}

    now = int(time.time())
    last_presence = int(session.get("last_presence", 0) or 0)
    event = None
    if now - last_presence >= 600:
        with db_connect() as conn:
            cursor = conn.execute(
                "INSERT INTO visitor_events(country, country_code) VALUES(?, ?)",
                (geo["country"], geo["country_code"]),
            )
            event_id = int(cursor.lastrowid)
            row = conn.execute(
                "SELECT id, country, country_code, created_at FROM visitor_events WHERE id = ?",
                (event_id,),
            ).fetchone()
            event = dict(row) if row else None
        session["last_presence"] = now

    feed = latest_visitor_events(limit=8)
    latest_id = feed[-1]["id"] if feed else 0
    return jsonify({
        "ok": True,
        "event": event,
        "feed": feed,
        "latest_id": latest_id,
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
    events = latest_visitor_events(limit=12, after_id=after)
    latest_id = events[-1]["id"] if events else after
    return jsonify({"ok": True, "events": events, "latest_id": latest_id})


@app.route("/api/track-order", methods=["POST"])
def track_order():
    payload = request.get_json(silent=True) or {}
    product = str(payload.get("product", "")).strip()[:120]
    plan = str(payload.get("plan", "")).strip()[:160]
    payment = str(payload.get("payment", "")).strip()[:80]
    if not product:
        return jsonify({"ok": False, "error": "missing_product"}), 400

    with db_connect() as conn:
        conn.execute(
            "INSERT INTO order_events(product, plan, payment) VALUES(?, ?, ?)",
            (product, plan, payment),
        )
        conn.execute("UPDATE counters SET value = value + 1 WHERE key = 'orders'")
        row = conn.execute("SELECT value FROM counters WHERE key = 'orders'").fetchone()
        total = int(row["value"]) if row else 0

    return jsonify({"ok": True, "orders": total})


@app.route("/health")
def health():
    return {"status": "ok"}, 200


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=os.environ.get("FLASK_DEBUG") == "1")
