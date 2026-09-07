# ALEX STREAMING V16

Cambios V16:
- Precios corregidos para que `S/` y el monto siempre aparezcan en una sola línea.
- Añadido YouTube Premium: Activación a TV por 30 días — S/ 7.

# ALEX STREAMING V14 — Visual Studio Code

Versión con portal de acceso, música original ALEX PULSE generada por el navegador y ALEX GUIDE con movimiento al navegar en computadora.

## Abrir localmente
1. Abre esta carpeta en Visual Studio Code.
2. Ejecuta `INICIAR_WINDOWS.bat` o instala dependencias con `pip install -r requirements.txt`.
3. Ejecuta `python app.py`.
4. Abre `http://127.0.0.1:5000`.

## Actualizar GitHub / Railway / Render
Reemplaza los archivos del repositorio por los de esta carpeta y haz Commit. El hosting conectado a GitHub volverá a desplegar la web.

## Portal de acceso
Es una pantalla de bienvenida visual con nombre/alias. No es un sistema de autenticación con contraseña ni protege contenido privado. Para cuentas reales de clientes se requiere autenticación del lado del servidor.

## Música
ALEX PULSE es una pista procedimental original creada con Web Audio API. Empieza al pulsar INICIAR EXPERIENCIA, ya que los navegadores bloquean el audio automático antes de una interacción del usuario.

## Mascota
ALEX GUIDE aparece solo en escritorio y se desplaza por la parte inferior siguiendo el progreso de navegación.

## V15 — alineación de botones
- Los botones **DETALLES** y **COMPRAR** ahora tienen exactamente la misma altura.
- Se mantienen en la misma línea y con el texto centrado.
- En móvil también quedan alineados uno al lado del otro.
