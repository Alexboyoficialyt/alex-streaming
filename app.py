import os
from flask import Flask, render_template, jsonify
from werkzeug.middleware.proxy_fix import ProxyFix
from store_config import STORE, PRODUCTS, PAYMENT_METHODS

app = Flask(__name__)
app.wsgi_app = ProxyFix(app.wsgi_app, x_for=1, x_proto=1, x_host=1, x_port=1)

@app.after_request
def add_security_headers(response):
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "SAMEORIGIN"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    return response

@app.route("/")
def home():
    return render_template(
        "index.html",
        store=STORE,
        products=PRODUCTS,
        payment_methods=PAYMENT_METHODS,
    )

@app.route("/api/catalog")
def catalog():
    return jsonify({
        "store": STORE,
        "products": PRODUCTS,
        "payment_methods": PAYMENT_METHODS,
    })

@app.route("/health")
def health():
    return {"status": "ok"}, 200

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=os.environ.get("FLASK_DEBUG") == "1")
