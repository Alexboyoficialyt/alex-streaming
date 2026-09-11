# ============================================================
# ALEX STREAMING — V26 GLOBAL + SEGURIDAD MÓVIL LEGÍTIMA
# Edita este archivo para cambiar productos, precios y datos.
# Se omiten servicios que impliquen acceso no autorizado, doxxing,
# interferencia de líneas/equipos o evasión de controles.
# ============================================================

STORE = {'name': 'ALEX STREAMING',
 'domain': 'https://alexstreaming.store',
 'whatsapp': '51984933571',
 'currency': 'S/',
 'currency_code': 'PEN',
 'support_text': 'Atención directa por WhatsApp',
 'status_text': 'ALEX STREAMING // PREMIUM ACCESS ONLINE',
 'edition_text': 'PREMIUM ACCESS',
 'entry_tagline': 'STREAMING • IA • SOFTWARE • REDES • GLOBAL',
 'registration_required': True,
 'official_socials': [
   {
     'id': 'facebook-oficial',
     'name': 'Facebook oficial',
     'handle': 'Página oficial de Alex Streaming',
     'url': 'https://www.facebook.com/profile.php?id=61593975724572',
     'icon': 'simple-icons:facebook',
     'accent': '#1877F2',
     'action': 'VISITAR FACEBOOK'
   },
   {
     'id': 'whatsapp-grupo',
     'name': 'Grupo oficial de WhatsApp',
     'handle': 'Comunidad Alex Streaming',
     'url': 'https://chat.whatsapp.com/JXPoVY6ViMjH5c9FbqSwWX',
     'icon': 'simple-icons:whatsapp',
     'accent': '#25D366',
     'action': 'UNIRME AL GRUPO'
   },
   {
     'id': 'tiktok-oficial',
     'name': 'TikTok oficial',
     'handle': '@thecoldknows',
     'url': 'https://www.tiktok.com/@thecoldknows',
     'icon': 'simple-icons:tiktok',
     'accent': '#FE2C55',
     'action': 'VER TIKTOK'
   }
 ]}

