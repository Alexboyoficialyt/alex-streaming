# ALEX STREAMING // DIGITAL HUB

Plantilla profesional en **Python + Flask**, pensada para editarse en **Visual Studio Code**. Incluye estilo cyber/hacker visual, catálogo responsive, logos de plataformas mediante Iconify/Simple Icons, selector de planes, checkout rápido, Yape/Plin/BCP/Binance y WhatsApp configurado al **+51 984 933 571**.

> Los precios incluidos son de demostración. Cambia el catálogo por tus productos, precios y condiciones reales. Usa el sitio únicamente para servicios que estés autorizado a comercializar.

## 1. Abrir en Visual Studio Code

1. Descomprime la carpeta.
2. Abre Visual Studio Code.
3. Ve a **Archivo > Abrir carpeta** y selecciona `alex-streaming-digital-hub`.

## 2. Forma fácil en Windows

Haz doble clic en:

`INICIAR_WINDOWS.bat`

La primera vez instalará las dependencias y abrirá la web en:

`http://127.0.0.1:5000`

## 3. Forma manual

En la terminal de VS Code:

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python app.py
```

Luego abre `http://127.0.0.1:5000`.

Si PowerShell no permite activar el entorno, también puedes ejecutar:

```powershell
.venv\Scripts\python.exe -m pip install -r requirements.txt
.venv\Scripts\python.exe app.py
```

## 4. Cambiar nombre, WhatsApp, dominio, productos y precios

Abre **`store_config.py`**.

La parte principal es:

```python
STORE = {
    "name": "ALEX STREAMING",
    "tagline": "DIGITAL HUB",
    "domain": "https://tudominio.com",
    "whatsapp": "51984933571",
    "currency": "S/",
}
```

Todos los productos y planes también se editan en ese mismo archivo.

## 5. Pagos

La web muestra:

- Yape
- Plin
- BCP
- Binance

Al pulsar **Comprar**, el cliente elige un método y luego **Continuar por WhatsApp**. Se genera automáticamente un mensaje con plataforma, plan, precio y método de pago.

No se solicitan tarjetas, claves ni contraseñas dentro de la web.

## 6. Logos originales de plataformas

Los iconos de marcas se cargan con **Iconify + Simple Icons** desde Internet. Por eso, para ver los logos la PC o el servidor debe tener conexión a Internet.

## 7. Poner tu dominio

Este proyecto necesita un hosting que ejecute **Python/Flask**.

Configuración típica del hosting:

- **Build / instalación:** `pip install -r requirements.txt`
- **Start / inicio:** `gunicorn app:app`
- **Puerto:** el proveedor lo configura con la variable `PORT`; `app.py` ya está preparado para eso.

Después, en el panel de tu hosting busca **Custom Domain / Dominio personalizado** y agrega tu dominio. El hosting te dará un registro DNS, normalmente **CNAME** o **A**, que debes copiar en el panel de la empresa donde compraste el dominio.

Finalmente cambia en `store_config.py`:

```python
"domain": "https://www.tudominio.com"
```

### Estructura

```text
alex-streaming-digital-hub/
├─ app.py
├─ store_config.py
├─ requirements.txt
├─ Procfile
├─ INICIAR_WINDOWS.bat
├─ templates/
│  └─ index.html
└─ static/
   ├─ css/style.css
   ├─ js/app.js
   └─ img/favicon.svg
```

## 8. Si no abre

Comprueba en la terminal:

```powershell
python --version
```

Si Windows dice que no reconoce `python`, instala Python y marca la opción **Add Python to PATH** durante la instalación.
