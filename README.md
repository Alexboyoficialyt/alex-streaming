# ALEX STREAMING V90 — PRECIOS EN MONEDA DEL USUARIO

DISEÑO (WEB / REDES) y CONSULTORÍA Y DISEÑO:
- Conservan exactamente los precios base en USD de las capturas.
- El sitio detecta el país del visitante.
- Convierte esos precios desde USD a la moneda correspondiente.
- Si el usuario cambia manualmente la moneda del selector, los precios se recalculan.
- Usa tasas recientes mediante Frankfurter y un proveedor de respaldo.
- Si una tasa falla temporalmente, muestra el precio original en USD en lugar de inventar una conversión.
- El precio convertido también se usa en el checkout y en el mensaje de WhatsApp.

Ejemplos:
- Perú -> PEN / S/
- Estados Unidos -> USD
- España -> EUR
- México -> MXN
- Colombia -> COP

# ALEX STREAMING V89 — PEDIDOS RECIENTES

Se agregó la notificación flotante inferior izquierda.

- Usa pedidos reales registrados por /api/track-order.
- No inventa compras.
- Muestra producto, plan y tiempo.
- Nombre + país/bandera solo se muestran si el visitante aceptó compartir identidad.
- Sin consentimiento, aparece como “Cliente”.
- La notificación revisa nuevos pedidos cada 8 segundos.
- En el preview se muestra una DEMOSTRACIÓN visual automática.

ACTUALIZACIÓN V88
Ahora sí quedó puesto DENTRO DEL SITIO WEB (no solo en el README) en las 2 tarjetas:

DISEÑO (WEB / REDES)
- Pagina web informativa = $99 USD
- Pagina web negocio = $150 USD
- Pagina Blog = $99 USD
- Tienda online eCommerce = $199 USD
- ------------------------
- Actualización Wordpress = $30 USD
- Mantenimiento Web = $25 USD
- Mantenimiento Hosting = $40 USD

CONSULTORÍA Y DISEÑO
- Campaña publicitaria Búsqueda = $40 USD
- Campaña publicitaria Redes = $35 USD
- ------------------------
- Diseño de publicación (1) = $7 USD
- Diseño de publicación (3) = $19 USD
- Diseño de marca = $99 USD
- Branding de Red social = $70 USD
- Diseño de logotipo = $25 USD
- Consultoría en Redes = $99 USD
- ------------------------
- Informe SEO = $29 USD
- SEO informe+consultoría = $60 USD


ACTUALIZACIÓN V87:
Se dejaron los 2 bloques con LOS MISMOS PRECIOS de las capturas del usuario.

DISEÑO (WEB / REDES)
- Pagina web informativa = $99 USD
- Pagina web negocio = $150 USD
- Pagina Blog = $99 USD
- Tienda online eCommerce = $199 USD
- Actualización Wordpress = $30 USD
- Mantenimiento Web = $25 USD
- Mantenimiento Hosting = $40 USD

CONSULTORÍA Y DISEÑO
- Campaña publicitaria Búsqueda = $40 USD
- Campaña publicitaria Redes = $35 USD
- Diseño de publicación (1) = $7 USD
- Diseño de publicación (3) = $19 USD
- Diseño de marca = $99 USD
- Branding de Red social = $70 USD
- Diseño de logotipo = $25 USD
- Consultoría en Redes = $99 USD
- Informe SEO = $29 USD
- SEO informe+consultoría = $60 USD

# ALEX STREAMING V86 — WEB / REDES / CONSULTORÍA

Se actualizaron los servicios de la categoría de sitios web y dominios.

AHORA SOLO QUEDAN ESTOS 2 BLOQUES:

1. DISEÑO (WEB / REDES)
- Pagina web informativa = $99 USD
- Pagina web negocio = $150 USD
- Pagina Blog = $99 USD
- Tienda online eCommerce = $199 USD
- Actualización Wordpress = $30 USD
- Mantenimiento Web = $25 USD
- Mantenimiento Hosting = $40 USD

2. CONSULTORÍA Y DISEÑO
- Campaña publicitaria Búsqueda = $40 USD
- Campaña publicitaria Redes = $35 USD
- Diseño de publicación (1) = $7 USD
- Diseño de publicación (3) = $19 USD
- Diseño de marca = $99 USD
- Branding de Red social = $70 USD
- Diseño de logotipo = $25 USD
- Consultoría en Redes = $99 USD
- Informe SEO = $29 USD
- SEO informe+consultoría = $60 USD

También se eliminaron los demás servicios web anteriores de esa categoría.


# ALEX STREAMING V85 — ACTIVIDAD EN VIVO + WEB & DOMINIOS

Se agregó:
- vistas reales
- usuarios online reales
- actividad en vivo cada 3 segundos
- detecta qué producto está viendo el visitante
- muestra cuando abre la compra
- muestra cuando inicia un pedido
- nombre + bandera solo con consentimiento opcional
- sin consentimiento aparece como Visitante
- no publica IP, ciudad ni ubicación exacta