PRODUCTS = [{'id': 'max',
  'name': 'HBO Max',
  'icon': 'simple-icons:hbomax',
  'accent': '#8A5CFF',
  'category': 'Streaming',
  'badge': 'MAX',
  'description': 'Series, películas y entretenimiento premium.',
  'plans': [{'name': 'Estándar · 1 mes', 'price': 5},
            {'name': 'Estándar · 3 meses', 'price': 15},
            {'name': 'Platino · 1 mes', 'price': 8},
            {'name': 'Cuenta completa Estándar · 3 meses', 'price': 15}],
  'details': ['Incluye planes Estándar, Platino y cuenta completa según disponibilidad.',
              'Elige la duración y modalidad de acceso antes de confirmar tu pedido.',
              'Entrega y activación coordinadas directamente por WhatsApp.'],
  'notes': [],
  'logo_url': 'https://upload.wikimedia.org/wikipedia/commons/7/7e/HBO_Max_May_2025_%28Horizontal%29.svg',
  'logo_class': 'brand-logo brand-logo-wide brand-logo-whiteplate',
  'display_name': 'HBO Max'},
 {'id': 'disney',
  'name': 'Disney+',
  'icon': 'simple-icons:disneyplus',
  'accent': '#63A7FF',
  'category': 'Streaming',
  'badge': 'DISNEY',
  'description': 'Disney, Pixar, Marvel, Star Wars y más.',
  'plans': [{'name': 'Cuenta completa', 'price': 15},
            {'name': 'Perfil Premium', 'price': 12},
            {'name': 'Disney+ + Hulu + Star', 'price': 16}],
  'details': ['Disponible en cuenta completa, perfil premium y combo Disney+ + Hulu + Star.',
              'Puedes solicitar bot/código de activación si aplica al tipo de entrega coordinada.',
              'Ideal para películas, series y contenido familiar.'],
  'notes': [],
  'logo_url': 'https://upload.wikimedia.org/wikipedia/commons/6/64/Disney%2B_2024.svg',
  'logo_class': 'brand-logo brand-logo-wide brand-logo-whiteplate',
  'display_name': 'Disney+'},
 {'id': 'appletv',
  'name': 'Apple TV+',
  'icon': 'simple-icons:appletv',
  'accent': '#F5F5F7',
  'category': 'Streaming',
  'badge': 'APPLE',
  'description': 'Producciones originales y estrenos seleccionados.',
  'plans': [{'name': 'Cuenta completa', 'price': 12},
            {'name': 'Perfil', 'price': 5},
            {'name': 'Cuenta / acceso · 3 meses · 1 dispositivo', 'price': 15}],
  'details': ['Disponible en cuenta completa, perfil individual y plan de 3 meses según disponibilidad.',
              'El plan de 3 meses es para un solo dispositivo.',
              'Para mantener la garantía no cambies contraseña, método de pago ni plan del acceso entregado.'],
  'notes': [],
  'logo_url': 'https://cdn.simpleicons.org/appletv/FFFFFF',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'Apple TV+'},
 {'id': 'primevideo',
  'name': 'Prime Video',
  'icon': 'simple-icons:primevideo',
  'accent': '#00A8E1',
  'category': 'Streaming',
  'badge': 'PRIME',
  'description': 'Películas, series y contenido original.',
  'plans': [{'name': 'Cuenta completa · 1 mes', 'price': 15},
            {'name': 'Perfil para TV · 30 días', 'price': 5},
            {'name': 'Cuenta completa · 3 meses', 'price': 20},
            {'name': 'Perfil · 3 meses · cualquier dispositivo', 'price': 12}],
  'details': ['Cuenta completa y perfiles para distintos periodos según el plan.',
              'Si el acceso es solo para Prime Video, evita realizar compras o alquileres dentro de Amazon.',
              'Algunas activaciones pueden ser solo para TV o para cualquier dispositivo, según el producto elegido.'],
  'notes': [],
  'logo_url': '/static/img/brands/prime-video.svg',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'Prime Video'},
 {'id': 'paramount',
  'name': 'Paramount+',
  'icon': 'simple-icons:paramountplus',
  'accent': '#1B67FF',
  'category': 'Streaming',
  'badge': 'PLUS',
  'description': 'Películas, series y entretenimiento familiar.',
  'plans': [{'name': 'Perfil exclusivo · 1 mes', 'price': 10}, {'name': 'Cuenta completa', 'price': 25}],
  'details': ['Perfil exclusivo y cuenta completa disponibles.',
              'Ideal para películas, series y eventos especiales según el catálogo activo.',
              'No cambiar datos de la cuenta si eso invalida la garantía ofrecida.'],
  'notes': [],
  'logo_url': 'https://cdn.simpleicons.org/paramountplus/0064FF',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'Paramount+'},
 {'id': 'crunchyroll',
  'name': 'Crunchyroll',
  'icon': 'simple-icons:crunchyroll',
  'accent': '#F47521',
  'category': 'Streaming',
  'badge': 'ANIME',
  'description': 'Anime, simulcasts y estrenos.',
  'plans': [{'name': 'Cuenta completa · 1 mes', 'price': 12}, {'name': 'Cuenta completa · 3 meses', 'price': 25}],
  'details': ['Cuenta completa con hasta 5 perfiles disponibles según el plan.',
              'En algunos planes tú mismo administras los perfiles y usuarios.'],
  'notes': [],
  'logo_url': 'https://cdn.simpleicons.org/crunchyroll/F47521',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'Crunchyroll'},
 {'id': 'dgo',
  'name': 'DGO',
  'icon': 'simple-icons:directv',
  'accent': '#00AEEF',
  'category': 'Streaming',
  'badge': 'TV LIVE',
  'description': 'TV en vivo, series, películas y planes deportivos según disponibilidad.',
  'plans': [{'name': 'DGO + Liga 1 Max · perfil / TV', 'price': 18},
            {'name': 'DGO Oro · cuenta completa sin Liga', 'price': 25},
            {'name': 'DGO Bronce · perfil', 'price': 15},
            {'name': 'DGO Oro + Liga 1 Max · cuenta completa', 'price': 35},
            {'name': 'DGO Bronce · cuenta completa', 'price': 25}],
  'details': ['Combina TV en vivo, canales deportivos, series y películas según el plan.',
              'Algunas versiones con Liga 1 Max son solo para TV y pueden requerir activación a pedido.',
              'Los beneficios y cantidad de canales pueden variar según el plan contratado.'],
  'notes': [],
  'logo_url': 'https://commons.wikimedia.org/wiki/Special:Redirect/file/DGO-logo.svg',
  'logo_class': 'brand-logo brand-logo-wide brand-logo-whiteplate',
  'display_name': 'DGO'},
 {'id': 'viki',
  'name': 'Viki Rakuten',
  'icon': 'simple-icons:rakuten',
  'accent': '#BF0000',
  'category': 'Streaming',
  'badge': 'K-DRAMA',
  'description': 'Dramas asiáticos, películas y contenido internacional.',
  'plans': [{'name': 'Perfil', 'price': 8}],
  'details': ['Acceso a dramas asiáticos, K-Dramas, J-Dramas, C-Dramas, películas y contenido internacional.',
              'Contenido con subtítulos en distintos idiomas según disponibilidad de Viki.'],
  'notes': [],
  'logo_url': 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Rakuten_Viki_logo.svg',
  'logo_class': 'brand-logo brand-logo-wide brand-logo-whiteplate',
  'display_name': 'Rakuten Viki'},
 {'id': 'vix',
  'name': 'ViX Premium',
  'icon': 'simple-icons:vix',
  'accent': '#FF6B00',
  'category': 'Streaming',
  'badge': 'VIX',
  'description': 'Series, películas y entretenimiento en español.',
  'plans': [{'name': 'Cuenta completa', 'price': 10}, {'name': 'Perfil · 1 mes', 'price': 5}],
  'details': ['Cuenta completa: se entrega el acceso acordado para ViX Premium.',
              'Perfil de 1 mes: uso en el dispositivo acordado y respetando la asignación del perfil.'],
  'notes': [],
  'logo_url': 'https://upload.wikimedia.org/wikipedia/commons/6/6a/ViX_Logo.svg',
  'logo_class': 'brand-logo brand-logo-wide brand-logo-whiteplate',
  'display_name': 'ViX'},
 {'id': 'movistar',
  'name': 'Movistar Play',
  'icon': 'simple-icons:movistar',
  'accent': '#019DF4',
  'category': 'Streaming',
  'badge': 'MOVISTAR',
  'description': 'Entretenimiento y contenido de Movistar Play.',
  'plans': [{'name': 'Perfil', 'price': 15}, {'name': 'Cuenta completa', 'price': 25}],
  'details': ['Disponible en modalidad perfil o cuenta completa según el plan seleccionado.',
              'Entrega y condiciones coordinadas por WhatsApp.'],
  'notes': [],
  'logo_url': 'https://cdn.simpleicons.org/movistar/019DF4',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'Movistar'},
 {'id': 'netflix',
  'name': 'Netflix',
  'icon': 'simple-icons:netflix',
  'accent': '#E50914',
  'category': 'Streaming',
  'badge': 'NETFLIX',
  'description': 'Opciones de Netflix coordinadas para TV y perfil, únicamente con accesos autorizados.',
  'plans': [
      {
          'name': 'Activación a TV · acceso autorizado · 30 días',
          'price': 12,
          'description': 'Activación autorizada de Netflix para TV durante 30 días.',
          'details': [
              'USO: Servicio válido únicamente para un dispositivo de TV.',
              'Para mantener la garantía, no cambiar contraseña, PIN, nombre del perfil, membresía ni otros datos de la cuenta.',
              'Garantía de 30 días. El soporte y los reclamos se atienden dentro de ese período.',
              'PASOS DE ACTIVACIÓN: entrar a Netflix en la TV y enviar el código de 8 dígitos para realizar la activación.',
              'Es únicamente para TV. No incluye correo y contraseña para iniciar sesión en celular o PC.',
              'Solo se realizan activaciones autorizadas por el titular o proveedor legítimo de la cuenta.'
          ],
          'notes': [
              'Uso en un solo dispositivo.',
              'No modificar datos de la cuenta.',
              'No se ofrecen accesos a cuentas ajenas ni credenciales obtenidas sin autorización.'
          ]
      },
      {
          'name': 'Activación a TV · acceso autorizado · 7 días',
          'price': 6,
          'description': 'Activación autorizada de Netflix para TV durante 7 días.',
          'details': [
              'USO: Servicio válido únicamente para un dispositivo de TV.',
              'Para mantener la garantía, no cambiar contraseña, PIN, nombre del perfil, membresía ni otros datos de la cuenta.',
              'Garantía de 7 días. El soporte y los reclamos se atienden dentro de ese período.',
              'PASOS DE ACTIVACIÓN: entrar a Netflix en la TV y enviar el código de 8 dígitos para realizar la activación.',
              'Es únicamente para TV. No incluye correo y contraseña para iniciar sesión en celular o PC.',
              'Solo se realizan activaciones autorizadas por el titular o proveedor legítimo de la cuenta.'
          ],
          'notes': [
              'Uso en un solo dispositivo.',
              'No modificar datos de la cuenta.',
              'No se ofrecen accesos a cuentas ajenas ni credenciales obtenidas sin autorización.'
          ]
      },
      {
          'name': 'Instalación app oficial Netflix · Android / Android TV',
          'price': 10,
          'description': 'Asistencia para instalar y configurar la aplicación oficial de Netflix en Android o Android TV.',
          'details': [
              'Se utiliza únicamente la aplicación oficial de Netflix.',
              'Compatible con Android y Android TV según disponibilidad del dispositivo.',
              'La activación requiere una suscripción o acceso autorizado de Netflix.',
              'No incluye APK modificada, desbloqueada ni versiones que evadan la suscripción.'
          ],
          'notes': [
              'Solo instalación y configuración de la app oficial.'
          ]
      },
      {
          'name': 'Netflix Perfil · 1 mes',
          'price': 15,
          'description': 'Perfil de Netflix por 1 mes con acceso autorizado.',
          'details': [
              'Duración: 1 mes.',
              'Se entregan los datos de acceso autorizados correspondientes al servicio.',
              'NO CAMBIAR nombres, PIN, contraseña, membresía ni otros datos de la cuenta.',
              'Uso en un solo dispositivo a la vez para mantener la garantía.'
          ],
          'notes': [
              'Si se detecta uso simultáneo en más dispositivos de los permitidos, puede perderse la garantía.',
              'Distribuir únicamente cuentas o perfiles que estés autorizado a comercializar.'
          ]
      },
      {
          'name': 'Cuenta completa · 1 mes',
          'price': 48,
          'description': 'Cuenta completa de Netflix por 1 mes, sujeta a disponibilidad y autorización.',
          'details': [
              'Cuenta completa por 1 mes.',
              'Entrega y condiciones coordinadas por WhatsApp.',
              'Usar únicamente accesos autorizados.'
          ],
          'notes': []
      }
  ],
  'details': [
      'Selecciona el plan y luego pulsa DETALLES para ver las condiciones específicas de esa opción.',
      'Solo se ofrecen accesos y activaciones autorizadas.'
  ],
  'notes': [
      'No incluye acceso a cuentas ajenas, credenciales obtenidas sin permiso ni métodos de acceso no autorizado.'
  ],
  'logo_url': 'https://cdn.simpleicons.org/netflix/E50914',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'Netflix'},
 {'id': 'youtubepremium',
  'name': 'YouTube Premium',
  'icon': 'simple-icons:youtube',
  'accent': '#FF0000',
  'category': 'Streaming',
  'badge': 'YOUTUBE',
  'description': 'YouTube Premium con activación coordinada para TV.',
  'plans': [{'name': 'Activación a TV · 30 días', 'price': 7}],
  'details': ['Activación para TV por 30 días.',
              'Entrega y activación coordinadas directamente por WhatsApp.',
              'Usa únicamente accesos y activaciones autorizadas.'],
  'notes': [],
  'logo_url': 'https://cdn.simpleicons.org/youtube/FF0000',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'YouTube Premium'},
 {'id': 'peacock',
  'name': 'Peacock',
  'icon': 'simple-icons:peacock',
  'accent': '#F5C518',
  'category': 'Streaming',
  'badge': 'PEACOCK',
  'description': 'Series, películas, deportes y entretenimiento de Peacock.',
  'plans': [{'name': 'Plan disponible', 'price': None}],
  'details': ['Consulta disponibilidad, modalidad y duración por WhatsApp.'],
  'notes': [],
  'logo_url': 'https://upload.wikimedia.org/wikipedia/commons/2/20/NBCUniversal_Peacock_Logo_%282026%29.svg',
  'logo_class': 'brand-logo brand-logo-wide brand-logo-whiteplate',
  'display_name': 'Peacock'},
 {'id': 'mubi',
  'name': 'MUBI',
  'icon': 'simple-icons:mubi',
  'accent': '#FFFFFF',
  'category': 'Streaming',
  'badge': 'CINEMA',
  'description': 'Cine seleccionado, clásicos, estrenos y películas de autor.',
  'plans': [{'name': 'Plan disponible', 'price': None}],
  'details': ['Consulta disponibilidad y duración antes de comprar.'],
  'notes': [],
  'logo_url': 'https://cdn.simpleicons.org/mubi/FFFFFF',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'MUBI'},
 {'id': 'plutotv',
  'name': 'Pluto TV',
  'icon': 'simple-icons:plutotv',
  'accent': '#FFD300',
  'category': 'Streaming',
  'badge': 'LIVE TV',
  'description': 'Canales en vivo y contenido bajo demanda.',
  'plans': [{'name': 'Servicio / soporte', 'price': None}],
  'details': ['Consulta las opciones disponibles para tu dispositivo.'],
  'notes': [],
  'logo_url': 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Pluto_TV_logo.svg',
  'logo_class': 'brand-logo brand-logo-wide brand-logo-whiteplate',
  'display_name': 'Pluto TV'},
 {'id': 'plex',
  'name': 'Plex',
  'icon': 'simple-icons:plex',
  'accent': '#E5A00D',
  'category': 'Streaming',
  'badge': 'PLEX',
  'description': 'Biblioteca multimedia, streaming y reproducción multidispositivo.',
  'plans': [{'name': 'Plan disponible', 'price': None}],
  'details': ['Consulta disponibilidad y modalidad por WhatsApp.'],
  'notes': [],
  'logo_url': 'https://cdn.simpleicons.org/plex/E5A00D',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'Plex'},
 {'id': 'spotify',
  'name': 'Spotify Premium',
  'icon': 'simple-icons:spotify',
  'accent': '#1ED760',
  'category': 'Streaming',
  'badge': 'MUSIC',
  'description': 'Música, playlists y audio premium.',
  'plans': [{'name': '1 mes · correo y contraseña', 'price': 10}, {'name': 'Activación a correo propio', 'price': 8}],
  'details': ['Plan de 1 mes con correo y contraseña según el tipo de entrega.',
              'También disponible activación a correo propio.'],
  'notes': [],
  'logo_url': 'https://cdn.simpleicons.org/spotify/1ED760',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'Spotify'},
 {'id': 'surfshark',
  'name': 'Surfshark VPN',
  'icon': 'simple-icons:surfshark',
  'accent': '#178BF4',
  'category': 'VPN',
  'badge': 'VPN',
  'description': 'VPN para privacidad y conexión segura.',
  'plans': [{'name': '3 meses', 'price': 15}, {'name': 'Activación por código · 30 días', 'price': 8}],
  'details': ['Plan de 3 meses y activación mediante código por 30 días según disponibilidad.',
              'Activación y soporte coordinados por WhatsApp.'],
  'notes': [],
  'logo_url': 'https://cdn.simpleicons.org/surfshark/178BF1',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'Surfshark'},
 {'id': 'combo-disney-max',
  'name': 'Disney+ + HBO Max',
  'icon': 'lucide:package-plus',
  'accent': '#9c71ff',
  'category': 'Combos',
  'badge': 'DUO',
  'description': 'Combo de entretenimiento por perfil.',
  'plans': [{'name': 'Perfil · combo', 'price': 13}],
  'details': ['Incluye Disney+, HBO Max en un solo combo.',
              'La modalidad exacta de perfil/cuenta y la duración dependen del plan seleccionado.'],
  'notes': [],
  'combo_logos': [{'logo_url': 'https://upload.wikimedia.org/wikipedia/commons/6/64/Disney%2B_2024.svg',
                   'logo_class': 'brand-logo',
                   'name': 'Disney+',
                   'icon': 'simple-icons:disneyplus'},
                  {'logo_url': 'https://upload.wikimedia.org/wikipedia/commons/7/7e/HBO_Max_May_2025_%28Horizontal%29.svg',
                   'logo_class': 'brand-logo',
                   'name': 'HBO Max',
                   'icon': 'simple-icons:hbomax'}]},
 {'id': 'combo-hbo-prime',
  'name': 'HBO Max + Prime Video',
  'icon': 'lucide:package-plus',
  'accent': '#6C7DFF',
  'category': 'Combos',
  'badge': 'DUO',
  'description': 'Combo de HBO Max y Prime Video.',
  'plans': [{'name': 'Perfil · combo', 'price': 12}],
  'details': ['Incluye HBO Max, Prime Video en un solo combo.',
              'La modalidad exacta de perfil/cuenta y la duración dependen del plan seleccionado.'],
  'notes': [],
  'combo_logos': [{'logo_url': 'https://upload.wikimedia.org/wikipedia/commons/7/7e/HBO_Max_May_2025_%28Horizontal%29.svg',
                   'logo_class': 'brand-logo',
                   'name': 'HBO Max',
                   'icon': 'simple-icons:hbomax'},
                  {'logo_url': '/static/img/brands/prime-video.svg',
                   'logo_class': 'brand-logo',
                   'name': 'Prime Video',
                   'icon': 'simple-icons:primevideo'}]},
 {'id': 'combo-netflix-disney-prime',
  'name': 'Netflix + Disney+ + Prime Video',
  'icon': 'lucide:boxes',
  'accent': '#ff5858',
  'category': 'Combos',
  'badge': 'TRIO',
  'description': 'Tres perfiles de entretenimiento por 1 mes.',
  'plans': [{'name': 'Perfiles · 1 mes', 'price': 20}],
  'details': ['Incluye Netflix, Disney+, Prime Video en un solo combo.',
              'La modalidad exacta de perfil/cuenta y la duración dependen del plan seleccionado.'],
  'notes': [],
  'combo_logos': [{'logo_url': 'https://cdn.simpleicons.org/netflix/E50914',
                   'logo_class': 'brand-logo',
                   'name': 'Netflix',
                   'icon': 'simple-icons:netflix'},
                  {'logo_url': 'https://upload.wikimedia.org/wikipedia/commons/6/64/Disney%2B_2024.svg',
                   'logo_class': 'brand-logo',
                   'name': 'Disney+',
                   'icon': 'simple-icons:disneyplus'},
                  {'logo_url': '/static/img/brands/prime-video.svg',
                   'logo_class': 'brand-logo',
                   'name': 'Prime Video',
                   'icon': 'simple-icons:primevideo'}]},
 {'id': 'combo-paramount-disney-prime',
  'name': 'Paramount+ + Disney+ + Prime Video',
  'icon': 'lucide:boxes',
  'accent': '#3f8dff',
  'category': 'Combos',
  'badge': 'TRIO',
  'description': 'Combo de tres servicios de streaming.',
  'plans': [{'name': 'Perfiles · 1 mes', 'price': 25}],
  'details': ['Incluye Paramount+, Disney+, Prime Video en un solo combo.',
              'La modalidad exacta de perfil/cuenta y la duración dependen del plan seleccionado.'],
  'notes': [],
  'combo_logos': [{'logo_url': 'https://cdn.simpleicons.org/paramountplus/0064FF',
                   'logo_class': 'brand-logo',
                   'name': 'Paramount+',
                   'icon': 'simple-icons:paramountplus'},
                  {'logo_url': 'https://upload.wikimedia.org/wikipedia/commons/6/64/Disney%2B_2024.svg',
                   'logo_class': 'brand-logo',
                   'name': 'Disney+',
                   'icon': 'simple-icons:disneyplus'},
                  {'logo_url': '/static/img/brands/prime-video.svg',
                   'logo_class': 'brand-logo',
                   'name': 'Prime Video',
                   'icon': 'simple-icons:primevideo'}]},
 {'id': 'combo-disney-prime',
  'name': 'Disney+ + Prime Video',
  'icon': 'lucide:package',
  'accent': '#3fb5ff',
  'category': 'Combos',
  'badge': 'DUO',
  'description': 'Combo de dos perfiles de entretenimiento.',
  'plans': [{'name': 'Perfiles · 1 mes', 'price': 15}],
  'details': ['Incluye Disney+, Prime Video en un solo combo.',
              'La modalidad exacta de perfil/cuenta y la duración dependen del plan seleccionado.'],
  'notes': [],
  'combo_logos': [{'logo_url': 'https://upload.wikimedia.org/wikipedia/commons/6/64/Disney%2B_2024.svg',
                   'logo_class': 'brand-logo',
                   'name': 'Disney+',
                   'icon': 'simple-icons:disneyplus'},
                  {'logo_url': '/static/img/brands/prime-video.svg',
                   'logo_class': 'brand-logo',
                   'name': 'Prime Video',
                   'icon': 'simple-icons:primevideo'}]},
 {'id': 'combo-prime-paramount',
  'name': 'Prime Video + Paramount+',
  'icon': 'lucide:package',
  'accent': '#3B9AFF',
  'category': 'Combos',
  'badge': 'DUO',
  'description': 'Combo de Prime Video y Paramount+.',
  'plans': [{'name': 'Perfil · combo', 'price': 18}],
  'details': ['Incluye Prime Video, Paramount+ en un solo combo.',
              'La modalidad exacta de perfil/cuenta y la duración dependen del plan seleccionado.'],
  'notes': [],
  'combo_logos': [{'logo_url': '/static/img/brands/prime-video.svg',
                   'logo_class': 'brand-logo',
                   'name': 'Prime Video',
                   'icon': 'simple-icons:primevideo'},
                  {'logo_url': 'https://cdn.simpleicons.org/paramountplus/0064FF',
                   'logo_class': 'brand-logo',
                   'name': 'Paramount+',
                   'icon': 'simple-icons:paramountplus'}]},
 {'id': 'combo-chatgpt-canva',
  'name': 'ChatGPT + Canva',
  'icon': 'lucide:sparkles',
  'accent': '#10E9B3',
  'category': 'Combos',
  'badge': 'AI DUO',
  'description': 'Combo de herramientas de IA y diseño. Solo para activaciones y accesos autorizados.',
  'plans': [{'name': '1 mes', 'price': 15}, {'name': '3 meses', 'price': 40}],
  'details': [],
  'notes': [],
  'combo_logos': [{'logo_url': 'https://cdn.simpleicons.org/openai/FFFFFF',
                   'logo_class': 'brand-logo',
                   'name': 'ChatGPT',
                   'icon': 'simple-icons:openai'},
                  {'logo_url': 'https://cdn.simpleicons.org/canva/00C4CC',
                   'logo_class': 'brand-logo',
                   'name': 'Canva',
                   'icon': 'simple-icons:canva'}]},
 {'id': 'combo-google-canva',
  'name': 'Google + Canva',
  'icon': 'lucide:cloud-cog',
  'accent': '#65A5FF',
  'category': 'Combos',
  'badge': 'WORK',
  'description': 'Combo de herramientas Google y Canva.',
  'plans': [{'name': '3 meses', 'price': 12}],
  'details': [],
  'notes': [],
  'combo_logos': [{'logo_url': 'https://cdn.simpleicons.org/google/FFFFFF',
                   'logo_class': 'brand-logo',
                   'name': 'Google',
                   'icon': 'simple-icons:google'},
                  {'logo_url': 'https://cdn.simpleicons.org/canva/00C4CC',
                   'logo_class': 'brand-logo',
                   'name': 'Canva',
                   'icon': 'simple-icons:canva'}]},
 {'id': 'duolingo',
  'name': 'Duolingo',
  'icon': 'simple-icons:duolingo',
  'accent': '#58CC02',
  'category': 'Educación',
  'badge': 'LEARN',
  'description': 'Cuenta privada y de uso personal durante 30 días.',
  'plans': [{'name': '30 días', 'price': None}],
  'details': ['No editar el método de pago.',
              'No compartir credenciales con terceros.',
              'Una vez cambiado el correo, la cuenta queda bajo tu control.'],
  'notes': [],
  'logo_url': 'https://cdn.simpleicons.org/duolingo/58CC02',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'Duolingo'},
 {'id': 'elevenlabs',
  'name': 'ElevenLabs Creator',
  'icon': 'simple-icons:elevenlabs',
  'accent': '#FFFFFF',
  'category': 'IA y productividad',
  'badge': '121K',
  'description': 'Cuenta Creator con 121,000 créditos para generación y clonación de voz profesional.',
  'plans': [{'name': 'Creator · 25 a 30 días', 'price': None}],
  'details': ['121,000 créditos incluidos.',
              'Clonación de voz profesional y audio de hasta 192 kbps.',
              'Hasta 1,000 proyectos de estudio.',
              'Cuenta compartida con una persona más.',
              'Garantía de 25 días por fallas ajenas al usuario.'],
  'notes': ['No cambiar facturación, correo, contraseña ni datos de la cuenta.'],
  'logo_url': 'https://cdn.simpleicons.org/elevenlabs/FFFFFF',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'ElevenLabs'},
 {'id': 'gamma-pro',
  'name': 'Gamma Pro AI',
  'icon': 'lucide:presentation',
  'accent': '#8B5CF6',
  'category': 'IA y productividad',
  'badge': 'GAMMA',
  'description': 'Gamma Pro para crear presentaciones, documentos y páginas con IA.',
  'plans': [{'name': 'Cuenta completa · 1 mes · 4,000 créditos IA', 'price': 30},
            {'name': 'Gamma · 1 mes', 'price': 15}],
  'details': ['Gamma Pro completo por 1 mes con 4,000 créditos de IA para funciones avanzadas.',
              'Ideal para crear presentaciones, documentos y páginas con resultados premium.',
              'Se entrega correo y clave en el plan personal/privado.',
              'Entrega rápida y soporte 24/7 coordinado por WhatsApp.'],
  'notes': []},
 {'id': 'google-storage',
  'name': 'Google One + Gemini',
  'icon': 'simple-icons:google',
  'accent': '#4285F4',
  'category': 'IA y productividad',
  'badge': '2TB',
  'description': 'Almacenamiento ampliado de Google con beneficios de IA según el plan.',
  'plans': [{'name': 'Perfil · 3 meses · 2TB + Gemini', 'price': 15},
            {'name': 'Perfil · 6 meses · 2TB + Gemini', 'price': 25},
            {'name': 'Cuenta completa · 18 meses', 'price': 50},
            {'name': 'Gemini · activación a correo · 18 meses', 'price': 15}],
  'details': ['Planes familiares con 2TB de almacenamiento y beneficios Google One.',
              'Incluye Gemini 2.5 Pro según el plan indicado.',
              'La expansión de almacenamiento funciona para correos elegibles dentro del grupo familiar.',
              'La información de cada usuario permanece privada en su propia cuenta.'],
  'notes': [],
  'logo_url': 'https://cdn.simpleicons.org/google/FFFFFF',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'Google'},
 {'id': 'ilovepdf',
  'name': 'iLovePDF Premium',
  'icon': 'simple-icons:ilovepdf',
  'accent': '#FF444F',
  'category': 'IA y productividad',
  'badge': 'PDF',
  'description': 'Herramientas premium para convertir, comprimir, editar, firmar y gestionar PDF.',
  'plans': [{'name': 'Perfil · 1 mes', 'price': 6},
            {'name': 'Perfil · 3 meses', 'price': 14},
            {'name': 'Cuenta completa privada · 1 año', 'price': 30}],
  'details': ['Acceso a herramientas premium de conversión, compresión, fusión, división y edición de PDF.',
              'Incluye OCR, firmas digitales, sincronización y créditos de IA según el plan.',
              'Disponible en web, móvil y escritorio.',
              'En cuentas compartidas, coordina el uso del código o acceso con el proveedor.'],
  'notes': [],
  'logo_url': 'https://cdn.simpleicons.org/ilovepdf/FF0000',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'iLovePDF'},
 {'id': 'leonardo',
  'name': 'Leonardo AI',
  'icon': 'simple-icons:leonardoai',
  'accent': '#8B5CF6',
  'category': 'IA y productividad',
  'badge': '8.5K',
  'description': 'Leonardo.Ai para generación de imágenes y contenido creativo con IA.',
  'plans': [{'name': '1 mes · 8,500 créditos', 'price': 18}],
  'details': ['8,500 créditos incluidos con suscripción privada de 1 mes.',
              'Acceso a PhotoReal, Alchemy, Prompt Magic y modelos exclusivos disponibles en el plan.',
              'Ideal para uso personal o reventa autorizada dentro de tus propios servicios.'],
  'notes': [],
  'logo_url': 'https://app.leonardo.ai/img/leonardo-by-canva.svg',
  'logo_class': 'brand-logo brand-logo-wide brand-logo-leonardo',
  'display_name': 'Leonardo.Ai'},
 {'id': 'lovable',
  'name': 'Lovable Lite',
  'icon': 'lucide:heart-handshake',
  'accent': '#FF4F87',
  'category': 'IA y productividad',
  'badge': '12M',
  'description': 'Acceso a Lovable Lite para construir aplicaciones y flujos de trabajo con IA.',
  'plans': [{'name': '12 meses · activación a correo', 'price': 60}],
  'details': ['5 créditos diarios, hasta 150 al mes.',
              '300 créditos de bono únicos.',
              'Dominios personalizados y opción de retirar el badge según el plan.'],
  'notes': []},
 {'id': 'notion',
  'name': 'Notion Business',
  'icon': 'simple-icons:notion',
  'accent': '#FFFFFF',
  'category': 'IA y productividad',
  'badge': 'BUSINESS',
  'description': 'Productividad, documentación y gestión de proyectos.',
  'plans': [{'name': 'Cuenta completa · 3 meses', 'price': 18}],
  'details': ['Espacios colaborativos, bases de datos, calendarios, notas y funciones de IA según disponibilidad.'],
  'notes': [],
  'logo_url': 'https://cdn.simpleicons.org/notion/FFFFFF',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'Notion'},
 {'id': 'quillbot',
  'name': 'QuillBot Premium',
  'icon': 'simple-icons:quillbot',
  'accent': '#4DB6AC',
  'category': 'Educación',
  'badge': 'WRITE',
  'description': 'QuillBot Premium para paráfrasis, corrección, resúmenes y escritura asistida.',
  'plans': [{'name': '1 mes', 'price': 6}],
  'details': ['Paráfrasis premium, corrector, resúmenes y otras funciones del plan.'],
  'notes': [],
  'logo_url': 'https://quillbot.com/blog/wp-content/themes/blog-learneo-2024/img/Quillbot-logo.png',
  'logo_class': 'brand-logo brand-logo-wide brand-logo-quillbot',
  'display_name': 'QuillBot'},
 {'id': 'quizlet',
  'name': 'Quizlet Plus',
  'icon': 'simple-icons:quizlet',
  'accent': '#4255FF',
  'category': 'Educación',
  'badge': 'STUDY',
  'description': 'Herramientas premium para estudiar con flashcards y modos de aprendizaje.',
  'plans': [{'name': 'Cuenta privada · 1 mes', 'price': 25}],
  'details': ['Cuenta privada Quizlet Plus por 1 mes.',
              'Incluye experiencia sin anuncios, modo offline y herramientas premium de estudio según disponibilidad.',
              'Ideal para flashcards, pruebas, práctica y seguimiento de estudio.'],
  'notes': [],
  'logo_url': 'https://cdn.simpleicons.org/quizlet/4255FF',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'Quizlet'},
 {'id': 'canva',
  'name': 'Canva Pro',
  'icon': 'simple-icons:canva',
  'accent': '#00C4CC',
  'category': 'Diseño',
  'badge': 'CANVA',
  'description': 'Diseño gráfico y creación de contenido con Canva Pro.',
  'plans': [{'name': '3 meses', 'price': 8},
            {'name': 'Otros periodos', 'price': None},
            {'name': 'Panel administrable · hasta 500 usuarios', 'price': 100}],
  'details': ['Panel Canva Pro compartido con capacidad de hasta 500 usuarios.',
              'Se asignan 3 administradores principales en el panel según coordinación.',
              'Puedes gestionar usuarios y revender accesos propios dentro de tu panel.',
              'La garantía indicada es de 6 meses o hasta completar los 500 usuarios.'],
  'notes': [],
  'logo_url': 'https://cdn.simpleicons.org/canva/00C4CC',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'Canva'},
 {'id': 'capcut',
  'name': 'CapCut Pro',
  'icon': 'simple-icons:capcut',
  'accent': '#FFFFFF',
  'category': 'Diseño',
  'badge': 'VIDEO',
  'description': 'Edición de video premium sin marca de agua y con herramientas avanzadas.',
  'plans': [{'name': 'PC · 1 mes', 'price': 12}, {'name': 'Cuenta completa · 1 mes', 'price': 20}],
  'details': ['Edición premium sin marca de agua y con herramientas avanzadas.',
              'El plan para PC es compartido con 2 personas más, sin afectar el uso normal según lo indicado.',
              'La cuenta completa permite administración total por parte del comprador.'],
  'notes': [],
  'logo_url': 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Capcut-icon.svg',
  'logo_class': 'brand-logo brand-logo-square brand-logo-capcut',
  'display_name': 'CapCut'},
 {'id': 'chatgpt',
  'name': 'ChatGPT',
  'icon': 'simple-icons:openai',
  'accent': '#FFFFFF',
  'category': 'IA y productividad',
  'badge': 'AI',
  'description': 'Acceso o activación de planes ChatGPT únicamente cuando sea autorizado y conforme a las condiciones '
                 'del servicio.',
  'plans': [{'name': 'Plus · 1 mes', 'price': 15}, {'name': 'Go · 1 mes', 'price': 10}],
  'details': ['ChatGPT Plus de 1 mes y ChatGPT Go de 1 mes disponibles según el plan.',
              'Ideal para estudio, trabajo, redacción, programación y tareas con IA.'],
  'notes': ['No se ofrecen accesos obtenidos de cuentas ajenas ni credenciales sin autorización.'],
  'logo_url': 'https://cdn.simpleicons.org/openai/FFFFFF',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'ChatGPT'},
 {'id': 'office-e3',
  'name': 'Microsoft 365 E3',
  'icon': 'simple-icons:microsoft365',
  'accent': '#D83B01',
  'category': 'Productividad empresarial',
  'badge': 'MICROSOFT 365',
  'description': 'Suite empresarial de Microsoft con Word, Excel, PowerPoint, Outlook, OneDrive y herramientas de '
                 'administración.',
  'plans': [{'name': '1 año', 'price': 100}],
  'details': ['Microsoft 365 E3 es un plan empresarial de productividad y colaboración de Microsoft.',
              'Incluye aplicaciones de Microsoft 365 para web, móvil y escritorio, además de almacenamiento en la nube '
              'y funciones de administración y seguridad según el plan.',
              'La disponibilidad exacta de Teams, Windows Enterprise y otras funciones puede variar según la licencia '
              'que se entregue.'],
  'notes': [],
  'logo_url': 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_365_%282022%29.svg',
  'logo_class': 'brand-logo brand-logo-square brand-logo-m365',
  'display_name': 'Microsoft 365 E3'},
 {'id': 'windows11',
  'name': 'Windows 11 Pro',
  'icon': 'simple-icons:windows11',
  'accent': '#0078D4',
  'category': 'Software',
  'badge': 'KEY',
  'description': 'Clave Retail para Windows 11 Pro.',
  'plans': [{'name': '1 PC · Retail Key', 'price': 25}],
  'details': ['Versión completa con licencia Retail para 1 PC.',
              'Entrega instantánea de clave y descarga.',
              'Garantía referencial de 180 días en la licencia entregada.'],
  'notes': [],
  'logo_url': 'https://cdn.simpleicons.org/windows11/0078D4',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'Windows 11'},
 {'id': 'autodesk',
  'name': 'Autodesk',
  'icon': 'simple-icons:autodesk',
  'accent': '#0696D7',
  'category': 'Software',
  'badge': 'CAD',
  'description': 'Acceso a software Autodesk durante 12 meses según la licencia adquirida.',
  'plans': [{'name': '1 año · 1 PC', 'price': 20}],
  'details': ['Licencia por 12 meses para programas Autodesk según disponibilidad.',
              'Puede registrarse hasta en 2 equipos, con uso en uno a la vez.',
              'Si se cambia la contraseña de la cuenta y eso invalida la garantía, la cobertura puede perderse.'],
  'notes': [],
  'logo_url': 'https://cdn.simpleicons.org/autodesk/0696D7',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'Autodesk'},
 {'id': 'office-plus',
  'name': 'Microsoft Office 365 Plus',
  'icon': 'simple-icons:microsoft',
  'accent': '#F25022',
  'category': 'Software',
  'badge': 'OFFICE',
  'description': 'Suite Microsoft Office 365 Plus.',
  'plans': [{'name': '1 año · no renovable', 'price': 30}],
  'details': ['Microsoft Office 365 Plus por 1 año, modalidad no renovable según el producto ofertado.',
              'Usa únicamente licencias oficiales y autorizadas.'],
  'notes': ['Usa únicamente licencias oficiales.'],
  'logo_url': 'https://cdn.simpleicons.org/microsoft/5E5E5E',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'Microsoft'},
 {'id': 'sentinel',
  'name': 'Consulta de reporte crediticio',
  'icon': 'lucide:file-search-2',
  'accent': '#00D084',
  'category': 'Consultas',
  'badge': 'REPORTE',
  'description': 'Consulta de reporte crediticio únicamente para el propio titular o con autorización verificable.',
  'plans': [{'name': 'Consulta autorizada', 'price': 10}],
  'details': ['Puede incluir información reportada por entidades correspondientes.'],
  'notes': ['No se realizan consultas sobre terceros sin autorización.']},
 {'id': 'claude-personal',
  'name': 'Claude · Uso personal',
  'icon': 'simple-icons:anthropic',
  'accent': '#D97757',
  'category': 'IA',
  'badge': 'CLAUDE',
  'description': 'Acceso o contenido de Claude para uso personal, con entrega coordinada por WhatsApp.',
  'plans': [{'name': 'Uso personal', 'price': 15}],
  'details': ['Después de la compra, contacta por WhatsApp enviando tu código de compra.',
              'La entrega se coordina de forma privada; si incluye material digital, puede facilitarse mediante un '
              'Google Drive privado.',
              'Soporte incluido durante el proceso de entrega.'],
  'notes': ['Ofrecer únicamente accesos, licencias o materiales que tengas autorización para distribuir.'],
  'logo_url': 'https://cdn.simpleicons.org/anthropic/D97757',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'Claude'},
 {'id': 'sketchup-pro-2024',
  'name': 'SketchUp Pro 2024',
  'icon': 'simple-icons:sketchup',
  'accent': '#005F9E',
  'category': 'Software',
  'badge': 'SKETCHUP',
  'description': 'SketchUp Pro 2024 para diseño y modelado 3D, con entrega coordinada por correo.',
  'plans': [{'name': 'Cuenta / licencia original · 1 dispositivo', 'price': 80}],
  'details': ['Entrega al correo electrónico con manual de instalación.',
              'Tiempo estimado de entrega: 1 a 2 horas, dentro del horario de atención indicado.',
              'Uso en un solo dispositivo por perfil.'],
  'notes': ['No modificar el plan ni los métodos de pago asociados. La garantía aplica únicamente a licencias '
            'originales y transferibles/autorizadas.'],
  'logo_url': 'https://cdn.simpleicons.org/sketchup/005F9E',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'SketchUp Pro 2024'},
 {'id': 'gemini-ultra-flow',
  'name': 'Gemini Ultra + Flow / Veo 3',
  'icon': 'simple-icons:googlegemini',
  'accent': '#8E75FF',
  'category': 'IA',
  'badge': 'VIDEO AI',
  'description': 'Herramientas de IA de Google orientadas a creación de contenido y video.',
  'plans': [{'name': '1 mes · 1 dispositivo', 'price': 25}],
  'details': ['Acceso premium por 1 mes para un solo dispositivo.',
              'Incluye funciones de creación de video según la disponibilidad del plan contratado.',
              'Garantía referencial de 25 días y soporte por WhatsApp.'],
  'notes': ['No compartir el acceso ni modificar información de facturación o cuenta si eso invalida la garantía.'],
  'logo_url': 'https://cdn.simpleicons.org/googlegemini/8E75FF',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'Gemini'},
 {'id': 'powerbi-ppu',
  'name': 'Microsoft Power BI Premium Per User',
  'icon': 'simple-icons:powerbi',
  'accent': '#F2C811',
  'category': 'Productividad empresarial',
  'badge': 'POWER BI PPU',
  'description': 'Licencia individual de Power BI con capacidades avanzadas Premium Per User.',
  'plans': [{'name': 'Cuenta personal · 1 año · 1 dispositivo', 'price': 180}],
  'details': ['Incluye capacidades avanzadas de Power BI Premium Per User además de funciones de Power BI Pro, según '
              'la licencia entregada.',
              'Útil para análisis, modelos de datos, informes avanzados y actualización frecuente de datos.',
              'Entrega de cuenta y contraseña; tiempo estimado de entrega de 1 a 12 horas.'],
  'notes': ['Uso profesional y responsable. Utiliza únicamente licencias originales y autorizadas.'],
  'logo_url': 'https://cdn.simpleicons.org/powerbi/F2C811',
  'logo_class': 'brand-logo brand-logo-wide brand-logo-whiteplate',
  'display_name': 'Power BI'},
 {'id': 'curso-defensa-manipulacion',
  'name': 'Curso: Detección y defensa ante manipulación',
  'icon': 'lucide:shield-check',
  'accent': '#A855F7',
  'category': 'Educación',
  'badge': 'PSICOLOGÍA',
  'description': 'Curso educativo sobre identificación de técnicas manipulativas y autodefensa psicológica.',
  'plans': [{'name': 'Curso completo · acceso digital', 'price': 20}],
  'details': ['Incluye contenidos para reconocer gaslighting, proyección, aislamiento, refuerzo, castigo y otras '
              'señales de manipulación.',
              'Incluye material sobre límites personales, pensamiento crítico y herramientas de autodefensa '
              'psicológica.',
              'Acceso por Google Drive tras coordinar la compra por WhatsApp.'],
  'notes': ['Contenido planteado con fines educativos y de protección personal, no para controlar, intimidar o '
            'perjudicar a otras personas.']},
 {'id': 'eset-internet-security',
  'name': 'ESET Internet Security',
  'icon': 'simple-icons:eset',
  'accent': '#00A6A6',
  'category': 'Software',
  'badge': 'ANTIVIRUS',
  'description': 'Protección contra malware, phishing y amenazas online para uso autorizado.',
  'plans': [{'name': 'Licencia digital · 1 año', 'price': 50}],
  'details': ['Protección contra virus, spyware, troyanos y phishing.',
              'Incluye firewall personal, protección de navegación y herramientas de seguridad según la edición '
              'entregada.',
              'Entrega de licencia digital; tiempo referencial de atención de hasta 45 minutos.'],
  'notes': ['Utiliza únicamente claves o licencias originales y autorizadas.'],
  'logo_url': 'https://cdn.simpleicons.org/eset/00A6A6',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'ESET'},
 {'id': 'turnitin-1m',
  'name': 'Turnitin · Cuenta a tu correo',
  'icon': 'lucide:file-check-2',
  'accent': '#E64A19',
  'category': 'Educación',
  'badge': 'TURNITIN',
  'description': 'Cuenta para análisis de similitud académica, creada en el correo autorizado del cliente.',
  'plans': [{'name': '1 mes · análisis según plan', 'price': 80}],
  'details': ['Para la activación se solicita correo personal del cliente y nombre/apellido para crear el acceso.',
              'Uso exclusivo para análisis de similitud e integridad académica.',
              'Entrega estimada entre 1 y 2 horas según disponibilidad y horario de atención.'],
  'notes': ['No utilizar con fines ilícitos ni para acceder a información de terceros sin autorización.']},
 {'id': 'supergrok-7d',
  'name': 'SuperGrok',
  'icon': 'simple-icons:x',
  'accent': '#FFFFFF',
  'category': 'IA',
  'badge': 'GROK',
  'description': 'Acceso privado de corta duración para funciones avanzadas de Grok, sujeto al plan entregado.',
  'plans': [{'name': 'Cuenta privada · 7 días', 'price': 30}],
  'details': ['Acceso por 7 días con garantía referencial de 5 días.',
              'Orientado a productividad, aprendizaje, investigación y generación de ideas.',
              'Soporte por WhatsApp durante la activación.'],
  'notes': ['Ofrecer únicamente accesos autorizados y respetar las condiciones del proveedor.'],
  'logo_url': 'https://cdn.simpleicons.org/x/FFFFFF',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'SuperGrok'},
 {'id': 'megapack-excel',
  'name': 'MegaPack de Cursos de Excel',
  'icon': 'simple-icons:microsoftexcel',
  'accent': '#217346',
  'category': 'Educación',
  'badge': 'EXCEL',
  'description': 'Material educativo de Excel desde nivel básico hasta avanzado y analítica.',
  'plans': [{'name': 'Acceso digital por Drive', 'price': 20}],
  'details': ['Incluye Excel básico, intermedio, avanzado, experto, financiero, fórmulas, tablas, gráficos, macros '
              'VBA, Power Pivot, Power BI y dashboards.',
              'Incluye plantillas y recursos extra según el paquete entregado.',
              'Acceso digital por Google Drive para estudiar a tu ritmo.'],
  'notes': ['Distribuir únicamente material propio, con licencia o con autorización de reventa.'],
  'logo_url': 'https://cdn.simpleicons.org/microsoftexcel/217346',
  'logo_class': 'brand-logo brand-logo-wide',
  'display_name': 'Excel'}]


