# ============================================================
# ALEX STREAMING // DIGITAL HUB
# EDITA ESTE ARCHIVO PARA CAMBIAR TU TIENDA.
# ============================================================

STORE = {
    "name": "ALEX STREAMING",
    "tagline": "DIGITAL HUB",
    "domain": "https://tudominio.com",  # Cambia esto cuando tengas tu dominio
    "whatsapp": "51984933571",          # +51 984 933 571 (sin + ni espacios)
    "currency": "S/",
    "support_text": "Atención rápida por WhatsApp",
}

# IMPORTANTE: Los precios son DEMO para que veas la tienda funcionando.
# Cámbialos por tus precios reales y ofrece únicamente productos/planes
# que estés autorizado a comercializar.
PRODUCTS = [
    {
        "id": "netflix",
        "name": "Netflix",
        "icon": "simple-icons:netflix",
        "accent": "#E50914",
        "category": "Series y películas",
        "description": "Acceso digital con activación coordinada por WhatsApp.",
        "badge": "TOP",
        "plans": [
            {"name": "30 días", "price": 15.00},
            {"name": "90 días", "price": 39.00},
        ],
    },
    {
        "id": "disney",
        "name": "Disney+",
        "icon": "simple-icons:disneyplus",
        "accent": "#38A8FF",
        "category": "Series y películas",
        "description": "Catálogo familiar, series y entretenimiento digital.",
        "badge": "POPULAR",
        "plans": [
            {"name": "30 días", "price": 12.00},
            {"name": "90 días", "price": 32.00},
        ],
    },
    {
        "id": "max",
        "name": "Max",
        "icon": "simple-icons:max",
        "accent": "#8B5CF6",
        "category": "Series y películas",
        "description": "Entretenimiento premium con compra rápida.",
        "badge": "NUEVO",
        "plans": [
            {"name": "30 días", "price": 12.00},
            {"name": "90 días", "price": 32.00},
        ],
    },
    {
        "id": "primevideo",
        "name": "Prime Video",
        "icon": "simple-icons:primevideo",
        "accent": "#00A8E1",
        "category": "Series y películas",
        "description": "Películas y series con soporte directo por WhatsApp.",
        "badge": "HD",
        "plans": [
            {"name": "30 días", "price": 10.00},
            {"name": "90 días", "price": 27.00},
        ],
    },
    {
        "id": "crunchyroll",
        "name": "Crunchyroll",
        "icon": "simple-icons:crunchyroll",
        "accent": "#F47521",
        "category": "Anime",
        "description": "Anime y estrenos en una experiencia simple y rápida.",
        "badge": "ANIME",
        "plans": [
            {"name": "30 días", "price": 10.00},
            {"name": "90 días", "price": 26.00},
        ],
    },
    {
        "id": "paramount",
        "name": "Paramount+",
        "icon": "simple-icons:paramountplus",
        "accent": "#0064FF",
        "category": "Series y películas",
        "description": "Contenido digital con activación coordinada.",
        "badge": "PLUS",
        "plans": [
            {"name": "30 días", "price": 10.00},
            {"name": "90 días", "price": 26.00},
        ],
    },
    {
        "id": "appletv",
        "name": "Apple TV+",
        "icon": "simple-icons:appletv",
        "accent": "#FFFFFF",
        "category": "Series y películas",
        "description": "Producciones originales y entretenimiento digital.",
        "badge": "4K",
        "plans": [
            {"name": "30 días", "price": 12.00},
            {"name": "90 días", "price": 32.00},
        ],
    },
    {
        "id": "spotify",
        "name": "Spotify Premium",
        "icon": "simple-icons:spotify",
        "accent": "#1ED760",
        "category": "Música",
        "description": "Música y audio con gestión rápida de tu pedido.",
        "badge": "MUSIC",
        "plans": [
            {"name": "30 días", "price": 10.00},
            {"name": "90 días", "price": 27.00},
        ],
    },
    {
        "id": "youtube",
        "name": "YouTube Premium",
        "icon": "simple-icons:youtube",
        "accent": "#FF0000",
        "category": "Video y música",
        "description": "Video y música con atención directa para tu pedido.",
        "badge": "PREMIUM",
        "plans": [
            {"name": "30 días", "price": 12.00},
            {"name": "90 días", "price": 32.00},
        ],
    },
]

PAYMENT_METHODS = [
    {
        "id": "yape",
        "name": "Yape",
        "short": "Y",
        "detail": "Datos de pago por WhatsApp",
    },
    {
        "id": "plin",
        "name": "Plin",
        "short": "P",
        "detail": "Datos de pago por WhatsApp",
    },
    {
        "id": "bcp",
        "name": "BCP",
        "short": "BCP",
        "detail": "Datos de transferencia por WhatsApp",
    },
    {
        "id": "binance",
        "name": "Binance",
        "short": "BN",
        "detail": "Datos de pago por WhatsApp",
    },
]