Nueva categoría:
SITIOS WEB Y DOMINIOS
- Landing Page Profesional
- Sitio Web Profesional
- Catálogo / Tienda Online
- Registro y Configuración de Dominio
- Hosting y Despliegue Web
- Sitio Web + Dominio

IMPORTANTE:
En Railway usa PostgreSQL/DATABASE_URL para que las métricas sean persistentes
y compartidas correctamente entre instancias.

# ALEX STREAMING V84 — VISTAS Y ONLINE REALES

Se agregó:
- contador de VISTAS reales
- contador de usuarios ONLINE reales
- una vista se registra al cargar la página desde un navegador
- ONLINE significa sesión activa con heartbeat en los últimos 45 segundos
- actualización visual cada 5 segundos
- heartbeat cada 15 segundos
- cada sesión se cuenta una sola vez como online aunque actualice varias veces
- no se muestra ubicación exacta ni IP

IMPORTANTE EN RAILWAY:
Para que el total de vistas sobreviva a redeploys/reinicios, usa PostgreSQL
y asegúrate de tener DATABASE_URL configurado. Con SQLite local el contador
puede reiniciarse cuando Railway recrea el contenedor.

# ALEX STREAMING V83 — HACKER NATURAL TEXT

Cambios de texto:
- "CYBER DOMINION" → "ACCESO DIGITAL"
- "DESATA EL MODO HACKER" → "TODO TU CONTENIDO EN UN SOLO LUGAR"
- "CYBER ACCESS · ALEX STREAMING" → "ALEX STREAMING · EXPERIENCIA DIGITAL"
- "ACCESO TOTAL" → "DISPONIBLE AHORA"

Se mantiene el estilo visual hacker, pero con textos más naturales y profesionales.

# ALEX STREAMING V81 — PRIME VIDEO LOGO FIXED

Corrección:
- Prime Video ahora usa un archivo SVG local.
- Ya no depende del CDN externo de Simple Icons.
- Se corrigió en la tarjeta individual de Prime Video.
- Se corrigió en todos los combos que incluyen Prime Video.
- Se añadió una placa blanca para que el logo azul sea visible.
- Mantiene los combos ordenados de V80 y el diseño Hacker Elite.

# ALEX STREAMING V80 — HACKER COMBOS FIXED

Correcciones aplicadas específicamente a los combos:
- DUO perfectamente dividido en 2 columnas
- TRIO perfectamente dividido en 3 columnas
- cada servicio tiene su propia mini tarjeta
- logos centrados y con tamaño uniforme
- HBO Max / Disney+ usan placa clara para que se vean
- nombre de cada servicio debajo del logo
- títulos de combos alineados
- botones y precios mantienen la misma posición
- responsive en PC, tablet y celular

Mantiene el diseño Hacker Elite y todas las funciones anteriores.

# ALEX STREAMING V79 — HACKER ELITE

Estética hacker/cyber visual, hecha con HTML/CSS:
- negro + verde neón
- grid técnico
- lluvia de código decorativa
- títulos estilo terminal
- portal verde/cian
- badges SYSTEM ONLINE / SECURE LINK / ELITE ACCESS
- tarjetas premium con estética terminal
- sin funciones maliciosas
- mantiene catálogo, reseñas, WhatsApp, chat, juego, pagos y SEO

# ALEX STREAMING V78 — PRODUCT CARDS FIXED

Esta versión corrige exactamente los problemas vistos en las capturas:
- tarjetas más anchas
- 3 columnas en pantallas normales
- 4 columnas solo cuando hay espacio suficiente
- botones DETALLES / RESEÑAS / COMPRAR ya no se cortan
- precio y botones se separan en dos filas
- títulos más legibles
- logos más grandes
- logos de combos sobre placa clara para que HBO/Prime/Disney se vean
- mejor adaptación a tablet y móvil
- conserva el diseño FUSION INFERNO PRO y todas las funciones

# ALEX STREAMING V77 — FUSION INFERNO PRO

Diseño 100% basado en código HTML/CSS para el hero y efectos principales.

Características:
- estilo agresivo pero profesional
- azul eléctrico + naranja/dorado
- portal de energía
- rayos dobles azul/naranja
- panel técnico 99.9%
- badges POWER ONLINE / ULTRA FAST / PREMIUM ACCESS
- tarjetas más premium y oscuras
- animaciones de luz
- sin personajes
- sin imágenes de fondo
- mantiene catálogo, reseñas, WhatsApp, chat, juego, pagos y SEO

# ALEX STREAMING — V76-COSMIC-AURA-CODE

DISEÑO CODE-ONLY:
- el fondo y la energía están creados con HTML/CSS
- no usa imágenes como fondo del hero
- sin personajes
- conserva catálogo, reseñas, WhatsApp, chat, juego, pagos y SEO
- las imágenes funcionales existentes del sitio (logos/favicons/productos) se mantienen