# ------------------------------------------------------------------
# SEGURIDAD MÓVIL — SOLO PARA TITULARES / PROPIETARIOS LEGÍTIMOS
# ------------------------------------------------------------------
_OPERATOR_LOGOS = [
    {"name":"Movistar","logo_url":"https://cdn.simpleicons.org/movistar/019DF4","logo_class":"brand-logo","icon":"simple-icons:movistar"},
    {"name":"Bitel","logo_url":"https://bitel.com.pe/favicon.ico","logo_class":"brand-logo","icon":"lucide:signal"},
    {"name":"Entel","logo_url":"https://www.entel.pe/favicon.ico","logo_class":"brand-logo","icon":"lucide:signal"},
    {"name":"Claro","logo_url":"https://www.claro.com.pe/favicon.ico","logo_class":"brand-logo","icon":"lucide:signal"},
]

PRODUCTS.extend([
    {
        "id":"bloqueo-linea-equipo-titular-30",
        "name":"Bloqueo de línea y equipo · titular",
        "icon":"lucide:shield-check",
        "accent":"#25D366",
        "category":"Seguridad móvil",
        "badge":"TITULAR",
        "description":"Gestión de bloqueo oficial para tu propia línea y equipo perdido o robado.",
        "plans":[{"name":"Gestión oficial", "price":30}],
        "details":[
            "Operadores disponibles para orientación: Movistar, Bitel, Entel y Claro.",
            "Movistar y Bitel pueden tener tiempos de atención más largos según el operador.",
            "El servicio cubre el bloqueo del número y del equipo del titular; no incluye paneles ni métodos para terceros.",
            "Tiempo orientativo de gestión: 24 a 48 horas, sujeto a validación y tiempos del operador.",
            "Si el operador rechaza la gestión por falta de requisitos, se coordina la solución o reembolso según el caso.",
            "Para iniciar debes acreditar que eres titular de la línea o propietario legítimo del equipo."
        ],
        "notes":["Uso responsable. No se gestionan bloqueos sobre líneas o equipos ajenos."],
        "combo_logos": _OPERATOR_LOGOS,
    },
    {
        "id":"bloqueo-prioritario-titular-30",
        "name":"Bloqueo prioritario de línea y equipo · titular",
        "icon":"lucide:smartphone-lock-keyhole",
        "accent":"#7C5CFF",
        "category":"Seguridad móvil",
        "badge":"A PEDIDO",
        "description":"Consulta previa y acompañamiento para tramitar el bloqueo oficial de tu propia línea/equipo.",
        "plans":[{"name":"Gestión prioritaria", "price":30}],
        "details":[
            "Consulta primero por WhatsApp si el operador puede procesar el caso.",
            "Disponible para Movistar, Bitel, Entel y Claro.",
            "Después de validar la titularidad, se coordina el número de pedido y la documentación necesaria.",
            "Objetivo de atención inicial: 2 a 5 horas; la resolución final depende del operador.",
            "Contacto oficial de la tienda: +51 984 933 571."
        ],
        "notes":["Solo para el titular o propietario legítimo. No se admiten solicitudes sobre terceros."],
        "combo_logos": _OPERATOR_LOGOS,
    },
    {
        "id":"guia-bloqueo-oficial-soporte-50",
        "name":"Guía de bloqueo oficial + soporte",
        "icon":"lucide:file-shield-2",
        "accent":"#00D4FF",
        "category":"Seguridad móvil",
        "badge":"GUÍA",
        "description":"Guía paso a paso para que el titular solicite el bloqueo por los canales oficiales de su operador.",
        "plans":[{"name":"Guía + soporte", "price":50}],
        "details":[
            "Incluye una guía en formato digital con los pasos para gestionar el bloqueo oficial.",
            "Incluye acompañamiento por WhatsApp si necesitas ayuda para entender el procedimiento.",
            "Compatible con Movistar, Bitel, Entel y Claro, sujeto a los requisitos de cada operador.",
            "Entrega coordinada por WhatsApp enviando el ID del producto.",
            "Tiempo de entrega estimado: hasta 1 hora; en alta demanda puede tardar hasta 2 horas."
        ],
        "notes":[
            "No incluye paneles privados, credenciales ni herramientas para bloquear líneas o equipos de terceros.",
            "La gestión debe realizarla el titular usando canales autorizados."
        ],
        "combo_logos": _OPERATOR_LOGOS,
    },
    {
        "id":"asesoria-imei-linea-titular-50",
        "name":"Asesoría IMEI / línea · titular",
        "icon":"lucide:badge-check",
        "accent":"#FFB020",
        "category":"Seguridad móvil",
        "badge":"VERIFICADO",
        "description":"Asesoría para preparar y presentar correctamente una solicitud de bloqueo de tu IMEI/línea.",
        "plans":[{"name":"Asesoría completa", "price":50}],
        "details":[
            "Orientación para Movistar, Bitel, Entel y Claro.",
            "Se revisan los datos que normalmente solicita el operador para acreditar titularidad o propiedad.",
            "Se acompaña al titular durante el trámite por canales oficiales.",
            "Entrega inmediata de la orientación después de validar el pedido por WhatsApp."
        ],
        "notes":["No se ofrece acceso a paneles de bloqueo ni procedimientos para afectar equipos ajenos."],
        "combo_logos": _OPERATOR_LOGOS,
    }
])



