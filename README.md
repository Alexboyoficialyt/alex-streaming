# ALEX STREAMING V22 — GLOBAL LANGUAGE + LOCAL CURRENCY

Esta versión agrega:

- Idioma automático según el idioma preferido del navegador (ES/EN/PT/FR/DE/IT/VI), con selector manual.
- Moneda automática según el país detectado y selector manual.
- Conversión diaria aproximada desde precios base en soles (PEN).
- Si la tasa no puede cargarse, la tienda conserva los precios en PEN.
- En Chrome de escritorio compatible, el sitio intenta traducir también descripciones de productos con la Translator API integrada del navegador cuando el modelo ya está disponible.
- Los nombres de marcas no se traducen.
- El checkout conserva el precio base en soles cuando muestra una moneda extranjera para evitar confusión.

Nota: el sitio no puede conocer el “idioma natal” real de una persona; usa el idioma preferido configurado en su navegador/dispositivo.

# ALEX STREAMING V21 — ACCESS FIX DEFINITIVO

Se corrigió el bloqueo del botón **INICIAR EXPERIENCIA**. La entrada ya no depende de la geolocalización ni del audio: al pulsar el botón, la transición avanza siempre. La detección del país continúa en segundo plano.

Corrección del portal de entrada: el botón ahora avanza inmediatamente y la detección de país no bloquea el acceso.

# ALEX STREAMING V19 — Nombre + País en el sitio público

Esta versión NO incluye panel de administrador.

## Qué hace
- El visitante escribe su nombre en la pantalla de entrada.
- El sitio detecta de forma aproximada el país por IP pública.
- Antes de entrar muestra: `NOMBRE · 🇵🇪 PERÚ`.
- En la página pública se muestra la conexión actual y un feed de visitantes recientes con `Nombre + País`.
- Cuando entra una nueva persona puede aparecer un aviso como: `Carlos entró desde 🇵🇪 Perú`.
- No guarda ni muestra dirección, coordenadas, ciudad ni IP completa.

## Railway
Sube esta versión al mismo repositorio de GitHub. Railway volverá a desplegar automáticamente.

PostgreSQL es opcional pero recomendado si quieres conservar los contadores y visitantes después de nuevos despliegues. Usa `DATABASE_URL` en Railway.

## Ejecutar en Windows
Doble clic en `INICIAR_WINDOWS.bat` o:

```bash
pip install -r requirements.txt
python app.py
```

Luego abre `http://127.0.0.1:5000`.