# ALEX STREAMING V71 — SUPER ENERGY SIN PERSONAJES

Versión preparada para subir a tu sitio web.

Cambios:
- estilo visual inspirado en Dragon Ball Super
- sin personajes, sin guerreros y sin siluetas
- aura azul eléctrica
- anillos dorados
- rayos de energía
- rocas flotantes
- cielo brillante tipo anime
- escenario tipo torneo
- símbolo ALEX en el centro del portal
- mantiene catálogo, WhatsApp, pagos, chat, juego, SEO y reseñas por producto

# ALEX STREAMING V70 — SUPER AURA REAL

Rediseño completo del inicio:
- se eliminó el hero anterior que seguía heredando el estilo Matrix/cyber
- cielo anime brillante
- nubes grandes
- rocas flotantes
- escenario tipo torneo
- guerrero anime original
- aura azul
- anillos dorados
- rayos de energía
- tipografía azul + naranja/dorado
- medidor de energía
- botones y beneficios integrados
- mantiene reseñas reales por producto

Es un diseño original inspirado en la estética visual de Dragon Ball Super,
sin copiar personajes, logos ni arte oficial.

# ALEX STREAMING V69 — SUPER ANIME TOURNAMENT

Versión más cercana a una estética tipo Dragon Ball Super:
- torneo
- cielo brillante con nubes
- rocas flotantes
- aura azul
- anillos dorados
- speed lines
- kanji decorativos
- guerrero anime original con cabello puntiagudo
- medidor POWER LEVEL
- naranja + azul + dorado
- mantiene reseñas por producto

No copia personajes, nombres ni logos oficiales.

# ALEX STREAMING V68 — SUPER BATTLE STYLE

Esta versión sí está enfocada en una estética tipo Dragon Ball Super:
- energía azul eléctrica
- acentos dorados/naranjas
- esfera central de poder
- anillos y destellos animados
- silueta original tipo guerrero anime
- escenario futurista/arena
- tipografía heroica
- tarjetas con aura por categoría
- mantiene reseñas reales por producto

No usa personajes, nombres, logos ni arte oficial de Dragon Ball. Es un diseño original inspirado en la estética de anime shonen de alta energía.

# ALEX STREAMING V66 — SUPER ENERGY + RESEÑAS

Diseño:
- estética original inspirada en anime shonen de alta energía
- azul eléctrico, cian y dorado
- aura, anillos, rayos visuales y tarjetas neón
- no incluye personajes, logos ni arte oficial de Dragon Ball

Reseñas:
- cada producto tiene valoración promedio y cantidad de reseñas
- botón RESEÑAS en cada tarjeta
- estrellas de 1 a 5
- comentario público
- usa el nombre registrado al entrar al sitio
- una reseña por visitante y producto; volver a publicar actualiza la anterior
- bloquea teléfonos, correos y enlaces en reseñas públicas
- se guardan en la misma base de datos del sitio

IMPORTANTE EN RAILWAY:
Usa PostgreSQL y DATABASE_URL para que las reseñas y el chat persistan entre despliegues.
Si Railway está usando SQLite local, los datos pueden perderse al redeploy.

# ALEX STREAMING V65 — ANIME CONCEPT MATCH

Esta versión intenta acercarse mucho más al concepto visual mostrado:
- hero a dos columnas
- escena energética a la derecha
- ALEX azul + STREAMING dorado
- botones grandes
- fila de confianza
- categoría destacadas con tarjetas neón
- paleta azul/cian/dorado
- conserva catálogo y funciones reales debajo

El fondo escénico del hero usa un recorte del concepto visual generado en esta conversación.

# ALEX STREAMING V64 — ANIME ENERGY

Código real basado en el concepto visual de energía anime.

Incluye:
- hero ALEX / STREAMING con tipografías energéticas
- paleta azul eléctrico + dorado
- esfera de energía original con anillos animados
- botones y tarjetas con brillo
- catálogo, redes y pagos adaptados al mismo estilo
- inicio/login adaptado
- responsive para móvil
- mantiene funciones, SEO, sitemap.xml y robots.txt

No copia personajes, logos ni arte oficial de Dragon Ball; es un diseño original inspirado en la energía visual del género shonen.

# ALEX STREAMING V63 — NOMBRE CON SÍMBOLOS

Ahora los símbolos forman parte del propio nombre:

- `⌬ ALEX ∆`
- `⟦ STREAMING ⟧`

También se aplicó una versión similar en el cuadro destacado de la derecha.

# ALEX STREAMING V62 — MATRIX SYMBOLS

Se agregaron símbolos y elementos visuales alrededor del título:
- ∆
- ⌬
- ⧉
- ◇
- ∞
- 0101 / 101
- ⟨/⟩
- esquinas tipo HUD
- códigos laterales
- chips SYSTEM ONLINE / SECURE ACCESS / DIGITAL HUB / ALWAYS ACTIVE
- símbolos en el panel destacado de la derecha