# Logos reforzados con recursos oficiales/brand assets. Si un recurso remoto falla,
# la interfaz conserva el icono de marca como fallback.
for _p in PRODUCTS:
    if _p.get("id") == "gamma-pro":
        _p["logo_url"] = "https://static.gamma.app/images/ui/footer-logo-gradient-565fc8e9.svg"
        _p["logo_class"] = "brand-logo brand-logo-wide"
        _p["icon"] = "lucide:presentation"
    elif _p.get("id") == "lovable":
        _p["logo_url"] = "https://lovable.dev/favicon.ico"
        _p["logo_class"] = "brand-logo"
        _p["icon"] = "lucide:heart"
    elif _p.get("id") == "turnitin-1m":
        _p["logo_url"] = "https://www.turnitin.com/favicon.ico"
        _p["logo_class"] = "brand-logo"
        _p["icon"] = "lucide:file-check-2"
    elif _p.get("id") == "supergrok-7d":
        _p["logo_url"] = "https://grok.com/favicon.ico"
        _p["logo_class"] = "brand-logo"
        _p["icon"] = "lucide:bot"

PAYMENT_METHODS = [{'id': 'yape',
  'name': 'Yape',
  'detail': 'Yape • 918 532 738 • TEDDY',
  'logo_url': 'https://www.yape.com.pe/_next/image?q=100&url=%2Fimages%2Fcomponents%2Fcomponent-25%2Flogo.png&w=256',
  'logo_fallback': 'img/payments/yape.svg',
  'logo_class': 'pay-logo-yape',
  'brand_color': '#7C238C',
  'account': '918532738',
  'holder': 'TEDDY',
  'instructions': 'Yapea exactamente el monto que aparece en tu pedido al 918 532 738. Titular: TEDDY. Guarda tu '
                  'comprobante.'},
 {'id': 'plin',
  'name': 'Plin',
  'detail': 'Plin • 931 768 182 • TEDDY IBERICO',
  'logo_url': 'https://www.bbva.pe/content/dam/public-web/peru/images/promo-sliders/promo-plin.im1585949297034im.png?imwidth=960',
  'logo_fallback': 'img/payments/plin.svg',
  'logo_class': 'pay-logo-plin',
  'brand_color': '#00D3C7',
  'account': '931768182',
  'holder': 'TEDDY IBERICO',
  'instructions': 'En Plin ingresa 931 768 182 y paga exactamente el monto mostrado. Si tu app pide banco/billetera, '
                  'busca Plin/Ligo según aparezca. Verifica que el titular mostrado sea TEDDY IBERICO antes de pagar.'},
 {'id': 'bcp',
  'name': 'BCP',
  'detail': 'BCP • datos por WhatsApp',
  'logo_url': 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Logo-bcp-vector.svg',
  'logo_fallback': 'img/payments/bcp.svg',
  'logo_class': 'pay-logo-bcp',
  'brand_color': '#FF6B2C',
  'account': 'Solicitar por WhatsApp',
  'holder': 'ALEX STREAMING',
  'instructions': 'Para pagar por BCP, solicita los datos bancarios directamente por WhatsApp antes de realizar la '
                  'transferencia.'},
 {'id': 'binance',
  'name': 'Binance',
  'detail': 'Binance ID • 474217268 • nightvorn',
  'logo_url': 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Binance_logo.svg',
  'logo_fallback': 'img/payments/binance.svg',
  'logo_class': 'pay-logo-binance',
  'brand_color': '#F0B90B',
  'account': '474217268',
  'holder': 'nightvorn',
  'instructions': 'Usa Binance ID 474217268. Verifica que el perfil muestre nightvorn antes de confirmar. El monto '
                  'final se coordina según el pedido.'}]

SOCIAL_PLATFORMS = [{'id': 'instagram',
  'name': 'Instagram',
  'icon': 'simple-icons:instagram',
  'accent': '#FF2D7A',
  'services': ['Seguidores', 'Likes', 'Comentarios', 'Compartidas', 'Vistas', 'Espectadores', 'Guardados']},
 {'id': 'facebook',
  'name': 'Facebook',
  'icon': 'simple-icons:facebook',
  'accent': '#1877F2',
  'services': ['Seguidores', 'Me gusta', 'Reacciones', 'Comentarios', 'Compartidas', 'Vistas', 'Espectadores']},
 {'id': 'tiktok',
  'name': 'TikTok',
  'icon': 'simple-icons:tiktok',
  'accent': '#25F4EE',
  'services': ['Seguidores', 'Likes', 'Comentarios', 'Compartidas', 'Vistas', 'Espectadores', 'Guardados']},
 {'id': 'youtube',
  'name': 'YouTube',
  'icon': 'simple-icons:youtube',
  'accent': '#FF0033',
  'services': ['Suscriptores', 'Likes', 'Comentarios', 'Compartidas', 'Vistas', 'Espectadores']},
 {'id': 'x',
  'name': 'X / Twitter',
  'icon': 'simple-icons:x',
  'accent': '#FFFFFF',
  'services': ['Seguidores', 'Likes', 'Respuestas', 'Reposts', 'Vistas']},
 {'id': 'threads',
  'name': 'Threads',
  'icon': 'simple-icons:threads',
  'accent': '#FFFFFF',
  'services': ['Seguidores', 'Likes', 'Respuestas', 'Reposts', 'Vistas']},
 {'id': 'telegram',
  'name': 'Telegram',
  'icon': 'simple-icons:telegram',
  'accent': '#26A5E4',
  'services': ['Miembros', 'Reacciones', 'Comentarios', 'Compartidas', 'Vistas']},
 {'id': 'linkedin',
  'name': 'LinkedIn',
  'icon': 'simple-icons:linkedin',
  'accent': '#0A66C2',
  'services': ['Seguidores', 'Reacciones', 'Comentarios', 'Compartidas', 'Vistas']},
 {'id': 'pinterest',
  'name': 'Pinterest',
  'icon': 'simple-icons:pinterest',
  'accent': '#E60023',
  'services': ['Seguidores', 'Guardados', 'Clics', 'Compartidas', 'Vistas']},
 {'id': 'twitch',
  'name': 'Twitch',
  'icon': 'simple-icons:twitch',
  'accent': '#9146FF',
  'services': ['Seguidores', 'Vistas', 'Espectadores', 'Interacciones', 'Chat']},
 {'id': 'discord',
  'name': 'Discord',
  'icon': 'simple-icons:discord',
  'accent': '#5865F2',
  'services': ['Miembros', 'Reacciones', 'Interacciones']},
 {'id': 'snapchat',
  'name': 'Snapchat',
  'icon': 'simple-icons:snapchat',
  'accent': '#FFFC00',
  'services': ['Seguidores', 'Vistas', 'Interacciones']},
 {'id': 'whatsapp',
  'name': 'WhatsApp',
  'icon': 'simple-icons:whatsapp',
  'accent': '#25D366',
  'services': ['Miembros de canal', 'Reacciones', 'Vistas']},
 {'id': 'reddit',
  'name': 'Reddit',
  'icon': 'simple-icons:reddit',
  'accent': '#FF4500',
  'services': ['Seguidores', 'Upvotes', 'Comentarios', 'Compartidas', 'Vistas']},
 {'id': 'kick',
  'name': 'Kick',
  'icon': 'simple-icons:kick',
  'accent': '#53FC18',
  'services': ['Seguidores', 'Vistas', 'Espectadores', 'Interacciones', 'Chat']}]


# ============================================================
# V28 — CATEGORÍA BLOQUEO
# Solo para el titular/propietario legítimo y mediante canales
# oficiales del operador. No se incluyen paneles privados ni
# métodos para bloquear equipos o líneas de terceros.
# ============================================================
PRODUCTS = [p for p in PRODUCTS if p.get("category") != "Seguridad móvil"]

PRODUCTS.extend([
    {
        "id": "bloqueo-linea-equipo-30",
        "name": "BLOQUEO DE LINEA y EQUIPO",
        "icon": "lucide:shield-alert",
        "accent": "#ff375f",
        "category": "BLOQUEO",
        "badge": "S/30",
        "description": "Asistencia para gestionar el bloqueo oficial de una línea y equipo del propio titular.",
        "plans": [
            {"name": "Bloqueo de línea y equipo · titular", "price": 30}
        ],
        "details": [
            "Operadores disponibles: Movistar (puede demorar más), Bitel (puede demorar más), Entel y Claro.",
            "El servicio es únicamente para el número y equipo del titular o propietario legítimo.",
            "No incluye método ni panel privado.",
            "Tiempo referencial informado: 24 a 48 horas; puede variar según el operador y la validación de titularidad.",
            "Si corresponde un reembolso, se aplica según las condiciones comerciales informadas al cliente.",
            "Antes de iniciar, se debe confirmar que la línea o el equipo pertenecen al solicitante."
        ],
        "notes": [
            "Uso responsable.",
            "No se aceptan solicitudes sobre líneas o equipos de terceros."
        ],
        "logo_url": "",
        "logo_class": "brand-logo",
        "display_name": "Bloqueo línea + equipo"
    },
    {
        "id": "bloqueo-lineas-guia-oficial-50",
        "name": "BLOQUEO DE LINEAS · GUIA OFICIAL Y SOPORTE",
        "icon": "lucide:file-lock-2",
        "accent": "#ffb000",
        "category": "BLOQUEO",
        "badge": "S/50",
        "description": "Guía digital y acompañamiento para que el titular tramite el bloqueo por vías oficiales.",
        "plans": [
            {"name": "Guía oficial + soporte", "price": 50}
        ],
        "details": [
            "Se entrega una guía digital con pasos para gestionar el bloqueo oficial de tu propia línea/equipo.",
            "Operadores: Movistar, Bitel, Entel y Claro.",
            "La orientación se adapta a los requisitos del operador y a la condición de titularidad.",
            "Entrega de la guía: normalmente dentro de 1 a 2 horas, según disponibilidad.",
            "Es a pedido: envía por WhatsApp el ID del producto desde un número registrado en la página."
        ],
        "notes": [
            "No incluye paneles privados, credenciales ni herramientas para bloquear líneas/equipos ajenos.",
            "Uso responsable y únicamente sobre servicios propios."
        ],
        "logo_url": "",
        "logo_class": "brand-logo",
        "display_name": "Guía de bloqueo oficial"
    },
    {
        "id": "bloqueo-linea-equipo-prioritario-30",
        "name": "☠️ BLOQUEO DE LINEA y EQUIPO 🎈",
        "icon": "lucide:smartphone-off",
        "accent": "#7c4dff",
        "category": "BLOQUEO",
        "badge": "S/30",
        "description": "Consulta previa y gestión prioritaria del bloqueo oficial para el propio titular.",
        "plans": [
            {"name": "Bloqueo prioritario · titular", "price": 30}
        ],
        "details": [
            "🔵 Movistar",
            "🟡 Bitel",
            "🟣 Entel",
            "🔴 Claro",
            "Incluye consulta previa para confirmar si el caso puede tramitarse por el canal oficial correspondiente.",
            "Tiempo referencial de gestión: 2 a 5 horas en casos compatibles; puede variar.",
            "Después de la aprobación, el cliente puede proceder con el pedido y enviar el número de orden.",
            "Vendedor oficial: alexstreaming.store · WhatsApp +51984933571"
        ],
        "notes": [
            "Solo para la línea/equipo del titular.",
            "No se tramitan bloqueos sobre terceros."
        ],
        "logo_url": "",
        "logo_class": "brand-logo",
        "display_name": "Bloqueo prioritario"
    },
    {
        "id": "metodo-oficial-bloqueo-linea-equipo-60",
        "name": "METODO OFICIAL DE BLOQUEO DE LINEAS Y EQUIPO",
        "icon": "lucide:book-lock",
        "accent": "#00d4ff",
        "category": "BLOQUEO",
        "badge": "S/60",
        "description": "Tutorial de uso responsable para tramitar bloqueos oficiales de líneas/equipos propios.",
        "plans": [
            {"name": "Tutorial oficial + acompañamiento", "price": 60}
        ],
        "details": [
            "Uso manual mediante tutorial con los pasos necesarios para presentar una solicitud oficial.",
            "Operadores: Movistar, Bitel, Entel y Claro.",
            "Incluye acompañamiento para entender el proceso y los requisitos del operador.",
            "Entrega coordinada por WhatsApp +51984933571."
        ],
        "notes": [
            "No incluye acceso a paneles privados ni herramientas para interferir con líneas/equipos de otras personas.",
            "El uso se limita al titular o propietario legítimo."
        ],
        "logo_url": "",
        "logo_class": "brand-logo",
        "display_name": "Método oficial de bloqueo"
    }
])