El diseño sigue manteniendo la estética Matrix y todas las funciones anteriores.

# ALEX STREAMING V61 — TIPOGRAFÍA MATRIX REALMENTE CAMBIADA

Esta vez el cambio es muy visible:

- `ALEX` usa una tipografía más inclinada, ancha y agresiva.
- `STREAMING` usa una tipografía monoespaciada tipo terminal/Matrix.
- Se eliminó el efecto que podía hacer que la fuente anterior siguiera viéndose igual.
- El resto del diseño y funciones se mantienen.

# ALEX STREAMING V60 — NUEVA TIPOGRAFÍA DEL HERO

Corrección:
- Se cambió realmente la tipografía del `ALEX STREAMING` grande del lado izquierdo.
- Ahora usa **Oxanium**, una fuente tecnológica más estilizada y diferente a la anterior.
- El cuadro derecho mantiene `ALEX / STREAMING`.

# ALEX STREAMING V59

Cambios solicitados:
- En el cuadro destacado de la derecha ahora aparece:
  **ALEX**
  **STREAMING**
- Se eliminó `ALEXSTREAMING.STORE` de ese cuadro.
- Se cambió la tipografía del `ALEX STREAMING` principal por una fuente Orbitron más futurista.

# ALEX STREAMING V56 — MATRIX CORE

Versión estilo Matrix:
- nuevo look verde Matrix
- fondo de código digital más visible
- inicio estilo terminal futurista
- hero y tarjetas con estética cyber / hacker / Matrix
- mantiene catálogo, compras, WhatsApp, chat, juego y funciones previas

# ALEX STREAMING V55 — APEX CINEMA

Esta versión NO es solo un cambio de colores.

Rediseño estructural:
- Inicio/login completamente nuevo con panel visual dividido en dos columnas.
- Animación orbital, profundidad y panel cinematográfico.
- Hero editorial de gran formato.
- Nuevo bloque de servicios interactivos bajo el hero.
- Nueva sección APEX SPOTLIGHT con jerarquía editorial.
- Header renovado.
- Tarjetas y catálogo refinados.
- Mejor composición visual en desktop y móvil.
- Se mantienen todas las funciones de ALEX STREAMING.

También conserva:
catálogo, precios, detalles, WhatsApp, redes, pagos, chat, juego,
idiomas, moneda, SEO, sitemap.xml y robots.txt.

# ALEX STREAMING V53 — NEON IMPACT

Versión más llamativa que V52:
- Fondo aurora animado.
- Hero con degradados premium.
- ALEX STREAMING con tipografía de alto impacto.
- Panel destacado con órbitas, destellos y elementos holográficos.
- Tarjetas con hover más fuerte.
- Brillos cian, rosa y violeta.
- Botones con reflejos animados.
- Diseño profesional, moderno y responsive.
- Sin volver a agregar la barra VISITOR_LIVE / WHATSAPP_ONLINE / ELITE_CATALOG / PAYMENT_READY.

Se mantienen catálogo, precios, detalles, WhatsApp, redes, pagos, chat, juego,
idiomas, moneda, SEO, sitemap.xml y robots.txt.

# ALEX STREAMING V52 — OBSIDIAN PULSE

Nuevo diseño:
- Más agresivo, profesional y llamativo.
- Paleta negro obsidiana con acentos rojo, cian y violeta.
- Hero de alto impacto.
- Tarjetas angulares premium.
- Bordes luminosos sutiles.
- Efectos visuales modernos sin saturar la interfaz.
- Header más elegante.
- Botones y filtros con identidad premium.
- Diseño responsive para PC, tablet y celular.

Se mantienen todas las funciones de la versión anterior:
catálogo, precios, detalles, WhatsApp, redes, pagos, chat, juego,
idiomas, moneda, SEO, sitemap.xml y robots.txt.

# ALEX STREAMING V51 — STREAMING STYLE

Nuevo diseño elegido: **opción 3 — estilo plataforma de streaming**.

Cambios visuales:
- Hero cinematográfico con contenido destacado.
- Header oscuro y limpio.
- Botones redondeados y estilo premium.
- Catálogo con tarjetas tipo plataforma digital.
- Filtros en formato pill.
- Secciones de redes, pagos y pasos con el mismo lenguaje visual.
- Diseño responsive para PC, tablet y celular.
- Menos elementos "hacker" y una apariencia más parecida a una plataforma de entretenimiento moderna.
- Se mantienen las funciones existentes: catálogo, precios, detalles, WhatsApp, redes, pagos, chat, juego, idiomas, moneda, SEO, sitemap y robots.txt.

No se ha copiado la interfaz exacta de Netflix ni de otra plataforma; es un diseño original inspirado en el estilo general de servicios de streaming.

# ALEX STREAMING V50 — SIN BARRA SUPERIOR