# ============================================================
# V29 — BLOQUEO (texto fiel, con límite de titularidad)
# ============================================================
PRODUCTS = [p for p in PRODUCTS if p.get("category") != "BLOQUEO"]

PRODUCTS.extend([
    {
        "id": "bloqueo-linea-equipo-v29-30",
        "name": "BLOQUEO DE LINEA y EQUIPO",
        "icon": "lucide:shield-alert",
        "accent": "#ff375f",
        "category": "BLOQUEO",
        "badge": "S/30",
        "description": "BLOQUEO DE LÍNEAS: se puede gestionar el bloqueo de una línea y equipo del propio titular a través de los canales oficiales del operador.",
        "plans": [{"name": "BLOQUEO DE LINEA y EQUIPO", "price": 30}],
        "details": [
            "LOS QUE ESTÁN DISPONIBLES",
            "MOVISTAR (LENTO)",
            "BITEL (LENTO)",
            "ENTEL",
            "CLARO",
            "TIEMPO APROXIMADO DE BLOQUEO DE 24 HORAS A 48 HORAS O SI NO TÚ REEMBOLSO 👑",
            "OJO ES SOLO EL BLOQUEO DE NUMERO Y EQUIPO NO METODO NI PANEL",
            "Detalles de Solicitud",
            "TIEMPO APROXIMADO DE BLOQUEO DE 24 HORAS A 48 HORAS O SI NO TÚ REEMBOLSO",
            "BLOQUEO DE LÍNEAS: gestión únicamente para el titular o propietario legítimo del equipo.",
            "OJO ES SOLO EL BLOQUEO DE NUMERO Y EQUIPO NO METODO NI PANEL"
        ],
        "notes": [
            "USO RESPONSABLE.",
            "Solo se atienden solicitudes del titular o propietario legítimo."
        ],
        "logo_url": "",
        "logo_class": "brand-logo",
        "display_name": "BLOQUEO DE LINEA y EQUIPO"
    },
    {
        "id": "bloqueo-lineas-guia-soporte-v29-50",
        "name": "BLOQUEO DE LINEAS (GUIA OFICIAL Y SOPORTE)",
        "icon": "lucide:file-lock-2",
        "accent": "#ffb000",
        "category": "BLOQUEO",
        "badge": "S/50",
        "description": "Se entrega una guía en formato digital para gestionar el bloqueo oficial de tu propia línea/equipo y soporte para entender el proceso.",
        "plans": [{"name": "GUIA OFICIAL Y SOPORTE", "price": 50}],
        "details": [
            "SE TE ENTREGA LA GUIA PARA EFECTUAR UN BLOQUEO OFICIAL A TU PROPIA LINEA EN FORMATO DIGITAL Y EN EL CASO QUE NO ENTIENDAS, SE BRINDA SOPORTE.",
            "ESTE ANUNCIO NO ES PARA BLOQUEAR DIRECTAMENTE: ES PARA LA ENTREGA DE LA GUIA Y EL ACOMPAÑAMIENTO.",
            "La entrega del producto demora como máximo 1 HORA, en el peor de los casos 2 horas, sé paciente.",
            "Es a pedido: debes escribir y mandar el ID del producto. Solo respondo a números registrados en la página.",
            "Condiciones de Uso",
            "MOVISTAR (LENTO)",
            "BITEL (LENTO)",
            "ENTEL",
            "CLARO",
            "USO RESPONSABLE"
        ],
        "notes": [
            "No incluye paneles privados ni credenciales.",
            "Solo para trámites del titular o propietario legítimo."
        ],
        "logo_url": "",
        "logo_class": "brand-logo",
        "display_name": "BLOQUEO DE LINEAS"
    },
    {
        "id": "bloqueo-linea-equipo-prioridad-v29-30",
        "name": "☠️☠️BLOQUEO DE LINEA y EQUIPO🎈🎈",
        "icon": "lucide:smartphone-off",
        "accent": "#7c4dff",
        "category": "BLOQUEO",
        "badge": "S/30",
        "description": "🔵 MOVISTAR · 🟡 BITEL · 🟣 ENTEL · 🔴 CLARO — gestión de bloqueo de número y equipo del propio titular.",
        "plans": [{"name": "BLOQUEO DE NUMERO Y EQUIPO", "price": 30}],
        "details": [
            "🔵 MOVISTAR",
            "🟡 BITEL",
            "🟣 ENTEL",
            "🔴 CLARO",
            "BLOQUEO DE NUMERO Y EQUIPO",
            "Detalles de Solicitud",
            "BLOQUEO SE REALIZA EN 2 A 5 HORAS, sujeto a validación y tiempos del operador.",
            "Condiciones de Uso",
            "DE PREFERENCIA COMUNICARTE POR MI PRIVADO PARA CONSULTAR POR EL NUMERO SI SE PUEDE REALIZAR EL BLOQUEO O NO.",
            "UNA VEZ DADA LA APROBACION RECIEN PUEDE PROCEDER POR LA COMPRA Y REENVIARME EL NUMERO DE PEDIDO.",
            "PARA COMUNICARTE CONMIGO PREGUNTA AL GRUPO DE COMPRA Y VENTA POR EL VENDEDOR OFICIAL ALEXSTREAMING.STORE Y TE PASARAN MI WHATSAPP +51984933571"
        ],
        "notes": [
            "Solo para el titular o propietario legítimo.",
            "No se atienden solicitudes sobre terceros."
        ],
        "logo_url": "",
        "logo_class": "brand-logo",
        "display_name": "BLOQUEO DE LINEA y EQUIPO"
    },
    {
        "id": "guia-bloqueo-lineas-equipo-v29-60",
        "name": "GUIA DE BLOQUEO DE LINEAS Y EQUIPO",
        "icon": "lucide:book-lock",
        "accent": "#00d4ff",
        "category": "BLOQUEO",
        "badge": "S/60",
        "description": "Tutorial manual con los pasos necesarios para tramitar el bloqueo oficial de tu propia línea y equipo.",
        "plans": [{"name": "GUIA + ACOMPAÑAMIENTO", "price": 60}],
        "details": [
            "EL USO DE LA GUIA ES DE FORMA MANUAL (TUTORIAL), BRINDANDO LOS PASOS NECESARIOS PARA REALIZAR EL TRAMITE OFICIAL.",
            "EL USO ES BAJO RESPONSABILIDAD DEL CLIENTE.",
            "Descripción Completa",
            "MOVISTAR",
            "BITEL",
            "ENTEL",
            "CLARO",
            "BAJO RESPONSABILIDAD DEL USUARIO",
            "Detalles de Solicitud",
            "ENTREGA INMEDIATA AL ENVIAR AL WHATSAPP +51984933571"
        ],
        "notes": [
            "No incluye acceso a paneles privados.",
            "Solo para el titular o propietario legítimo."
        ],
        "logo_url": "",
        "logo_class": "brand-logo",
        "display_name": "GUIA DE BLOQUEO"
    }
])


# ============================================================
# V30 — BLOQUEO (nombres/precios exactos, uso legítimo)
# ============================================================
PRODUCTS = [p for p in PRODUCTS if p.get("category") != "BLOQUEO"]

PRODUCTS.extend([
    {
        "id": "bloqueo-linea-equipo-v30-30",
        "name": "BLOQUEO DE LINEA y EQUIPO",
        "icon": "lucide:shield-alert",
        "accent": "#ff375f",
        "category": "BLOQUEO",
        "badge": "S/30",
        "description": "Asistencia para gestionar el bloqueo oficial de una línea y equipo del propio titular.",
        "plans": [{"name": "BLOQUEO DE LINEA y EQUIPO", "price": 30}],
        "details": [
            "LOS QUE ESTÁN DISPONIBLES",
            "MOVISTAR (LENTO)",
            "BITEL (LENTO)",
            "ENTEL",
            "CLARO",
            "TIEMPO APROXIMADO DE 24 HORAS A 48 HORAS, sujeto a validación y tiempos del operador.",
            "OJO ES SOLO ASISTENCIA PARA EL BLOQUEO DEL NUMERO Y EQUIPO DEL TITULAR, NO METODO NI PANEL.",
            "Detalles de Solicitud",
            "La solicitud se realiza únicamente para la línea/equipo del titular o propietario legítimo."
        ],
        "notes": [
            "USO RESPONSABLE.",
            "No se aceptan solicitudes sobre líneas o equipos de terceros."
        ],
        "logo_url": "",
        "logo_class": "brand-logo",
        "display_name": "BLOQUEO DE LINEA y EQUIPO"
    },
    {
        "id": "bloqueo-lineas-metodo-panel-v30-50",
        "name": "BLOQUEO DE LINEAS(METODO Y PANEL)",
        "icon": "lucide:file-lock-2",
        "accent": "#ffb000",
        "category": "BLOQUEO",
        "badge": "S/50",
        "description": "Guía y soporte para tramitar bloqueos oficiales de líneas/equipos propios.",
        "plans": [{"name": "BLOQUEO DE LINEAS(METODO Y PANEL)", "price": 50}],
        "details": [
            "Se entrega una guía digital con los pasos para gestionar el bloqueo oficial de tu propia línea/equipo.",
            "Se brinda soporte para entender el proceso y los requisitos del operador.",
            "La entrega del producto demora como máximo 1 HORA; en el peor de los casos, 2 horas.",
            "Es a pedido: debes escribir y mandar el ID del producto desde un número registrado en la página.",
            "Condiciones de Uso",
            "MOVISTAR (LENTO)",
            "BITEL (LENTO)",
            "ENTEL",
            "CLARO",
            "USO RESPONSABLE"
        ],
        "notes": [
            "No incluye acceso a paneles privados ni credenciales.",
            "Solo para trámites del titular o propietario legítimo."
        ],
        "logo_url": "",
        "logo_class": "brand-logo",
        "display_name": "BLOQUEO DE LINEAS(METODO Y PANEL)"
    },
    {
        "id": "bloqueo-linea-equipo-skull-v30-30",
        "name": "☠️☠️BLOQUEO DE LINEA y EQUIPO🎈🎈",
        "icon": "lucide:smartphone-off",
        "accent": "#7c4dff",
        "category": "BLOQUEO",
        "badge": "S/30",
        "description": "Consulta previa y gestión de bloqueo oficial para el propio titular.",
        "plans": [{"name": "☠️☠️BLOQUEO DE LINEA y EQUIPO🎈🎈", "price": 30}],
        "details": [
            "🔵 MOVISTAR",
            "🟡 BITEL",
            "🟣 ENTEL",
            "🔴 CLARO",
            "BLOQUEO DE NUMERO Y EQUIPO DEL TITULAR",
            "Detalles de Solicitud",
            "Tiempo referencial de gestión: 2 a 5 horas, sujeto a validación y al operador.",
            "Condiciones de Uso",
            "DE PREFERENCIA COMUNICARTE POR PRIVADO PARA CONSULTAR SI EL CASO PUEDE REALIZARSE.",
            "UNA VEZ DADA LA APROBACION RECIEN PUEDE PROCEDER POR LA COMPRA Y REENVIAR EL NUMERO DE PEDIDO.",
            "Vendedor oficial alexstreaming.store · WhatsApp +51984933571"
        ],
        "notes": [
            "Solo para el titular o propietario legítimo.",
            "No se atienden solicitudes sobre terceros."
        ],
        "logo_url": "",
        "logo_class": "brand-logo",
        "display_name": "☠️☠️BLOQUEO DE LINEA y EQUIPO🎈🎈"
    },
    {
        "id": "metodo-bloqueo-lineas-equipo-panel-v30-60",
        "name": "METODO DE BLOQUEO DE LINEAS Y EQUIPO (PANEL INCLUIDO EN LA COMPRA)",
        "icon": "lucide:book-lock",
        "accent": "#00d4ff",
        "category": "BLOQUEO",
        "badge": "S/60",
        "description": "Tutorial y acompañamiento para tramitar bloqueos oficiales de líneas/equipos propios.",
        "plans": [{"name": "METODO DE BLOQUEO DE LINEAS Y EQUIPO", "price": 60}],
        "details": [
            "EL USO DE LA GUIA ES DE FORMA MANUAL (TUTORIAL), BRINDANDO LOS PASOS NECESARIOS PARA REALIZAR EL TRAMITE OFICIAL.",
            "EL USO ES BAJO RESPONSABILIDAD DEL CLIENTE.",
            "Descripción Completa",
            "MOVISTAR",
            "BITEL",
            "ENTEL",
            "CLARO",
            "BAJO RESPONSABILIDAD DEL USUARIO",
            "Detalles de Solicitud",
            "ENTREGA INMEDIATA AL ENVIAR AL WHATSAPP +51984933571"
        ],
        "notes": [
            "No incluye acceso a paneles privados ni credenciales.",
            "Solo para el titular o propietario legítimo."
        ],
        "logo_url": "",
        "logo_class": "brand-logo",
        "display_name": "METODO DE BLOQUEO DE LINEAS Y EQUIPO"
    }
])