Cambio solicitado:
- Se eliminó por completo la barra con:
  `VISITOR_LIVE`, `WHATSAPP_ONLINE`, `ELITE_CATALOG` y `PAYMENT_READY`.
- El resto del diseño, catálogo, SEO, sitemap, robots.txt y funciones se mantienen.

# ALEX STREAMING V49 — SEO GOOGLE PRO

Mejoras sobre V48:
- Favicon SVG + PNG 48x48 + favicon.ico.
- Icono 180x180 para Apple y 192/512 para manifest.
- `manifest.webmanifest`.
- Nombre de sitio `ALEX STREAMING` y nombre alternativo `ALEXSTREAMING.STORE`.
- Meta description mejorada.
- Canonical.
- Robots meta completos.
- Open Graph para WhatsApp/Facebook.
- Twitter/X Card.
- Imagen social `social-preview.png` (1200x630).
- Datos estructurados `WebSite`.
- Sitemap con `lastmod`.
- `/favicon.ico` disponible directamente.

Después de subir a GitHub/Railway:
1. Comprueba https://alexstreaming.store/favicon.ico
2. Comprueba https://alexstreaming.store/static/img/social-preview.png
3. No necesitas volver a enviar el sitemap si ya figura como correcto en Search Console.
4. Google puede elegir un título o fragmento distinto según la búsqueda; estas etiquetas sirven como señales.

# ALEX STREAMING V48 — SEO PARA GOOGLE

Incluye:
- `/sitemap.xml`
- `/robots.txt`
- título SEO
- meta descripción
- canonical
- Open Graph
- Twitter Card
- datos estructurados básicos `WebSite`

## Después de subirlo a GitHub / Railway

Comprueba en el navegador:
- https://alexstreaming.store/sitemap.xml
- https://alexstreaming.store/robots.txt

Cuando ambos abran correctamente, entra a Google Search Console → **Sitemaps** y escribe:

`sitemap.xml`

Luego pulsa **ENVIAR**.

No borres el registro TXT de verificación de Google que ya añadiste al DNS.


# ALEX STREAMING V45 — NETFLIX

Cambios:
- Activación a TV · acceso autorizado · 30 días — S/12
- Activación a TV · acceso autorizado · 7 días — S/6
- Instalación app oficial Netflix · Android / Android TV — S/10
- Netflix Perfil · 1 mes — S/15
- Cuenta completa · 1 mes — S/48
- El botón DETALLES ahora muestra la información del plan que el cliente tenga seleccionado.
- No se incluyen accesos tipo “hit”, cuentas ajenas ni APK modificadas.

# ALEX STREAMING V44 — PRECIOS GAMMA CORREGIDOS

Cambios:
- Cuenta completa · 1 mes · 4,000 créditos IA — S/30
- Gamma · 1 mes — S/15

Se mantiene todo lo demás de la V43 sin cambios.

# ALEX STREAMING V43 — SIN “CONSULTAR” EN LAS TARJETAS

Corrección visual:
- Se eliminó el texto grande **Consultar** debajo de los productos.
- Los planes sin precio ya no muestran `· Consultar` en el selector.
- Si un producto tiene al menos un plan con precio, el bloque **DESDE** muestra el precio mínimo disponible.
- Ejemplo: Gamma ya no inicia mostrando “Consultar”; muestra el menor precio disponible.
- Si un producto no tiene ningún precio configurado, el bloque **DESDE** simplemente no aparece.
- Si el usuario selecciona un plan sin precio, el bloque de precio se oculta.
- Dentro del checkout, cuando un plan no tiene precio definido, se muestra **POR CONFIRMAR**, no “Consultar”.

# ALEX STREAMING V42 — REDES CORREGIDAS

Corrección aplicada:
- Ya no aparecen "Campañas publicitarias", "Alcance mundial", "Gestión de comunidad", etc.
- En el selector **OBJETIVO** de cada red aparecen exactamente:
  **Seguidores, Likes, Comentarios, Compartidas, Vistas, Espectadores en vivo y Guardados**.
- El botón **DETALLES** conserva exactamente esas mismas opciones.
- El botón **COMPRAR** sigue al costado de DETALLES.
- Se mantienen los nombres normales de Instagram, Facebook, TikTok, YouTube, X / Twitter, etc.
- El contenido del modal de DETALLES continúa usando el idioma detectado del navegador/dispositivo.

La interfaz no automatiza bots ni cuentas falsas; presenta estas opciones como tipos de servicio/objetivo.

# ALEX STREAMING V41 — MÉTRICAS DE REDES

En todas las redes sociales, dentro de **DETALLES**, ahora aparece exactamente:

**Seguidores, Likes, Comentarios, Compartidas, Vistas, Espectadores en vivo y Guardados.**

Se mantienen:
- Botón DETALLES.
- Botón COMPRAR.
- Traducción automática del modal según el idioma preferido del navegador/dispositivo.
- Nombres normales de las plataformas, sin la etiqueta MUNDIAL.

Nota: esta sección se presenta como información de servicios/promoción y no automatiza métricas falsas.

# ALEX STREAMING V40 — REDES NORMALES + DETALLES

Cambios:
- Los nombres de las redes vuelven a verse normales: Instagram, Facebook, TikTok, YouTube, etc.
- Se eliminó la etiqueta visual **MUNDIAL** de las tarjetas y del modal.
- Se mantienen los botones **DETALLES** y **COMPRAR**.
- Dentro de **DETALLES** se conserva el comunicado solicitado sobre seguidores, likes,
  comentarios, compartidas, vistas, espectadores en vivo y demás interacciones.
- También se mantienen las métricas específicas de cada plataforma.
- El contenido de DETALLES continúa usando el sistema multidioma automático del sitio.

# ALEX STREAMING V39 — REDES CON DETALLES MUNDIALES

Cambios:
- En cada tarjeta de redes aparecen **DETALLES** y **COMPRAR**.
- DETALLES abre un comunicado que indica que seguidores, likes, comentarios,
  compartidas, vistas, espectadores en vivo y otras interacciones son **MUNDIALES**,
  no de un país específico.
- El modal lista las interacciones/métricas correspondientes a cada plataforma.
- El comunicado y las métricas se muestran en el idioma preferido detectado del navegador/dispositivo.
- El botón COMPRAR conserva el flujo existente por WhatsApp.

La sección mantiene el enfoque de campañas/promoción y no automatiza bots o cuentas falsas.

# ALEX STREAMING V38 — NEON RUSH

Se añadió un minijuego original llamado **ALEX NEON RUSH**.

Cómo funciona:
- La partida dura 30 segundos.
- Aparecen núcleos luminosos en posiciones aleatorias.
- Verde: +10 puntos.
- Azul: +20 puntos.
- Rojo/GLITCH: -15 puntos y reinicia el combo.
- Los aciertos seguidos crean un combo que puede dar puntos extra.
- El récord se guarda localmente en el navegador del usuario.
- El nombre del jugador es el mismo nombre registrado al entrar a la web.
- Funciona con mouse y pantalla táctil.
- No usa dinero, apuestas, premios pagados ni compras dentro del juego.
- La interfaz utiliza el mismo sistema multidioma automático del sitio.

El juego es solo una actividad de entretenimiento mientras el cliente navega por ALEX STREAMING.

# ALEX STREAMING V37 — CHAT CON NOMBRE REGISTRADO

Cambios:
- El chat muestra claramente **CHATEANDO COMO: [nombre registrado]**.
- Cada mensaje se envía al servidor junto con el mismo nombre que la persona escribió al entrar a la página.
- El servidor sincroniza ese nombre con la sesión del visitante antes de guardar el mensaje.
- Los mensajes del chat muestran el nombre registrado de cada persona.
- Si no hay un nombre válido registrado, el servidor no permite publicar en el chat.
- Se eliminó una referencia antigua al muñeco que ya no existe.

Ejemplo:
Si la persona entra a la página como `Carlos Mendoza`, en el chat aparecerá:
`Carlos Mendoza · 🇵🇪 Perú`
y sus mensajes quedarán publicados con ese nombre.

# ALEX STREAMING V36 — CHAT GLOBAL

Cambios:
- Se eliminó por completo el muñeco / ALEX GUIDE.
- Se añadió un CHAT GLOBAL flotante para que los clientes registrados interactúen entre sí.
- Los mensajes se guardan en PostgreSQL de Railway cuando DATABASE_URL está configurado.
- En local usa SQLite, igual que el resto de métricas.
- El chat se actualiza aproximadamente cada 3.5 segundos.
- Usa el nombre registrado del visitante y muestra solo país, no IP, ciudad ni ubicación exacta.
- Límite de 240 caracteres.
- Anti-spam: 4 segundos entre mensajes.
- Por seguridad no permite publicar teléfonos, correos electrónicos ni enlaces en el chat público.
- El chat es solo texto: no permite subir imágenes, archivos ni contraseñas.
- La interfaz del chat usa el mismo sistema multidioma del sitio.

IMPORTANTE:
Para que todos los visitantes vean el mismo historial de chat de forma estable en Railway,
conviene mantener PostgreSQL/DATABASE_URL activo. Con SQLite, varias instancias del servidor
pueden no compartir exactamente el mismo archivo.

# ALEX STREAMING V35 — WhatsApp multidioma + términos obligatorios

Cambios:
- El mensaje de compra enviado a WhatsApp se genera en el idioma preferido detectado del navegador/dispositivo.
- El mensaje de CONSULTAR POR WHATSAPP también se genera en ese idioma.
- La sección de campañas/redes usa el mismo sistema.
- El mensaje indica el idioma del cliente para que el vendedor sepa en qué idioma responder.
- Antes de continuar aparece el aviso:
  "Puedes usar un traductor para que el vendedor y tú se entiendan. Dile tu idioma al vendedor para que pueda atenderte mejor."