# ============================================================
# V31 — CLAUDE / SKETCHUP / GEMINI (texto solicitado)
# ============================================================
PRODUCTS = [
    p for p in PRODUCTS
    if p.get("id") not in {
        "claude-uso-personal-v31",
        "sketchup-pro-2024-v31",
        "geminis-ultra-veo3-flow-v31"
    }
]

PRODUCTS.extend([
    {
        "id": "claude-uso-personal-v31",
        "name": "Claude USO PERSONAL",
        "icon": "simple-icons:anthropic",
        "accent": "#D97757",
        "category": "IA",
        "badge": "S/15",
        "description": "Claude USO PERSONAL",
        "plans": [
            {"name": "USO PERSONAL", "price": 15}
        ],
        "details": [
            "Proceso de entrega (100% seguro): Una vez realizada la compra, contáctanos por WhatsApp enviando tu CODIGO DE COMPRA.",
            "Te daremos acceso inmediato a un Google Drive privado con todo el contenido completo.",
            "Podrás verlo online o descargar lo que necesites.",
            "Soporte incluido."
        ],
        "notes": [
            "Usa y distribuye únicamente servicios o licencias que estés autorizado a comercializar."
        ],
        "logo_url": "https://cdn.simpleicons.org/anthropic",
        "logo_class": "brand-logo",
        "display_name": "Claude"
    },
    {
        "id": "sketchup-pro-2024-v31",
        "name": "🔥SKETCHUP Pro 2024 CUENTA ORIGINAL PERMANENTE 🔥",
        "icon": "simple-icons:sketchup",
        "accent": "#005F9E",
        "category": "Diseño",
        "badge": "S/80",
        "description": "Todos nuestros productos son originales e incluyen garantía.",
        "plans": [
            {"name": "🔥SKETCHUP Pro 2024 CUENTA ORIGINAL PERMANENTE 🔥", "price": 80}
        ],
        "details": [
            "Entrega inmediata directo a tu correo electrónico con manual de instalación.",
            "🔥🔥TIEMPO DE ENTREGA 1 A 2 HORAS🔥🔥",
            "🔥🔥RESPETA LAS REGLAS PARA QUE MANTENGAS LA CUENTA🔥🔥",
            "🔥🔥HORARIO DE ENTREGA DE 8AM A 5 PM",
            "🔥🔥LICENCIA ORIGINAL",
            "🔥🔥 Solo se permite un dispositivo por perfil.",
            "🔥🔥 No modificar el plan de pago.",
            "🔥🔥 No manipular el plan de pago",
            "🔥🔥 El incumplimiento de estas reglas será detectado y resultará en la pérdida de la garantía. ❌"
        ],
        "notes": [
            "Usa y distribuye únicamente servicios o licencias que estés autorizado a comercializar."
        ],
        "logo_url": "https://cdn.simpleicons.org/sketchup",
        "logo_class": "brand-logo",
        "display_name": "SketchUp Pro 2024"
    },
    {
        "id": "geminis-ultra-veo3-flow-v31",
        "name": "🎭Geminis ultra veo 3 flow x20/videos ilimitados 1 dispositivo",
        "icon": "simple-icons:googlegemini",
        "accent": "#8E75FF",
        "category": "IA",
        "badge": "S/25",
        "description": "🚨⚠️ INFORMACIÓN IMPORTANTE ⚠️🚨",
        "plans": [
            {"name": "🎭Geminis ultra veo 3 flow x20/videos ilimitados 1 dispositivo", "price": 25}
        ],
        "details": [
            "🔥 GEMINIS ULTRA + FLOW VIDEOS ILIMITADOS 🔥",
            "🎬 Videos en Calidad",
            "📆 Acceso premium por 1 MES",
            "✅ Uso exclusivo para 1 SOLO DISPOSITIVO",
            "🔒 Garantía 25 días",
            "⏳ Después de esa fecha no aplica soporte ni reposición.",
            "⚡ Acceso inmediato",
            "⚡ Servicio estable y premium",
            "⚡ Cupos limitados disponibles",
            "Al realizar la compra: aceptas las condiciones",
            "🚫 Evita perder tu acceso. Activa hoy mismo. 🚫",
            "Despues de la compra escribir al proveedor en WhatsApp +51984933571"
        ],
        "notes": [
            "Usa y distribuye únicamente servicios o licencias que estés autorizado a comercializar."
        ],
        "logo_url": "https://cdn.simpleicons.org/googlegemini",
        "logo_class": "brand-logo",
        "display_name": "Geminis Ultra + Flow"
    }
])


# ============================================================
# V34 — DUOLINGO / ESET / REDES (ajustes seguros)
# ============================================================

# Reemplaza la tarjeta Duolingo anterior por dos productos separados.
PRODUCTS = [p for p in PRODUCTS if p.get("id") != "duolingo"]

PRODUCTS.extend([
    {
        "id": "duolingo-super-1-ano-v34",
        "name": "⚡⚡DUOLINGO SUPER 1 año A TU CORREO⚡⚡",
        "icon": "simple-icons:duolingo",
        "accent": "#58CC02",
        "category": "DUOLINGO",
        "badge": "S/100",
        "description": "Descripción Completa",
        "plans": [
            {"name": "⚡⚡DUOLINGO SUPER 1 año A TU CORREO⚡⚡", "price": 100}
        ],
        "details": [
            "⚡Estas cuentas son de duración de 10 meses a un año.",
            "⚡Acceso completo a todos los perfiles disponibles.",
            "⚡Incluye datos de acceso completos.",
            "⚡Alta calidad, ideal para uso personal o reventa.",
            "⚡Garantía activa por 10 meses",
            "Detalles de Solicitud",
            "Garantía: El servicio tiene garantía por los 10 MESES de duración.",
            "Uso personal: La cuenta es para uso individual; no se permite revender o compartir el acceso si es una cuenta compartida.",
            "Entrega: La entrega se realiza en un plazo de 11día tras confirmar el pago.",
            "Sin reembolsos: Una vez activado el servicio, no se aceptan devoluciones."
        ],
        "notes": [
            "Condiciones de Uso",
            "Garantía: El servicio tiene garantía por los 10 MESES de duración.",
            "Uso personal: La cuenta es para uso individual; no se permite revender o compartir el acceso si es una cuenta compartida.",
            "Entrega: La entrega se realiza en un plazo de 15 A 60 minutos tras confirmar el pago.",
            "Sin reembolsos: Una vez activado el servicio, no se aceptan devoluciones.",
            "Publica y distribuye este acceso únicamente si cuentas con autorización para comercializarlo."
        ],
        "logo_url": "https://cdn.simpleicons.org/duolingo/58CC02",
        "logo_class": "brand-logo brand-logo-wide",
        "display_name": "Duolingo"
    },
    {
        "id": "duolingo-30-dias-v34",
        "name": "DUOLINGO X 30 DIAS",
        "icon": "simple-icons:duolingo",
        "accent": "#58CC02",
        "category": "DUOLINGO",
        "badge": "S/8",
        "description": "Descripción completa: Cuenta Duolingo privada con racha de 30 días activa.",
        "plans": [
            {"name": "DUOLINGO X 30 DIAS", "price": 8}
        ],
        "details": [
            "Cuenta Duolingo privada con racha de 30 días activa.",
            "100% funcional y lista para usar.",
            "Incluye acceso completo al correo temporal para que puedas cambiarlo fácilmente a tu propio correo.",
            "Ideal para mantener tu progreso sin interrupciones.",
            "Detalles de Solicitud",
            "Cuenta Duolingo 30 Días",
            "Acceso al correo incluido",
            "Racha activa garantizada",
            "Entrega inmediata en panel (correo + contraseña)"
        ],
        "notes": [
            "Condiciones de Uso",
            "La cuenta es privada y de uso personal.",
            "No editar método de pago.",
            "No compartir las credenciales con terceros.",
            "Una vez cambiado el correo, la cuenta queda bajo tu control total.",
            "Garantía de 30 días (si hay algún problema con la cuenta, se reemplaza",
            "Publica y distribuye este acceso únicamente si cuentas con autorización para comercializarlo."
        ],
        "logo_url": "https://cdn.simpleicons.org/duolingo/58CC02",
        "logo_class": "brand-logo brand-logo-wide",
        "display_name": "Duolingo"
    }
])

# ============================================================
# V86 — SERVICIOS WEB, REDES Y CONSULTORÍA
# ============================================================
PRODUCTS.extend([
    {
        "id": "diseno-web-redes",
        "name": "DISEÑO (WEB / REDES)",
        "icon": "lucide:globe",
        "accent": "#FF7A00",
        "category": "SITIOS WEB Y DOMINIOS",
        "badge": "WEB",
        "description": "Servicios de páginas web, blogs, tiendas online y mantenimiento.",
        "plans": [
            {"name": "Pagina web informativa", "price": 99, "price_currency": "USD"},
            {"name": "Pagina web negocio", "price": 150, "price_currency": "USD"},
            {"name": "Pagina Blog", "price": 99, "price_currency": "USD"},
            {"name": "Tienda online eCommerce", "price": 199, "price_currency": "USD"},
            {"name": "------------------------", "price": None},
            {"name": "Actualización Wordpress", "price": 30, "price_currency": "USD"},
            {"name": "Mantenimiento Web", "price": 25, "price_currency": "USD"},
            {"name": "Mantenimiento Hosting", "price": 40, "price_currency": "USD"}
        ],
        "details": [
            "Diseño y desarrollo de sitios web informativos, de negocio, blogs y eCommerce.",
            "Actualización de Wordpress y mantenimiento técnico.",
            "Soporte y coordinación directa por WhatsApp."
        ],
        "notes": [
            "Los precios están expresados en USD.",
            "El alcance final de cada proyecto se coordina antes de iniciar."
        ],
        "logo_url": "",
        "logo_class": "",
        "display_name": "Diseño Web / Redes"
    },
    {
        "id": "consultoria-diseno",
        "name": "CONSULTORÍA Y DISEÑO",
        "icon": "lucide:paintbrush-vertical",
        "accent": "#FF7A00",
        "category": "SITIOS WEB Y DOMINIOS",
        "badge": "MEDIA",
        "description": "Campañas, branding, publicaciones, logos, redes y consultoría SEO.",
        "plans": [
            {"name": "Campaña publicitaria Búsqueda", "price": 40, "price_currency": "USD"},
            {"name": "Campaña publicitaria Redes", "price": 35, "price_currency": "USD"},
            {"name": "------------------------", "price": None},
            {"name": "Diseño de publicación (1)", "price": 7, "price_currency": "USD"},
            {"name": "Diseño de publicación (3)", "price": 19, "price_currency": "USD"},
            {"name": "Diseño de marca", "price": 99, "price_currency": "USD"},
            {"name": "Branding de Red social", "price": 70, "price_currency": "USD"},
            {"name": "Diseño de logotipo", "price": 25, "price_currency": "USD"},
            {"name": "Consultoría en Redes", "price": 99, "price_currency": "USD"},
            {"name": "------------------------", "price": None},
            {"name": "Informe SEO", "price": 29, "price_currency": "USD"},
            {"name": "SEO informe+consultoría", "price": 60, "price_currency": "USD"}
        ],
        "details": [
            "Campañas publicitarias, publicaciones, branding y logotipos.",
            "Consultoría en redes y reportes SEO.",
            "Atención y coordinación directa por WhatsApp."
        ],
        "notes": [
            "Los precios están expresados en USD.",
            "Los entregables y tiempos se coordinan según el servicio elegido."
        ],
        "logo_url": "",
        "logo_class": "",
        "display_name": "Consultoría y Diseño"
    }
])