- Se añadió un checkbox pequeño de aceptación de términos.
- No se puede continuar a WhatsApp hasta marcar el checkbox.
- La compra además exige haber seleccionado un método de pago.
- El aviso y el checkbox usan el sistema multidioma automático del sitio.

Nota: el sitio detecta el idioma preferido configurado en el navegador/dispositivo; no puede saber con certeza
el idioma natal real de una persona.

# ALEX STREAMING V34 — Duolingo + ESET + Redes mundiales

Cambios:
- Categoría DUOLINGO con:
  - ⚡⚡DUOLINGO SUPER 1 año A TU CORREO⚡⚡ — S/100
  - DUOLINGO X 30 DIAS — S/8
- Se agregaron las condiciones, descripción y detalles indicados.
- ESET conserva su producto, pero el logotipo oficial no se incrusta automáticamente:
  ESET indica que su logo registrado debe usarse con aprobación previa y con el arte oficial sin modificar.
- La sección REDES ahora se muestra como servicios de marketing/promoción MUNDIAL legítimos.
- El botón de esa sección muestra COMPRAR / continuar compra por WhatsApp.
- No se venden métricas artificiales (seguidores, likes o comentarios falsos).

# ALEX STREAMING V33 — NOMBRE REAL OBLIGATORIO

Cambios del portal de acceso:
- Bloquea `Visitante` y variantes como `visitante123`, `v1s1tante`, `vi-si-tan-te`, etc.
- También bloquea otros nombres genéricos frecuentes: Usuario, Invitado, Guest, Visitor, User, Anonymous, Test, Admin, etc.
- No acepta nombres con números.
- Solo acepta letras, espacios, guiones y apóstrofes.
- Si había un alias genérico guardado en el navegador, se elimina y vuelve a pedir el nombre.
- El mensaje de rechazo se muestra en el idioma detectado del visitante mediante el sistema multidioma de la V32.

Importante: una web puede bloquear alias obvios, pero no puede verificar por sí sola que el nombre sea
legalmente verdadero sin un sistema adicional de identidad. Esta versión exige un nombre con formato real
y rechaza las combinaciones genéricas más comunes.

# ALEX STREAMING V32 — DETALLES MULTIIDIOMA AUTOMÁTICOS

Cambios:
- Al entrar, el sitio detecta el idioma preferido configurado en el navegador/dispositivo.
- Al abrir DETALLES, descripción, modalidades, información y condiciones se traducen automáticamente a ese idioma.
- Si el usuario cambia el selector de idioma con el modal abierto, el contenido se vuelve a traducir.
- Los nombres comerciales de productos/marcas se conservan sin traducir.
- Se mantiene la detección de país, moneda local, pagos multidioma y registro obligatorio.

Nota técnica:
Una página web no puede conocer el "idioma natal" real de una persona. La señal estándar disponible
es el idioma preferido configurado en el navegador/dispositivo.

# ALEX STREAMING V31 — Claude + SketchUp + Geminis

Se agregaron:
- Claude USO PERSONAL — S/15
- 🔥SKETCHUP Pro 2024 CUENTA ORIGINAL PERMANENTE 🔥 — S/80
- 🎭Geminis ultra veo 3 flow x20/videos ilimitados 1 dispositivo — S/25

Los textos comerciales se conservaron como fueron solicitados.
Nota: publica únicamente servicios/licencias que tengas autorización para vender o distribuir.

# ALEX STREAMING V30 — nombres exactos en BLOQUEO

Se mantienen los nombres y precios exactos solicitados en la categoría BLOQUEO.
Las descripciones se limitan a asistencia legítima para el titular/propietario y
no incluyen paneles privados ni métodos para afectar líneas/equipos de terceros.

# ALEX STREAMING V29 — BLOQUEO (fiel al texto, dentro de límites seguros)

Se mantuvieron nombres, operadores, precios, tiempos y estilo lo más fiel posible.
No se publican paneles privados ni métodos para bloquear líneas/equipos de terceros.
Los productos quedan limitados al titular/propietario legítimo.

# ALEX STREAMING V28 — CATEGORÍA BLOQUEO

Se añadió la categoría **BLOQUEO** con cuatro productos diferenciados y sus precios.
Todos están limitados a solicitudes del titular/propietario legítimo y a canales
oficiales de Movistar, Bitel, Entel y Claro.

No se incluyen paneles privados ni métodos para afectar líneas o equipos de terceros.

# ALEX STREAMING V27 — CATÁLOGO + LOGOS + SEGURIDAD MÓVIL

Cambios:
- Se mantienen todas las categorías anteriores.
- Se amplía Seguridad móvil con 4 productos para titulares/propietarios legítimos.
- Operadores visibles: Movistar, Bitel, Entel y Claro.
- Se reforzaron logos de Gamma, Lovable, Turnitin y SuperGrok con recursos oficiales/de sus sitios.
- No se incluyen paneles privados ni métodos para bloquear líneas/equipos ajenos.

# ALEX STREAMING V26 — Seguridad móvil legítima

Se añadió la categoría **Seguridad móvil** con dos opciones orientadas exclusivamente
al titular legítimo de una línea/equipo perdido o robado:

- Asistencia de bloqueo de línea y equipo — S/ 30
- Asesoría de bloqueo oficial de línea / IMEI — S/ 50

Ambas opciones exigen titularidad/propiedad y usan canales oficiales de Movistar,
Bitel, Entel o Claro. No incluyen paneles privados, bloqueo de terceros ni métodos
para interferir con equipos ajenos.

Se conserva la detección automática de idioma/moneda de la V25.

# ALEX STREAMING V25 — GLOBAL AUTO LANGUAGE + GLOBAL CURRENCY

Esta versión detecta automáticamente el idioma preferido configurado en el navegador/dispositivo
y la moneda correspondiente al país aproximado del visitante.

## Qué cambia
- El portal de registro aparece automáticamente en el idioma preferido del navegador.
- El nombre sigue siendo obligatorio: si está vacío, no permite entrar.
- El área de pagos, títulos e instrucciones se traducen al idioma activo.
- Detecta etiquetas de idioma BCP-47 y ofrece un selector global amplio.
- Para idiomas no incluidos de forma manual, intenta traducción automática con la API de traducción
  del navegador y un servicio público de respaldo. Si no hay traducción disponible, conserva un
  texto base legible y nunca bloquea el acceso.
- Mapa de moneda para 248 territorios basado en datos CLDR/Babel.
- Conversión de precios mediante las fuentes de tipo de cambio ya integradas.
- Al pagar, muestra el monto base en PEN y, si corresponde, un equivalente aproximado en la moneda local.

## Importante
Una web no puede saber cuál es el idioma "natal" real de una persona. Se usa el idioma preferido
del navegador/dispositivo, que es la señal estándar disponible para un sitio web.
Las traducciones automáticas para idiomas poco comunes dependen de la disponibilidad del navegador
o del servicio de traducción y pueden no ser perfectas.

# ALEX STREAMING V24 — GLOBAL LANGUAGES + LOCAL CURRENCY

Cambios:
- 18 idiomas de interfaz: ES, EN, PT, FR, DE, IT, VI, RU, TR, AR, ZH, JA, KO, HI, ID, TH, NL y PL.
- Moneda local ampliada para América, Europa, Asia, Medio Oriente y África.
- Conversión desde PEN con tasas recientes de Frankfurter y respaldo alternativo.
- El selector manual de moneda incluye más divisas.
- Netflix conserva únicamente una modalidad de activación autorizada.
- No se incluyen servicios de bloqueo de IMEI/líneas de terceros ni accesos no autorizados a cuentas.

# ALEX STREAMING V23 — Catálogo + pagos + registro obligatorio

Cambios principales:

- Nombre obligatorio para entrar. Si el campo está vacío, el sitio no permite el acceso.
- El nombre se registra junto al país aproximado del visitante usando el sistema existente.
- Yape: 918532738 — TEDDY.
- Plin: 931768182 — TEDDY IBERICO.
- Binance ID: 474217268 — nightvorn.
- BCP: solicitar datos por WhatsApp.
- El checkout muestra los datos/instrucciones al seleccionar el método de pago.
- Nuevos productos seguros: Claude, SketchUp Pro 2024, Gemini Ultra + Flow/Veo 3, Power BI PPU, ESET, Turnitin, SuperGrok, MegaPack Excel y curso de defensa ante manipulación.
- Apple TV+ añade 3 meses por S/15.
- Mantiene traducción por idioma del navegador, moneda local, geolocalización aproximada, música y diseño ALEX STREAMING.

## Elementos no añadidos

No se incluyen productos cuya descripción implique doxxing/reconocimiento facial de terceros, bloqueo/interferencia de líneas o equipos, evasión de controles con números desechables, acceso no autorizado a cuentas, ni redistribución potencialmente no autorizada de catálogos de streaming.

## Publicar

Reemplaza los archivos de tu repositorio `alex-streaming` con los de esta carpeta y haz **Commit changes**. Railway desplegará la actualización automáticamente en `https://alexstreaming.store`.

No subas `venv/` ni `__pycache__/`.


ACTUALIZACIÓN V57
- texto de tarjeta destacada cambiado
- “SYSTEM BOOT // DIGITAL ACCESS” -> “CYBER ACCESS // ELITE MODE”
- “MATRIX CORE” -> “MATRIX DOMINION”
- también se ajustó el texto de estado para que todo quede consistente


ACTUALIZACIÓN V58
- se reemplazó “Matrix Dominion” por la marca del sitio
- en la tarjeta destacada ahora aparece “ALEX STREAMING” y “ALEXSTREAMING.STORE”
- se cambió la tipografía del bloque destacado por Orbitron para que se vea más fuerte y premium