# ESET: conserva la tarjeta, pero usa un icono de seguridad neutral.
# El logo oficial no se incrusta automáticamente porque ESET exige aprobación previa
# para su uso comercial según su guía de marca.
for p in PRODUCTS:
    if p.get("id") == "eset-internet-security":
        p["icon"] = "lucide:shield-check"
        p["logo_url"] = ""
        p["display_name"] = "ESET Internet Security"
        p["notes"] = list(p.get("notes", [])) + [
            "Para colocar el logotipo oficial de ESET, utiliza el archivo original del press kit únicamente si cuentas con la autorización de marca correspondiente."
        ]

# REDES: no se convierte a compra directa de seguidores/likes artificiales.
# Se presenta como marketing/promoción mundial legítima.
SOCIAL_PLATFORMS = [
    {
        "id": "instagram",
        "name": "Instagram · MUNDIAL",
        "icon": "simple-icons:instagram",
        "accent": "#FF2D7A",
        "services": ["Campañas publicitarias", "Alcance mundial", "Gestión de comunidad", "Contenido", "Analítica", "Transmisiones en vivo"]
    },
    {
        "id": "facebook",
        "name": "Facebook · MUNDIAL",
        "icon": "simple-icons:facebook",
        "accent": "#1877F2",
        "services": ["Campañas publicitarias", "Alcance mundial", "Gestión de comunidad", "Contenido", "Analítica", "Transmisiones en vivo"]
    },
    {
        "id": "tiktok",
        "name": "TikTok · MUNDIAL",
        "icon": "simple-icons:tiktok",
        "accent": "#25F4EE",
        "services": ["Campañas publicitarias", "Alcance mundial", "Gestión de comunidad", "Contenido", "Analítica", "Transmisiones en vivo"]
    },
    {
        "id": "youtube",
        "name": "YouTube · MUNDIAL",
        "icon": "simple-icons:youtube",
        "accent": "#FF0033",
        "services": ["Promoción de contenido", "Alcance mundial", "Gestión de comunidad", "Analítica", "Campañas", "Transmisiones en vivo"]
    },
    {
        "id": "x",
        "name": "X / Twitter · MUNDIAL",
        "icon": "simple-icons:x",
        "accent": "#FFFFFF",
        "services": ["Campañas", "Alcance mundial", "Gestión de comunidad", "Contenido", "Analítica"]
    },
    {
        "id": "threads",
        "name": "Threads · MUNDIAL",
        "icon": "simple-icons:threads",
        "accent": "#FFFFFF",
        "services": ["Campañas", "Alcance mundial", "Gestión de comunidad", "Contenido", "Analítica"]
    },
    {
        "id": "telegram",
        "name": "Telegram · MUNDIAL",
        "icon": "simple-icons:telegram",
        "accent": "#26A5E4",
        "services": ["Gestión de canal", "Promoción", "Contenido", "Analítica", "Alcance mundial"]
    },
    {
        "id": "linkedin",
        "name": "LinkedIn · MUNDIAL",
        "icon": "simple-icons:linkedin",
        "accent": "#0A66C2",
        "services": ["Campañas B2B", "Alcance mundial", "Contenido", "Analítica", "Gestión de comunidad"]
    },
    {
        "id": "pinterest",
        "name": "Pinterest · MUNDIAL",
        "icon": "simple-icons:pinterest",
        "accent": "#E60023",
        "services": ["Promoción de pines", "Alcance mundial", "Contenido", "Analítica", "Campañas"]
    },
    {
        "id": "twitch",
        "name": "Twitch · MUNDIAL",
        "icon": "simple-icons:twitch",
        "accent": "#9146FF",
        "services": ["Promoción de canal", "Alcance mundial", "Analítica", "Gestión de comunidad", "Transmisiones en vivo"]
    }
]


# ============================================================
# V39 — REDES: DETALLES DE MÉTRICAS + ALCANCE MUNDIAL
# ============================================================
_SOCIAL_METRICS_V39 = {
    "instagram": ["Seguidores", "Likes", "Comentarios", "Compartidas", "Vistas", "Espectadores en vivo", "Guardados"],
    "facebook": ["Seguidores", "Me gusta", "Reacciones", "Comentarios", "Compartidas", "Vistas", "Espectadores en vivo"],
    "tiktok": ["Seguidores", "Likes", "Comentarios", "Compartidas", "Vistas", "Espectadores en vivo", "Guardados"],
    "youtube": ["Suscriptores", "Likes", "Comentarios", "Compartidas", "Vistas", "Espectadores en vivo"],
    "x": ["Seguidores", "Likes", "Respuestas", "Reposts", "Vistas"],
    "threads": ["Seguidores", "Likes", "Respuestas", "Reposts", "Vistas"],
    "telegram": ["Miembros", "Reacciones", "Comentarios", "Compartidas", "Vistas"],
    "linkedin": ["Seguidores", "Reacciones", "Comentarios", "Compartidas", "Vistas"],
    "pinterest": ["Seguidores", "Guardados", "Clics", "Compartidas", "Vistas"],
    "twitch": ["Seguidores", "Vistas", "Espectadores en vivo", "Interacciones", "Chat"],
    "discord": ["Miembros", "Reacciones", "Interacciones"],
    "snapchat": ["Seguidores", "Vistas", "Interacciones"],
    "whatsapp": ["Miembros de canal", "Reacciones", "Vistas"],
    "reddit": ["Seguidores", "Upvotes", "Comentarios", "Compartidas", "Vistas"],
    "kick": ["Seguidores", "Vistas", "Espectadores en vivo", "Interacciones", "Chat"],
}

for _social in SOCIAL_PLATFORMS:
    _sid = _social.get("id", "")
    _social["metrics"] = _SOCIAL_METRICS_V39.get(
        _sid,
        ["Seguidores", "Likes", "Comentarios", "Compartidas", "Vistas", "Interacciones"]
    )
    _social["scope"] = "MUNDIAL"


# V40 — REDES: nombres normales; DETALLES conserva el comunicado solicitado
for _social in SOCIAL_PLATFORMS:
    _names = {'instagram': 'Instagram', 'facebook': 'Facebook', 'tiktok': 'TikTok', 'youtube': 'YouTube', 'x': 'X / Twitter', 'threads': 'Threads', 'telegram': 'Telegram', 'linkedin': 'LinkedIn', 'pinterest': 'Pinterest', 'twitch': 'Twitch'}
    if _social.get('id') in _names:
        _social['name'] = _names[_social.get('id')]
    _social.pop('scope', None)


# ============================================================
# V41 — REDES: MÉTRICAS EXACTAS SOLICITADAS
# ============================================================
_SOCIAL_METRICS_V41 = [
    "Seguidores",
    "Likes",
    "Comentarios",
    "Compartidas",
    "Vistas",
    "Espectadores en vivo",
    "Guardados",
]

for _social in SOCIAL_PLATFORMS:
    _social["metrics"] = list(_SOCIAL_METRICS_V41)


# ============================================================
# V42 — REDES: CORRECCIÓN VISUAL EXACTA
# ============================================================
_SOCIAL_OPTIONS_V42 = [
    "Seguidores",
    "Likes",
    "Comentarios",
    "Compartidas",
    "Vistas",
    "Espectadores en vivo",
    "Guardados",
]

for _social in SOCIAL_PLATFORMS:
    # Estas son las opciones que aparecen en el selector OBJETIVO.
    _social["services"] = list(_SOCIAL_OPTIONS_V42)
    # Estas mismas opciones aparecen en DETALLES.
    _social["metrics"] = list(_SOCIAL_OPTIONS_V42)


# ============================================================
# V109 — ACCESO DIRECTO + FREE FIRE CON PRECIOS ACTUALIZADOS
# ============================================================

STORE["registration_required"] = False

_FREE_FIRE_IDS = {
    "freefire-diamantes",
    "freefire-membresias",
    "freefire-pase-booyah",
    "freefire-extras",
    "freefire-membresia-mensual",
    "freefire-cajas",
    "freefire-fragmentos",
}
PRODUCTS = [p for p in PRODUCTS if p.get("id") not in _FREE_FIRE_IDS]

PRODUCTS.extend([
    {
        "id": "freefire-diamantes",
        "name": "Free Fire · Diamantes",
        "icon": "lucide:gem",
        "accent": "#28D7FF",
        "category": "Free Fire",
        "badge": "DIAMANTES",
        "description": "Recargas de diamantes con bonificación y paquete total indicado.",
        "plans": [
            {"name": "100 + 10 · Paquete 110", "price": 3.00},
            {"name": "310 + 31 · Paquete 341", "price": 8.50},
            {"name": "520 + 52 · Paquete 572", "price": 15.00},
            {"name": "1060 + 106 · Paquete 1166", "price": 29.00},
            {"name": "2180 + 218 · Paquete 2398", "price": 47.63},
            {"name": "3240 + 324 · Paquete 3564", "price": 75.00},
            {"name": "5600 + 560 · Paquete 6160", "price": 118.96},
            {"name": "11200 + 1120 · Paquete 12320", "price": 280.00},
            {"name": "16800 + 1680 · Paquete 18480", "price": 400.00},
        ],
        "details": [
            "100 + 10 · Paquete 110 · S/ 3.00",
            "310 + 31 · Paquete 341 · S/ 8.50",
            "520 + 52 · Paquete 572 · S/ 15.00",
            "1060 + 106 · Paquete 1166 · S/ 29.00",
            "2180 + 218 · Paquete 2398 · S/ 47.63",
            "3240 + 324 · Paquete 3564 · S/ 75.00",
            "5600 + 560 · Paquete 6160 · S/ 118.96",
            "11200 + 1120 · Paquete 12320 · S/ 280.00",
            "16800 + 1680 · Paquete 18480 · S/ 400.00",
        ],
        "notes": [
            "Precios configurados en soles peruanos (PEN).",
            "La disponibilidad y entrega se coordinan por WhatsApp."
        ],
        "logo_url": "",
        "logo_class": "",
        "display_name": "Free Fire Diamantes",
    },
    {
        "id": "freefire-membresia-mensual",
        "name": "Free Fire · Membresía mensual",
        "icon": "lucide:badge-check",
        "accent": "#C65CFF",
        "category": "Free Fire",
        "badge": "MEMBRESÍA",
        "description": "Membresía mensual de Free Fire.",
        "plans": [
            {"name": "Membresía mensual", "price": 30.00},
        ],
        "details": [
            "Membresía mensual · S/ 30.00",
        ],
        "notes": ["Activación coordinada por WhatsApp."],
        "logo_url": "",
        "logo_class": "",
        "display_name": "Membresía mensual",
    },
    {
        "id": "freefire-pase-booyah",
        "name": "Free Fire · Pase Booyah",
        "icon": "lucide:ticket-check",
        "accent": "#FFB21A",
        "category": "Free Fire",
        "badge": "PASE",
        "description": "Pase Booyah disponible como paquete independiente.",
        "plans": [
            {"name": "Pase Booyah · Paquete 1", "price": 6.00},
        ],
        "details": [
            "Pase Booyah · Paquete 1 · S/ 6.00",
        ],
        "notes": ["Entrega y activación coordinadas por WhatsApp."],
        "logo_url": "",
        "logo_class": "",
        "display_name": "Pase Booyah",
    },
    {
        "id": "freefire-cajas",
        "name": "Free Fire · Cajas",
        "icon": "lucide:package-open",
        "accent": "#00C8FF",
        "category": "Free Fire",
        "badge": "CAJAS",
        "description": "Paquetes de cajas para Free Fire.",
        "plans": [
            {"name": "30 Cajas · Paquete 30", "price": 19.55},
            {"name": "60 Cajas · Paquete 60", "price": 34.53},
            {"name": "120 Cajas · Paquete 120", "price": 70.00},
        ],
        "details": [
            "30 Cajas · Paquete 30 · S/ 19.55",
            "60 Cajas · Paquete 60 · S/ 34.53",
            "120 Cajas · Paquete 120 · S/ 70.00",
        ],
        "notes": ["Selecciona la cantidad de cajas antes de continuar con el pedido."],
        "logo_url": "",
        "logo_class": "",
        "display_name": "Free Fire Cajas",
    },
    {
        "id": "freefire-fragmentos",
        "name": "Free Fire · Fragmentos",
        "icon": "lucide:hexagon",
        "accent": "#20D6D2",
        "category": "Free Fire",
        "badge": "FRAGMENTOS",
        "description": "Paquetes de fragmentos disponibles para Free Fire.",
        "plans": [
            {"name": "90 Fragmentos · Paquete 90", "price": 16.00},
            {"name": "150 Fragmentos · Paquete 150", "price": 20.00},
            {"name": "300 Fragmentos · Paquete 300", "price": 38.00},
            {"name": "600 Fragmentos · Paquete 600", "price": 80.00},
            {"name": "1200 Fragmentos · Paquete 1200", "price": 180.00},
        ],
        "details": [
            "90 Fragmentos · Paquete 90 · S/ 16.00",
            "150 Fragmentos · Paquete 150 · S/ 20.00",
            "300 Fragmentos · Paquete 300 · S/ 38.00",
            "600 Fragmentos · Paquete 600 · S/ 80.00",
            "1200 Fragmentos · Paquete 1200 · S/ 180.00",
        ],
        "notes": ["Selecciona el paquete de fragmentos antes de continuar con el pedido."],
        "logo_url": "",
        "logo_class": "",
        "display_name": "Free Fire Fragmentos",
    },
])
