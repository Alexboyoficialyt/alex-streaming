(() => {
  const searchInput = document.getElementById('searchInput');
  const cards = [...document.querySelectorAll('.product-card')];
  const filterButtons = [...document.querySelectorAll('.filter')];
  const emptyState = document.getElementById('emptyState');
  const modal = document.getElementById('checkoutModal');
  const modalProduct = document.getElementById('modalProduct');
  const modalPlan = document.getElementById('modalPlan');
  const modalPrice = document.getElementById('modalPrice');
  const paymentButtons = [...document.querySelectorAll('.modal-payment')];
  const paymentInstructions = document.getElementById('paymentInstructions');
  const paymentInstructionTitle = document.getElementById('paymentInstructionTitle');
  const paymentInstructionText = document.getElementById('paymentInstructionText');
  const continueButton = document.getElementById('continueWhatsapp');
  const checkoutTerms = document.getElementById('checkoutTerms');
  const detailsTerms = document.getElementById('detailsTerms');
  const socialTerms = document.getElementById('socialTerms');
  const toast = document.getElementById('toast');
  const clock = document.getElementById('liveClock');
  const visitorCount = document.getElementById('visitorCount');
  const orderCount = document.getElementById('orderCount');
  const livePageViews = document.getElementById('livePageViews');
  const liveOnlineUsers = document.getElementById('liveOnlineUsers');
  const epicEntry = document.getElementById('epicEntry');
  const entryCountry = document.getElementById('entryCountry');
  const accessCountryLineMain = document.getElementById('accessCountryLine');
  const accessCountryValueMain = document.getElementById('accessCountryValue');
  const entryProgressBar = document.getElementById('entryProgressBar');
  const entryProgressText = document.getElementById('entryProgressText');
  const entryStatusText = document.getElementById('entryStatusText');
  const epicWelcomeName = document.getElementById('epicWelcomeName');
  const epicWelcomeCountry = document.getElementById('epicWelcomeCountry');
  const epicWelcomePhrase = document.getElementById('epicWelcomePhrase');
  const epicSkipButton = document.getElementById('epicSkipButton');
  const currentVisitorCountry = document.getElementById('currentVisitorCountry');
  const visitorSessionLabel = document.getElementById('visitorSessionLabel');
  const visitorFeedMini = document.getElementById('visitorFeedMini');
  const visitorToast = document.getElementById('visitorToast');
  const visitorToastText = document.getElementById('visitorToastText');
  const liveActivityList = document.getElementById('liveActivityList');
  const activityPageViews = document.getElementById('activityPageViews');
  const activityOnlineUsers = document.getElementById('activityOnlineUsers');
  const purchaseToast = document.getElementById('purchaseToast');
  const purchaseToastIcon = document.getElementById('purchaseToastIcon');
  const purchaseToastTitle = document.getElementById('purchaseToastTitle');
  const purchaseToastMeta = document.getElementById('purchaseToastMeta');
  const welcomeLiveToast = document.getElementById('welcomeLiveToast');
  const welcomeLiveName = document.getElementById('welcomeLiveName');
  const welcomeLiveMeta = document.getElementById('welcomeLiveMeta');
  const purchaseEffect = document.getElementById('purchaseEffect');
  const purchaseEffectTag = document.getElementById('purchaseEffectTag');
  const purchaseEffectTitle = document.getElementById('purchaseEffectTitle');
  const purchaseEffectText = document.getElementById('purchaseEffectText');
  const liveVisitorTicker = document.getElementById('liveVisitorTicker');
  const languageSelect = document.getElementById('languageSelect');
  const currencySelect = document.getElementById('currencySelect');
  const accessLanguageValue = document.getElementById('accessLanguageValue');
  const accessCurrencyValue = document.getElementById('accessCurrencyValue');
  let lastVisitorEventId = 0;
  const socialModal = document.getElementById('socialModal');
  const socialModalNetwork = document.getElementById('socialModalNetwork');
  const socialModalService = document.getElementById('socialModalService');
  const socialModalQuantity = document.getElementById('socialModalQuantity');
  const socialTarget = document.getElementById('socialTarget');
  const socialWhatsapp = document.getElementById('socialWhatsapp');
  const socialDetailsModal = document.getElementById('socialDetailsModal');
  const socialDetailsTitle = document.getElementById('socialDetailsTitle');
  const socialDetailsNotice = document.getElementById('socialDetailsNotice');
  const socialDetailsMetrics = document.getElementById('socialDetailsMetrics');
  const detailsModal = document.getElementById('detailsModal');
  const detailsTitle = document.getElementById('detailsTitle');
  const detailsDescription = document.getElementById('detailsDescription');
  const detailsPlans = document.getElementById('detailsPlans');
  const detailsInfo = document.getElementById('detailsInfo');
  const detailsNotes = document.getElementById('detailsNotes');
  const detailsWhatsapp = document.getElementById('detailsWhatsapp');
  const detailsReviewsSection = document.getElementById('detailsReviewsSection');
  const detailsReviewAverage = document.getElementById('detailsReviewAverage');
  const detailsReviewStars = document.getElementById('detailsReviewStars');
  const detailsReviewCount = document.getElementById('detailsReviewCount');
  const detailsReviewList = document.getElementById('detailsReviewList');
  const reviewForm = document.getElementById('reviewForm');
  const reviewStarPicker = document.getElementById('reviewStarPicker');
  const reviewComment = document.getElementById('reviewComment');
  const reviewFeedback = document.getElementById('reviewFeedback');
  const reviewSubmit = document.getElementById('reviewSubmit');
  let reviewRating = 0;
  let detailsProduct = null;

  let currentFilter = 'all';
  let selectedOrder = null;
  let selectedPayment = null;
  let selectedSocialOrder = null;

  document.getElementById('year').textContent = new Date().getFullYear();

  const BASE_CURRENCY = window.ALEX_STORE?.baseCurrencyCode || 'PEN';
  const BASE_SYMBOL = window.ALEX_STORE?.currency || 'S/';
  let activeLanguage = 'es';
  let activeCurrency = BASE_CURRENCY;
  let currencyRate = 1;
  let currencyManual = false;
  let translationManual = false;
  let chromeTranslator = null;

  const COUNTRY_CURRENCY = {"AD": "EUR", "AE": "AED", "AF": "AFN", "AG": "XCD", "AI": "XCD", "AL": "ALL", "AM": "AMD", "AO": "AOA", "AR": "ARS", "AS": "USD", "AT": "EUR", "AU": "AUD", "AW": "AWG", "AX": "EUR", "AZ": "AZN", "BA": "BAM", "BB": "BBD", "BD": "BDT", "BE": "EUR", "BF": "XOF", "BG": "BGN", "BH": "BHD", "BI": "BIF", "BJ": "XOF", "BL": "EUR", "BM": "BMD", "BN": "BND", "BO": "BOB", "BQ": "USD", "BR": "BRL", "BS": "BSD", "BT": "INR", "BV": "NOK", "BW": "BWP", "BY": "BYN", "BZ": "BZD", "CA": "CAD", "CC": "AUD", "CD": "CDF", "CF": "XAF", "CG": "XAF", "CH": "CHF", "CI": "XOF", "CK": "NZD", "CL": "CLP", "CM": "XAF", "CN": "CNY", "CO": "COP", "CR": "CRC", "CU": "CUP", "CV": "CVE", "CW": "XCG", "CX": "AUD", "CY": "EUR", "CZ": "CZK", "DE": "EUR", "DJ": "DJF", "DK": "DKK", "DM": "XCD", "DO": "DOP", "DZ": "DZD", "EC": "USD", "EE": "EUR", "EG": "EGP", "EH": "MAD", "ER": "ERN", "ES": "EUR", "ET": "ETB", "FI": "EUR", "FJ": "FJD", "FK": "FKP", "FM": "USD", "FO": "DKK", "FR": "EUR", "GA": "XAF", "GB": "GBP", "GD": "XCD", "GE": "GEL", "GF": "EUR", "GG": "GBP", "GH": "GHS", "GI": "GIP", "GL": "DKK", "GM": "GMD", "GN": "GNF", "GP": "EUR", "GQ": "XAF", "GR": "EUR", "GS": "GBP", "GT": "GTQ", "GU": "USD", "GW": "XOF", "GY": "GYD", "HK": "HKD", "HM": "AUD", "HN": "HNL", "HR": "EUR", "HT": "HTG", "HU": "HUF", "ID": "IDR", "IE": "EUR", "IL": "ILS", "IM": "GBP", "IN": "INR", "IO": "USD", "IQ": "IQD", "IR": "IRR", "IS": "ISK", "IT": "EUR", "JE": "GBP", "JM": "JMD", "JO": "JOD", "JP": "JPY", "KE": "KES", "KG": "KGS", "KH": "KHR", "KI": "AUD", "KM": "KMF", "KN": "XCD", "KP": "KPW", "KR": "KRW", "KW": "KWD", "KY": "KYD", "KZ": "KZT", "LA": "LAK", "LB": "LBP", "LC": "XCD", "LI": "CHF", "LK": "LKR", "LR": "LRD", "LS": "ZAR", "LT": "EUR", "LU": "EUR", "LV": "EUR", "LY": "LYD", "MA": "MAD", "MC": "EUR", "MD": "MDL", "ME": "EUR", "MF": "EUR", "MG": "MGA", "MH": "USD", "MK": "MKD", "ML": "XOF", "MM": "MMK", "MN": "MNT", "MO": "MOP", "MP": "USD", "MQ": "EUR", "MR": "MRU", "MS": "XCD", "MT": "EUR", "MU": "MUR", "MV": "MVR", "MW": "MWK", "MX": "MXN", "MY": "MYR", "MZ": "MZN", "NA": "ZAR", "NC": "XPF", "NE": "XOF", "NF": "AUD", "NG": "NGN", "NI": "NIO", "NL": "EUR", "NO": "NOK", "NP": "NPR", "NR": "AUD", "NU": "NZD", "NZ": "NZD", "OM": "OMR", "PA": "PAB", "PE": "PEN", "PF": "XPF", "PG": "PGK", "PH": "PHP", "PK": "PKR", "PL": "PLN", "PM": "EUR", "PN": "NZD", "PR": "USD", "PS": "ILS", "PT": "EUR", "PW": "USD", "PY": "PYG", "QA": "QAR", "RE": "EUR", "RO": "RON", "RS": "RSD", "RU": "RUB", "RW": "RWF", "SA": "SAR", "SB": "SBD", "SC": "SCR", "SD": "SDG", "SE": "SEK", "SG": "SGD", "SH": "SHP", "SI": "EUR", "SJ": "NOK", "SK": "EUR", "SL": "SLE", "SM": "EUR", "SN": "XOF", "SO": "SOS", "SR": "SRD", "SS": "SSP", "ST": "STN", "SV": "USD", "SX": "XCG", "SY": "SYP", "SZ": "SZL", "TC": "USD", "TD": "XAF", "TF": "EUR", "TG": "XOF", "TH": "THB", "TJ": "TJS", "TK": "NZD", "TL": "USD", "TM": "TMT", "TN": "TND", "TO": "TOP", "TR": "TRY", "TT": "TTD", "TV": "AUD", "TW": "TWD", "TZ": "TZS", "UA": "UAH", "UG": "UGX", "UM": "USD", "US": "USD", "UY": "UYU", "UZ": "UZS", "VA": "EUR", "VC": "XCD", "VE": "VES", "VG": "USD", "VI": "USD", "VN": "VND", "VU": "VUV", "WF": "XPF", "WS": "WST", "YE": "YER", "YT": "EUR", "ZA": "ZAR", "ZM": "ZMW", "ZW": "USD"};

  const LANGUAGE_NAMES = {es:'ESPAÑOL',en:'ENGLISH',pt:'PORTUGUÊS',fr:'FRANÇAIS',de:'DEUTSCH',it:'ITALIANO',vi:'TIẾNG VIỆT',ru:'РУССКИЙ',tr:'TÜRKÇE',ar:'العربية',zh:'中文',ja:'日本語',ko:'한국어',hi:'हिन्दी',id:'BAHASA INDONESIA',th:'ไทย',nl:'NEDERLANDS',pl:'POLSKI'};
  const I18N = {
    es:{nav_catalog:'CATÁLOGO',nav_social:'REDES',nav_payments:'PAGOS',nav_how:'CÓMO COMPRAR',catalog_title:'Catálogo completo',catalog_subtitle:'Streaming, IA, productividad, software, educación, VPN, consultas autorizadas y combos.',search_placeholder:'Buscar HBO Max, Gamma, Canva, Office...',filter_all:'TODO',payment_title:'Métodos de pago',payment_note:'Elige el método al comprar. La confirmación final se coordina por WhatsApp.',steps_title:'Compra en 3 pasos',step1_title:'Elige plataforma',step1_text:'Busca el servicio y selecciona el plan que quieres.',step2_title:'Elige el pago',step2_text:'Selecciona Yape, Plin, BCP o Binance.',step3_title:'Confirma por WhatsApp',step3_text:'Tu pedido se arma automáticamente y queda listo para enviar.',checkout_title:'Finalizar pedido',select_payment:'SELECCIONA MÉTODO DE PAGO',continue_whatsapp:'CONTINUAR POR WHATSAPP',consult_whatsapp:'CONSULTAR POR WHATSAPP',social_prepare:'Preparar campaña',send_quote:'CONTINUAR COMPRA POR WHATSAPP',contact:'CONTACTAR',choose_plan:'SELECCIONAR PLAN',from:'DESDE',details:'DETALLES',buy:'COMPRAR',quote:'COMPRAR',online:'ONLINE',consult:'Por confirmar',product:'PRODUCTO',plan:'PLAN',total:'TOTAL',includes:'INCLUYE',conditions:'CONDICIONES',price_approx:'precio aproximado',access_title:'ENTRA AL UNIVERSO DIGITAL',access_desc:'Catálogo premium, herramientas de IA, productividad, redes y atención directa por WhatsApp.',your_name:'TU NOMBRE',start_experience:'INICIAR EXPERIENCIA',country_detected:'PAÍS DETECTADO',enter_status:'AL ENTRAR VERÁS TU NOMBRE + PAÍS EN ALEX STREAMING',hero_lead:'Tu catálogo digital con una experiencia premium de alto impacto. Streaming, IA, productividad, software y combos en un solo lugar. Selecciona un plan y termina el pedido por WhatsApp.',enter_catalog:'ENTRAR AL CATÁLOGO',talk_alex:'HABLAR CON ALEX',purchase_effect_tag:'COMPRA REGISTRADA',purchase_effect_title:'Tu compra fue registrada',purchase_effect_text:'Tu compra de {product} fue registrada. Continúa por WhatsApp para coordinar con Alex Streaming.',purchase_recent_small:'COMPRA RECIENTE · EN VIVO',purchase_recent_title:'Un cliente compró una plataforma',purchase_recent_action:'compró'},
    en:{nav_catalog:'CATALOG',nav_social:'SOCIAL',nav_payments:'PAYMENTS',nav_how:'HOW TO BUY',catalog_title:'Full catalog',catalog_subtitle:'Streaming, AI, productivity, software, education, VPN, authorized services and bundles.',search_placeholder:'Search HBO Max, Gamma, Canva, Office...',filter_all:'ALL',payment_title:'Payment methods',payment_note:'Choose a payment method when ordering. Final confirmation is handled on WhatsApp.',steps_title:'Buy in 3 steps',step1_title:'Choose a platform',step1_text:'Find the service and select the plan you want.',step2_title:'Choose payment',step2_text:'Select Yape, Plin, BCP or Binance.',step3_title:'Confirm on WhatsApp',step3_text:'Your order is prepared automatically and ready to send.',checkout_title:'Complete order',select_payment:'SELECT PAYMENT METHOD',continue_whatsapp:'CONTINUE ON WHATSAPP',consult_whatsapp:'ASK ON WHATSAPP',social_prepare:'Prepare campaign',send_quote:'SEND QUOTE ON WHATSAPP',contact:'CONTACT',choose_plan:'SELECT PLAN',from:'FROM',details:'DETAILS',buy:'BUY',quote:'QUOTE',online:'ONLINE',consult:'To confirm',product:'PRODUCT',plan:'PLAN',total:'TOTAL',includes:'INCLUDES',conditions:'TERMS',price_approx:'approx. price',access_title:'ENTER THE DIGITAL UNIVERSE',access_desc:'Premium catalog, AI tools, productivity, social services and direct WhatsApp support.',your_name:'YOUR NAME',start_experience:'START EXPERIENCE',country_detected:'DETECTED COUNTRY',enter_status:'WHEN YOU ENTER, YOUR NAME + COUNTRY WILL APPEAR IN ALEX STREAMING',hero_lead:'Your digital catalog with a high-impact premium experience. Streaming, AI, productivity, software and bundles in one place. Choose a plan and finish the order on WhatsApp.',enter_catalog:'OPEN CATALOG',talk_alex:'TALK TO ALEX',purchase_effect_tag:'PURCHASE REGISTERED',purchase_effect_title:'Your purchase was registered',purchase_effect_text:'Your purchase of {product} was registered. Continue on WhatsApp to coordinate with Alex Streaming.',purchase_recent_small:'RECENT PURCHASE · LIVE',purchase_recent_title:'A customer bought a platform',purchase_recent_action:'bought'},
    pt:{nav_catalog:'CATÁLOGO',nav_social:'REDES',nav_payments:'PAGAMENTOS',nav_how:'COMO COMPRAR',catalog_title:'Catálogo completo',catalog_subtitle:'Streaming, IA, produtividade, software, educação, VPN, serviços autorizados e combos.',search_placeholder:'Buscar HBO Max, Gamma, Canva, Office...',filter_all:'TUDO',payment_title:'Métodos de pagamento',payment_note:'Escolha o método ao comprar. A confirmação final é feita pelo WhatsApp.',steps_title:'Compre em 3 passos',step1_title:'Escolha a plataforma',step1_text:'Procure o serviço e selecione o plano desejado.',step2_title:'Escolha o pagamento',step2_text:'Selecione Yape, Plin, BCP ou Binance.',step3_title:'Confirme no WhatsApp',step3_text:'Seu pedido é preparado automaticamente e fica pronto para envio.',checkout_title:'Finalizar pedido',select_payment:'SELECIONE O MÉTODO DE PAGAMENTO',continue_whatsapp:'CONTINUAR NO WHATSAPP',consult_whatsapp:'CONSULTAR NO WHATSAPP',social_prepare:'Preparar campanha',send_quote:'ENVIAR COTAÇÃO PELO WHATSAPP',contact:'CONTATO',choose_plan:'SELECIONAR PLANO',from:'A PARTIR DE',details:'DETALHES',buy:'COMPRAR',quote:'COTAR',online:'ONLINE',consult:'A confirmar',product:'PRODUTO',plan:'PLANO',total:'TOTAL',includes:'INCLUI',conditions:'CONDIÇÕES',price_approx:'preço aproximado',access_title:'ENTRE NO UNIVERSO DIGITAL',access_desc:'Catálogo premium, ferramentas de IA, produtividade, redes e atendimento direto pelo WhatsApp.',your_name:'SEU NOME',start_experience:'INICIAR EXPERIÊNCIA',country_detected:'PAÍS DETECTADO',enter_status:'AO ENTRAR, SEU NOME + PAÍS APARECERÃO NO ALEX STREAMING',hero_lead:'Seu catálogo digital com uma experiência premium de alto impacto. Streaming, IA, produtividade, software e combos em um só lugar. Escolha um plano e finalize pelo WhatsApp.',enter_catalog:'ABRIR CATÁLOGO',talk_alex:'FALAR COM ALEX'},
    fr:{nav_catalog:'CATALOGUE',nav_social:'RÉSEAUX',nav_payments:'PAIEMENTS',nav_how:'COMMENT ACHETER',catalog_title:'Catalogue complet',catalog_subtitle:'Streaming, IA, productivité, logiciels, éducation, VPN, services autorisés et packs.',search_placeholder:'Rechercher HBO Max, Gamma, Canva, Office...',filter_all:'TOUT',payment_title:'Modes de paiement',payment_note:'Choisissez le mode de paiement. La confirmation finale se fait sur WhatsApp.',steps_title:'Achetez en 3 étapes',step1_title:'Choisissez la plateforme',step1_text:'Trouvez le service et sélectionnez le forfait souhaité.',step2_title:'Choisissez le paiement',step2_text:'Sélectionnez Yape, Plin, BCP ou Binance.',step3_title:'Confirmez sur WhatsApp',step3_text:'Votre commande est préparée automatiquement.',checkout_title:'Finaliser la commande',select_payment:'SÉLECTIONNEZ LE MODE DE PAIEMENT',continue_whatsapp:'CONTINUER SUR WHATSAPP',consult_whatsapp:'DEMANDER SUR WHATSAPP',social_prepare:'Préparer la campagne',send_quote:'ENVOYER LE DEVIS SUR WHATSAPP',contact:'CONTACT',choose_plan:'CHOISIR LE FORFAIT',from:'À PARTIR DE',details:'DÉTAILS',buy:'ACHETER',quote:'DEVIS',online:'EN LIGNE',consult:'À confirmer',product:'PRODUIT',plan:'FORFAIT',total:'TOTAL',includes:'INCLUS',conditions:'CONDITIONS',price_approx:'prix approximatif',access_title:'ENTREZ DANS L’UNIVERS NUMÉRIQUE',access_desc:'Catalogue premium, outils IA, productivité, réseaux et assistance directe sur WhatsApp.',your_name:'VOTRE NOM',start_experience:'DÉMARRER L’EXPÉRIENCE',country_detected:'PAYS DÉTECTÉ',enter_status:'À L’ENTRÉE, VOTRE NOM + PAYS APPARAÎTRONT DANS ALEX STREAMING',hero_lead:'Votre catalogue numérique avec une expérience premium à fort impact. Streaming, IA, productivité, logiciels et packs en un seul endroit.',enter_catalog:'OUVRIR LE CATALOGUE',talk_alex:'PARLER À ALEX'},
    de:{nav_catalog:'KATALOG',nav_social:'SOCIAL',nav_payments:'ZAHLUNGEN',nav_how:'SO KAUFST DU',catalog_title:'Vollständiger Katalog',catalog_subtitle:'Streaming, KI, Produktivität, Software, Bildung, VPN, autorisierte Dienste und Bundles.',search_placeholder:'HBO Max, Gamma, Canva, Office suchen...',filter_all:'ALLE',payment_title:'Zahlungsmethoden',payment_note:'Wähle beim Kauf die Zahlungsmethode. Die Bestätigung erfolgt über WhatsApp.',steps_title:'Kaufen in 3 Schritten',step1_title:'Plattform wählen',step1_text:'Suche den Dienst und wähle deinen Plan.',step2_title:'Zahlung wählen',step2_text:'Wähle Yape, Plin, BCP oder Binance.',step3_title:'Über WhatsApp bestätigen',step3_text:'Deine Bestellung wird automatisch vorbereitet.',checkout_title:'Bestellung abschließen',select_payment:'ZAHLUNGSMETHODE WÄHLEN',continue_whatsapp:'WEITER ÜBER WHATSAPP',consult_whatsapp:'ÜBER WHATSAPP ANFRAGEN',social_prepare:'Kampagne vorbereiten',send_quote:'ANGEBOT ÜBER WHATSAPP SENDEN',contact:'KONTAKT',choose_plan:'PLAN WÄHLEN',from:'AB',details:'DETAILS',buy:'KAUFEN',quote:'ANGEBOT',online:'ONLINE',consult:'Zu bestätigen',product:'PRODUKT',plan:'PLAN',total:'GESAMT',includes:'ENTHÄLT',conditions:'BEDINGUNGEN',price_approx:'ungefährer Preis',access_title:'BETRITT DAS DIGITALE UNIVERSUM',access_desc:'Premium-Katalog, KI-Tools, Produktivität, soziale Dienste und direkter WhatsApp-Support.',your_name:'DEIN NAME',start_experience:'ERLEBNIS STARTEN',country_detected:'ERKANNTES LAND',enter_status:'BEIM EINTRITT WERDEN DEIN NAME + LAND IN ALEX STREAMING ANGEZEIGT',hero_lead:'Dein digitaler Katalog mit Premium-Erlebnis: Streaming, KI, Produktivität, Software und Bundles an einem Ort.',enter_catalog:'KATALOG ÖFFNEN',talk_alex:'MIT ALEX SPRECHEN'},
    it:{nav_catalog:'CATALOGO',nav_social:'SOCIAL',nav_payments:'PAGAMENTI',nav_how:'COME ACQUISTARE',catalog_title:'Catalogo completo',catalog_subtitle:'Streaming, IA, produttività, software, istruzione, VPN, servizi autorizzati e bundle.',search_placeholder:'Cerca HBO Max, Gamma, Canva, Office...',filter_all:'TUTTO',payment_title:'Metodi di pagamento',payment_note:'Scegli il metodo di pagamento. La conferma finale avviene su WhatsApp.',steps_title:'Acquista in 3 passaggi',step1_title:'Scegli la piattaforma',step1_text:'Trova il servizio e seleziona il piano desiderato.',step2_title:'Scegli il pagamento',step2_text:'Seleziona Yape, Plin, BCP o Binance.',step3_title:'Conferma su WhatsApp',step3_text:'Il tuo ordine viene preparato automaticamente.',checkout_title:'Completa ordine',select_payment:'SELEZIONA METODO DI PAGAMENTO',continue_whatsapp:'CONTINUA SU WHATSAPP',consult_whatsapp:'CHIEDI SU WHATSAPP',social_prepare:'Prepara campagna',send_quote:'INVIA PREVENTIVO SU WHATSAPP',contact:'CONTATTO',choose_plan:'SELEZIONA PIANO',from:'DA',details:'DETTAGLI',buy:'ACQUISTA',quote:'PREVENTIVO',online:'ONLINE',consult:'Chiedi',product:'PRODOTTO',plan:'PIANO',total:'TOTALE',includes:'INCLUDE',conditions:'CONDIZIONI',price_approx:'prezzo approssimativo',access_title:'ENTRA NELL’UNIVERSO DIGITALE',access_desc:'Catalogo premium, strumenti IA, produttività, social e supporto diretto su WhatsApp.',your_name:'IL TUO NOME',start_experience:'AVVIA ESPERIENZA',country_detected:'PAESE RILEVATO',enter_status:'ENTRANDO VEDRAI IL TUO NOME + PAESE IN ALEX STREAMING',hero_lead:'Il tuo catalogo digitale con un’esperienza premium ad alto impatto. Streaming, IA, produttività, software e bundle in un unico posto.',enter_catalog:'APRI CATALOGO',talk_alex:'PARLA CON ALEX'},
    vi:{nav_catalog:'DANH MỤC',nav_social:'MẠNG XÃ HỘI',nav_payments:'THANH TOÁN',nav_how:'CÁCH MUA',catalog_title:'Danh mục đầy đủ',catalog_subtitle:'Streaming, AI, năng suất, phần mềm, giáo dục, VPN, dịch vụ được phép và combo.',search_placeholder:'Tìm HBO Max, Gamma, Canva, Office...',filter_all:'TẤT CẢ',payment_title:'Phương thức thanh toán',payment_note:'Chọn phương thức thanh toán khi mua. Xác nhận cuối cùng qua WhatsApp.',steps_title:'Mua trong 3 bước',step1_title:'Chọn nền tảng',step1_text:'Tìm dịch vụ và chọn gói bạn muốn.',step2_title:'Chọn thanh toán',step2_text:'Chọn Yape, Plin, BCP hoặc Binance.',step3_title:'Xác nhận qua WhatsApp',step3_text:'Đơn hàng được chuẩn bị tự động.',checkout_title:'Hoàn tất đơn hàng',select_payment:'CHỌN PHƯƠNG THỨC THANH TOÁN',continue_whatsapp:'TIẾP TỤC QUA WHATSAPP',consult_whatsapp:'HỎI QUA WHATSAPP',social_prepare:'Chuẩn bị chiến dịch',send_quote:'GỬI BÁO GIÁ QUA WHATSAPP',contact:'LIÊN HỆ',choose_plan:'CHỌN GÓI',from:'TỪ',details:'CHI TIẾT',buy:'MUA',quote:'BÁO GIÁ',online:'TRỰC TUYẾN',consult:'Liên hệ',product:'SẢN PHẨM',plan:'GÓI',total:'TỔNG',includes:'BAO GỒM',conditions:'ĐIỀU KIỆN',price_approx:'giá xấp xỉ',access_title:'BƯỚC VÀO THẾ GIỚI SỐ',access_desc:'Danh mục premium, công cụ AI, năng suất, mạng xã hội và hỗ trợ trực tiếp qua WhatsApp.',your_name:'TÊN CỦA BẠN',start_experience:'BẮT ĐẦU TRẢI NGHIỆM',country_detected:'QUỐC GIA ĐÃ PHÁT HIỆN',enter_status:'KHI VÀO, TÊN + QUỐC GIA CỦA BẠN SẼ HIỂN THỊ TRONG ALEX STREAMING',hero_lead:'Danh mục kỹ thuật số với trải nghiệm premium mạnh mẽ. Streaming, AI, năng suất, phần mềm và combo trong một nơi.',enter_catalog:'MỞ DANH MỤC',talk_alex:'CHAT VỚI ALEX'}
  };


  // V24: idiomas adicionales. Cada idioma hereda cualquier texto no definido desde inglés.
  Object.assign(I18N, {
    ru:{...I18N.en,nav_catalog:'КАТАЛОГ',nav_social:'СОЦСЕТИ',nav_payments:'ОПЛАТА',nav_how:'КАК КУПИТЬ',catalog_title:'Полный каталог',payment_title:'Способы оплаты',steps_title:'Покупка в 3 шага',step1_title:'Выберите сервис',step2_title:'Выберите оплату',step3_title:'Подтвердите в WhatsApp',checkout_title:'Оформить заказ',select_payment:'ВЫБЕРИТЕ СПОСОБ ОПЛАТЫ',continue_whatsapp:'ПРОДОЛЖИТЬ В WHATSAPP',choose_plan:'ВЫБРАТЬ ПЛАН',from:'ОТ',details:'ПОДРОБНЕЕ',buy:'КУПИТЬ',quote:'ЗАПРОС',consult:'Уточнить',product:'ПРОДУКТ',plan:'ПЛАН',total:'ИТОГО',includes:'ВКЛЮЧЕНО',conditions:'УСЛОВИЯ',your_name:'ВАШЕ ИМЯ',start_experience:'НАЧАТЬ',country_detected:'ОПРЕДЕЛЕННАЯ СТРАНА',access_title:'ВОЙДИТЕ В ЦИФРОВУЮ ВСЕЛЕННУ',enter_catalog:'ОТКРЫТЬ КАТАЛОГ',talk_alex:'НАПИСАТЬ ALEX'},
    tr:{...I18N.en,nav_catalog:'KATALOG',nav_social:'SOSYAL',nav_payments:'ÖDEME',nav_how:'NASIL SATIN ALINIR',catalog_title:'Tam katalog',payment_title:'Ödeme yöntemleri',steps_title:'3 adımda satın al',step1_title:'Platform seç',step2_title:'Ödeme seç',step3_title:'WhatsApp ile onayla',checkout_title:'Siparişi tamamla',select_payment:'ÖDEME YÖNTEMİNİ SEÇ',continue_whatsapp:'WHATSAPP İLE DEVAM ET',choose_plan:'PLAN SEÇ',from:'BAŞLANGIÇ',details:'DETAYLAR',buy:'SATIN AL',quote:'TEKLİF',consult:'Sor',product:'ÜRÜN',plan:'PLAN',total:'TOPLAM',includes:'DAHİL',conditions:'KOŞULLAR',your_name:'ADINIZ',start_experience:'DENEYİMİ BAŞLAT',country_detected:'ALGILANAN ÜLKE',access_title:'DİJİTAL EVRENE GİR',enter_catalog:'KATALOĞU AÇ',talk_alex:'ALEX İLE KONUŞ'},
    ar:{...I18N.en,nav_catalog:'الكتالوج',nav_social:'الشبكات',nav_payments:'الدفع',nav_how:'كيفية الشراء',catalog_title:'الكتالوج الكامل',payment_title:'طرق الدفع',steps_title:'اشترِ في 3 خطوات',step1_title:'اختر المنصة',step2_title:'اختر الدفع',step3_title:'أكد عبر واتساب',checkout_title:'إكمال الطلب',select_payment:'اختر طريقة الدفع',continue_whatsapp:'المتابعة عبر واتساب',choose_plan:'اختر الخطة',from:'ابتداءً من',details:'التفاصيل',buy:'شراء',quote:'طلب سعر',consult:'استفسار',product:'المنتج',plan:'الخطة',total:'الإجمالي',includes:'يشمل',conditions:'الشروط',your_name:'اسمك',start_experience:'ابدأ التجربة',country_detected:'البلد المكتشف',access_title:'ادخل العالم الرقمي',enter_catalog:'افتح الكتالوج',talk_alex:'تحدث مع أليكس'},
    zh:{...I18N.en,nav_catalog:'目录',nav_social:'社交',nav_payments:'支付',nav_how:'如何购买',catalog_title:'完整目录',payment_title:'支付方式',steps_title:'3步完成购买',step1_title:'选择平台',step2_title:'选择支付',step3_title:'通过 WhatsApp 确认',checkout_title:'完成订单',select_payment:'选择支付方式',continue_whatsapp:'通过 WHATSAPP 继续',choose_plan:'选择套餐',from:'起价',details:'详情',buy:'购买',quote:'询价',consult:'咨询',product:'产品',plan:'套餐',total:'总计',includes:'包含',conditions:'条件',your_name:'你的名字',start_experience:'开始体验',country_detected:'检测到的国家',access_title:'进入数字世界',enter_catalog:'打开目录',talk_alex:'联系 ALEX'},
    ja:{...I18N.en,nav_catalog:'カタログ',nav_social:'SNS',nav_payments:'支払い',nav_how:'購入方法',catalog_title:'全カタログ',payment_title:'支払い方法',steps_title:'3ステップで購入',step1_title:'サービスを選択',step2_title:'支払いを選択',step3_title:'WhatsAppで確認',checkout_title:'注文を完了',select_payment:'支払い方法を選択',continue_whatsapp:'WHATSAPPで続行',choose_plan:'プランを選択',from:'〜',details:'詳細',buy:'購入',quote:'見積り',consult:'問い合わせ',product:'商品',plan:'プラン',total:'合計',includes:'含む',conditions:'条件',your_name:'お名前',start_experience:'開始',country_detected:'検出された国',access_title:'デジタル世界へ',enter_catalog:'カタログを開く',talk_alex:'ALEXに連絡'},
    ko:{...I18N.en,nav_catalog:'카탈로그',nav_social:'소셜',nav_payments:'결제',nav_how:'구매 방법',catalog_title:'전체 카탈로그',payment_title:'결제 방법',steps_title:'3단계 구매',step1_title:'서비스 선택',step2_title:'결제 선택',step3_title:'WhatsApp 확인',checkout_title:'주문 완료',select_payment:'결제 방법 선택',continue_whatsapp:'WHATSAPP으로 계속',choose_plan:'플랜 선택',from:'시작',details:'상세',buy:'구매',quote:'문의',consult:'문의',product:'상품',plan:'플랜',total:'합계',includes:'포함',conditions:'조건',your_name:'이름',start_experience:'시작하기',country_detected:'감지된 국가',access_title:'디지털 세계로',enter_catalog:'카탈로그 열기',talk_alex:'ALEX에게 문의'},
    hi:{...I18N.en,nav_catalog:'कैटलॉग',nav_social:'सोशल',nav_payments:'भुगतान',nav_how:'कैसे खरीदें',catalog_title:'पूरा कैटलॉग',payment_title:'भुगतान के तरीके',steps_title:'3 चरणों में खरीदें',step1_title:'प्लेटफ़ॉर्म चुनें',step2_title:'भुगतान चुनें',step3_title:'WhatsApp पर पुष्टि करें',checkout_title:'ऑर्डर पूरा करें',select_payment:'भुगतान तरीका चुनें',continue_whatsapp:'WHATSAPP पर जारी रखें',choose_plan:'प्लान चुनें',from:'से',details:'विवरण',buy:'खरीदें',quote:'कोटेशन',consult:'पूछें',product:'उत्पाद',plan:'प्लान',total:'कुल',includes:'शामिल',conditions:'शर्तें',your_name:'आपका नाम',start_experience:'शुरू करें',country_detected:'देश पहचाना गया',access_title:'डिजिटल दुनिया में प्रवेश करें',enter_catalog:'कैटलॉग खोलें',talk_alex:'ALEX से बात करें'},
    id:{...I18N.en,nav_catalog:'KATALOG',nav_social:'SOSIAL',nav_payments:'PEMBAYARAN',nav_how:'CARA MEMBELI',catalog_title:'Katalog lengkap',payment_title:'Metode pembayaran',steps_title:'Beli dalam 3 langkah',step1_title:'Pilih platform',step2_title:'Pilih pembayaran',step3_title:'Konfirmasi via WhatsApp',checkout_title:'Selesaikan pesanan',select_payment:'PILIH METODE PEMBAYARAN',continue_whatsapp:'LANJUT VIA WHATSAPP',choose_plan:'PILIH PAKET',from:'MULAI',details:'DETAIL',buy:'BELI',quote:'TANYA HARGA',consult:'Tanya',product:'PRODUK',plan:'PAKET',total:'TOTAL',includes:'TERMASUK',conditions:'SYARAT',your_name:'NAMA ANDA',start_experience:'MULAI',country_detected:'NEGARA TERDETEKSI',access_title:'MASUK KE DUNIA DIGITAL',enter_catalog:'BUKA KATALOG',talk_alex:'HUBUNGI ALEX'},
    th:{...I18N.en,nav_catalog:'แคตตาล็อก',nav_social:'โซเชียล',nav_payments:'การชำระเงิน',nav_how:'วิธีซื้อ',catalog_title:'แคตตาล็อกทั้งหมด',payment_title:'วิธีชำระเงิน',steps_title:'ซื้อใน 3 ขั้นตอน',step1_title:'เลือกแพลตฟอร์ม',step2_title:'เลือกการชำระเงิน',step3_title:'ยืนยันผ่าน WhatsApp',checkout_title:'สั่งซื้อให้เสร็จ',select_payment:'เลือกวิธีชำระเงิน',continue_whatsapp:'ดำเนินการต่อผ่าน WHATSAPP',choose_plan:'เลือกแพ็กเกจ',from:'เริ่มต้น',details:'รายละเอียด',buy:'ซื้อ',quote:'สอบถามราคา',consult:'สอบถาม',product:'สินค้า',plan:'แพ็กเกจ',total:'รวม',includes:'รวม',conditions:'เงื่อนไข',your_name:'ชื่อของคุณ',start_experience:'เริ่มใช้งาน',country_detected:'ประเทศที่ตรวจพบ',access_title:'เข้าสู่โลกดิจิทัล',enter_catalog:'เปิดแคตตาล็อก',talk_alex:'คุยกับ ALEX'},
    nl:{...I18N.en,nav_catalog:'CATALOGUS',nav_social:'SOCIAL',nav_payments:'BETALINGEN',nav_how:'HOE KOPEN',catalog_title:'Volledige catalogus',payment_title:'Betaalmethoden',steps_title:'Koop in 3 stappen',step1_title:'Kies platform',step2_title:'Kies betaling',step3_title:'Bevestig via WhatsApp',checkout_title:'Bestelling afronden',select_payment:'KIES BETAALMETHODE',continue_whatsapp:'DOORGAAN VIA WHATSAPP',choose_plan:'KIES PLAN',from:'VANAF',details:'DETAILS',buy:'KOPEN',quote:'OFFERTE',consult:'Vraag',product:'PRODUCT',plan:'PLAN',total:'TOTAAL',includes:'INCLUSIEF',conditions:'VOORWAARDEN',your_name:'JE NAAM',start_experience:'START',country_detected:'GEDETECTEERD LAND',access_title:'BETREED DE DIGITALE WERELD',enter_catalog:'OPEN CATALOGUS',talk_alex:'PRAAT MET ALEX'},
    pl:{...I18N.en,nav_catalog:'KATALOG',nav_social:'SOCIAL',nav_payments:'PŁATNOŚCI',nav_how:'JAK KUPIĆ',catalog_title:'Pełny katalog',payment_title:'Metody płatności',steps_title:'Kup w 3 krokach',step1_title:'Wybierz platformę',step2_title:'Wybierz płatność',step3_title:'Potwierdź na WhatsApp',checkout_title:'Zakończ zamówienie',select_payment:'WYBIERZ METODĘ PŁATNOŚCI',continue_whatsapp:'KONTYNUUJ W WHATSAPP',choose_plan:'WYBIERZ PLAN',from:'OD',details:'SZCZEGÓŁY',buy:'KUP',quote:'WYCENA',consult:'Zapytaj',product:'PRODUKT',plan:'PLAN',total:'SUMA',includes:'ZAWIERA',conditions:'WARUNKI',your_name:'TWOJE IMIĘ',start_experience:'ROZPOCZNIJ',country_detected:'WYKRYTY KRAJ',access_title:'WEJDŹ DO CYFROWEGO ŚWIATA',enter_catalog:'OTWÓRZ KATALOG',talk_alex:'NAPISZ DO ALEX'}
  });


  // V25 GLOBAL AUTO:
  // - Detecta cualquier etiqueta BCP-47 del navegador.
  // - Usa traducciones integradas cuando existen.
  // - Para otros idiomas intenta Browser Translator API y, como respaldo,
  //   un servicio público de traducción. Si ambos fallan, conserva una
  //   interfaz base legible sin bloquear el acceso.
  const GLOBAL_LANGUAGE_CODES = [
    'es','en','pt','fr','de','it','vi','ru','tr','ar','zh','ja','ko','hi','id','th','nl','pl',
    'fa','ur','bn','ta','te','mr','gu','pa','he','sw','af','am','el','cs','sk','hu','ro','bg',
    'uk','sr','hr','sl','lt','lv','et','fi','sv','no','da','is','ms','fil','km','lo','my','ne',
    'si','ka','hy','az','kk','uz','mn','sq','mk','bs','ca','eu','gl','cy','ga','mt','lb','be',
    'so','zu','xh','yo','ig','ha','rw','mg','sn'
  ];

  const RTL_LANGUAGES = new Set(['ar','fa','ur','he']);
  const RUNTIME_I18N = Object.create(null);
  const TRANSLATION_CACHE_PREFIX = 'alex-v25-i18n-';

  Object.assign(I18N.es, {
    access_portal:'PORTAL DE ACCESO',
    access_kicker:'// STREAMING · IA · SOFTWARE · REDES',
    name_placeholder:'Ej.: Alex',
    name_required:'Escribe tu nombre para poder ingresar.',
    real_name_required:'Usa tu nombre real. No se permiten nombres genéricos como “Visitante”, “Usuario”, “Guest”, “Visitor” o combinaciones similares.',
    registration_required:'REGISTRO OBLIGATORIO: ESCRIBE TU NOMBRE PARA INGRESAR. TU NOMBRE + PAÍS APARECERÁN EN ALEX STREAMING.',
    ready:'LISTO',
    feature_streaming:'STREAMING',
    feature_ai:'IA',
    feature_catalog:'CATÁLOGO',
    feature_support:'SOPORTE',
    payment_ready:'LISTO',
    payment_data:'DATOS DE PAGO',
    pay_with:'PAGAR CON',
    payment_choose:'Selecciona un método para ver los datos.',
    payment_base_amount:'Monto base a pagar',
    payment_local_amount:'Equivalente aproximado en tu moneda',
    payment_method_help:'Coordina los datos de pago por WhatsApp.',
    checkout_note:'No ingreses contraseñas, códigos bancarios ni datos sensibles en esta web. El pedido se coordina por WhatsApp.',whatsapp_language_note:'Puedes usar un traductor para que el vendedor y tú se entiendan. Dile tu idioma al vendedor para que pueda atenderte mejor.',accept_terms:'Acepto los términos y condiciones del servicio.',terms_required:'Debes aceptar los términos para continuar.',customer_language:'Idioma del cliente',chat_open:'CHAT GLOBAL',chat_community:'COMUNIDAD ALEX STREAMING',chat_title:'CHAT GLOBAL',chat_safety:'Chat público. No compartas teléfono, correo, contraseñas, enlaces ni datos personales.',chat_empty:'Todavía no hay mensajes. Inicia la conversación.',chat_placeholder:'Escribe un mensaje...',chat_send:'ENVIAR',chat_registration_required:'Debes registrarte con tu nombre para escribir en el chat.',chat_private_contact:'Por seguridad, no compartas teléfonos, correos ni enlaces en el chat público.',chat_slow_down:'Espera unos segundos antes de enviar otro mensaje.',chat_send_error:'No se pudo enviar el mensaje. Inténtalo nuevamente.',chat_as:'CHATEANDO COMO',game_open:'JUGAR NEON RUSH',game_title:'NEON RUSH',game_explain:'Atrapa los núcleos de energía antes de que desaparezcan. Los verdes dan +10 puntos, los azules +20 y los rojos quitan 15 puntos. Tienes 30 segundos para conseguir la mayor puntuación posible.',game_start:'EMPEZAR PARTIDA',game_player:'JUGADOR',game_score:'PUNTOS',game_best:'RÉCORD',game_time:'TIEMPO',game_ready:'LISTO PARA JUGAR',game_ready_hint:'Pulsa empezar y toca los núcleos que aparezcan.',game_combo:'COMBO',game_restart:'JUGAR OTRA VEZ',game_finished:'PARTIDA TERMINADA',game_new_record:'¡NUEVO RÉCORD!',social_worldwide:'MUNDIAL',social_not_country:'NO ES DE UN PAÍS EN ESPECÍFICO',social_notice_title:'INFORMACIÓN IMPORTANTE',social_metrics_title:'INTERACCIONES / MÉTRICAS DISPONIBLES',social_details_note:'La disponibilidad depende de la plataforma seleccionada y de las condiciones del servicio. Cada solicitud debe respetar las reglas de la plataforma.',social_worldwide_notice:'IMPORTANTE: Los servicios relacionados con seguidores, likes, comentarios, compartidas, vistas, espectadores en vivo y otras interacciones son MUNDIALES. No corresponden a un país específico. La disponibilidad de cada tipo de interacción depende de la plataforma seleccionada.'
  });
  Object.assign(I18N.en, {
    access_portal:'ACCESS PORTAL',
    access_kicker:'// STREAMING · AI · SOFTWARE · SOCIAL',
    name_placeholder:'E.g.: Alex',
    name_required:'Enter your name to continue.',
    real_name_required:'Use your real name. Generic names such as “Guest”, “Visitor”, “User”, “Visitante” or similar combinations are not allowed.',
    registration_required:'REGISTRATION REQUIRED: ENTER YOUR NAME TO CONTINUE. YOUR NAME + COUNTRY WILL APPEAR IN ALEX STREAMING.',
    ready:'READY',
    feature_streaming:'STREAMING',
    feature_ai:'AI',
    feature_catalog:'CATALOG',
    feature_support:'SUPPORT',
    payment_ready:'READY',
    payment_data:'PAYMENT DETAILS',
    pay_with:'PAY WITH',
    payment_choose:'Select a payment method to see the details.',
    payment_base_amount:'Base amount to pay',
    payment_local_amount:'Approximate equivalent in your currency',
    payment_method_help:'Coordinate payment details on WhatsApp.',
    checkout_note:'Do not enter passwords, banking codes or sensitive information on this website. The order is coordinated on WhatsApp.',whatsapp_language_note:'You can use a translator so you and the seller can understand each other. Tell the seller your language so they can assist you better.',accept_terms:'I accept the service terms and conditions.',terms_required:'You must accept the terms to continue.',customer_language:'Customer language',chat_open:'GLOBAL CHAT',chat_community:'ALEX STREAMING COMMUNITY',chat_title:'GLOBAL CHAT',chat_safety:'Public chat. Do not share phone numbers, email, passwords, links or personal information.',chat_empty:'No messages yet. Start the conversation.',chat_placeholder:'Write a message...',chat_send:'SEND',chat_registration_required:'Register with your name before writing in the chat.',chat_private_contact:'For safety, do not share phone numbers, email addresses or links in the public chat.',chat_slow_down:'Wait a few seconds before sending another message.',chat_send_error:'The message could not be sent. Try again.',chat_as:'CHATTING AS',game_open:'PLAY NEON RUSH',game_title:'NEON RUSH',game_explain:'Catch the energy cores before they disappear. Green gives +10 points, blue +20, and red removes 15 points. You have 30 seconds to get the highest score possible.',game_start:'START GAME',game_player:'PLAYER',game_score:'SCORE',game_best:'BEST',game_time:'TIME',game_ready:'READY TO PLAY',game_ready_hint:'Press start and tap the cores that appear.',game_combo:'COMBO',game_restart:'PLAY AGAIN',game_finished:'GAME OVER',game_new_record:'NEW HIGH SCORE!',social_worldwide:'WORLDWIDE',social_not_country:'NOT LIMITED TO A SPECIFIC COUNTRY',social_notice_title:'IMPORTANT INFORMATION',social_metrics_title:'AVAILABLE INTERACTIONS / METRICS',social_details_note:'Availability depends on the selected platform and service conditions. Each request must follow the platform’s rules.',social_worldwide_notice:'IMPORTANT: Services related to followers, likes, comments, shares, views, live viewers and other interactions are WORLDWIDE. They are not tied to a specific country. Availability of each interaction type depends on the selected platform.'
  });

  function normalizeLanguageCode(raw){
    const value = String(raw || 'es').trim().toLowerCase().replace('_','-');
    if (!value) return 'es';
    const base = value.split('-')[0];
    // Common legacy aliases.
    if (base === 'iw') return 'he';
    if (base === 'in') return 'id';
    if (base === 'tl') return 'fil';
    return base || 'es';
  }

  function nativeLanguageName(code){
    const lang = normalizeLanguageCode(code);
    if (LANGUAGE_NAMES[lang]) return LANGUAGE_NAMES[lang];
    try {
      const name = new Intl.DisplayNames([lang], {type:'language'}).of(lang);
      if (name) return String(name).toLocaleUpperCase(lang);
    } catch (_) {}
    return lang.toUpperCase();
  }

  function populateGlobalLanguageSelector(){
    if (!languageSelect) return;
    const existing = new Set([...languageSelect.options].map(o => o.value));
    GLOBAL_LANGUAGE_CODES.forEach(code => {
      if (existing.has(code)) return;
      const option = document.createElement('option');
      option.value = code;
      option.textContent = `${code.toUpperCase()} · ${nativeLanguageName(code)}`;
      languageSelect.appendChild(option);
    });
  }

  function populateGlobalCurrencySelector(){
    if (!currencySelect) return;
    const existing = new Set([...currencySelect.options].map(o => o.value));
    [...new Set(Object.values(COUNTRY_CURRENCY))].sort().forEach(code => {
      if (existing.has(code)) return;
      const option = document.createElement('option');
      option.value = code;
      option.textContent = code;
      currencySelect.appendChild(option);
    });
  }

  async function browserTranslatorText(text, target){
    if (!text || target === 'es' || !('Translator' in self)) return null;
    try {
      const options = {sourceLanguage:'es', targetLanguage:target};
      const availability = await Translator.availability(options);
      if (availability === 'unavailable') return null;
      const translator = await Translator.create({
        ...options,
        monitor(m){ m.addEventListener('downloadprogress',()=>{}); }
      });
      return await translator.translate(text);
    } catch (_) {
      return null;
    }
  }

  async function publicTranslatorText(text, target){
    if (!text || target === 'es') return text;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4200);
    try {
      const q = encodeURIComponent(text);
      const pair = encodeURIComponent(`es|${target}`);
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${q}&langpair=${pair}`, {
        cache:'force-cache',
        mode:'cors',
        signal:controller.signal
      });
      if (!response.ok) return null;
      const data = await response.json();
      const translated = data?.responseData?.translatedText;
      return translated && typeof translated === 'string' ? translated : null;
    } catch (_) {
      return null;
    } finally {
      clearTimeout(timer);
    }
  }

  async function translateTextGlobal(text, target){
    const lang = normalizeLanguageCode(target);
    if (!text || lang === 'es') return text;
    const cacheKey = `${TRANSLATION_CACHE_PREFIX}${lang}-${text}`;
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) return cached;
    } catch (_) {}

    let translated = await browserTranslatorText(text, lang);
    if (!translated) translated = await publicTranslatorText(text, lang);
    if (!translated) return text;

    try { localStorage.setItem(cacheKey, translated); } catch (_) {}
    return translated;
  }

  const CRITICAL_KEYS = [
    'access_portal','access_kicker','access_title','access_desc','your_name','name_placeholder',
    'start_experience','country_detected','registration_required','name_required','real_name_required','ready',
    'feature_streaming','feature_ai','feature_catalog','feature_support',
    'payment_title','payment_note','checkout_title','select_payment','continue_whatsapp','purchase_effect_tag','purchase_effect_title','purchase_effect_text','purchase_recent_small','purchase_recent_title','purchase_recent_action',
    'payment_ready','payment_data','pay_with','payment_choose','payment_base_amount',
    'payment_local_amount','payment_method_help','checkout_note','whatsapp_language_note','accept_terms','terms_required','customer_language','chat_open','chat_community','chat_title','chat_safety','chat_empty','chat_placeholder','chat_send','chat_registration_required','chat_private_contact','chat_slow_down','chat_send_error','chat_as','game_open','game_title','game_explain','game_start','game_player','game_score','game_best','game_time','game_ready','game_ready_hint','game_combo','game_restart','game_finished','game_new_record','social_worldwide','social_not_country','social_notice_title','social_metrics_title','social_details_note','social_worldwide_notice'
  ];

  async function hydrateCriticalTranslations(lang){
    const target = normalizeLanguageCode(lang);
    if (target === 'es') return;
    RUNTIME_I18N[target] ||= {};
    const source = I18N.es;
    const missing = CRITICAL_KEYS.filter(key => !RUNTIME_I18N[target][key] && !(I18N[target] && I18N[target][key]));
    // Limit concurrency to avoid hammering public translation services.
    for (const key of missing) {
      const sourceText = source[key];
      if (!sourceText) continue;
      const translated = await translateTextGlobal(sourceText, target);
      if (translated) RUNTIME_I18N[target][key] = translated;
    }
  }

  function browserLanguage(){
    const raw = String((navigator.languages && navigator.languages[0]) || navigator.language || 'es');
    return normalizeLanguageCode(raw);
  }

  function localeForLanguage(lang){
    const known = ({es:'es-PE',en:'en-US',pt:'pt-BR',fr:'fr-FR',de:'de-DE',it:'it-IT',vi:'vi-VN',ru:'ru-RU',tr:'tr-TR',ar:'ar-SA',zh:'zh-CN',ja:'ja-JP',ko:'ko-KR',hi:'hi-IN',id:'id-ID',th:'th-TH',nl:'nl-NL',pl:'pl-PL',fa:'fa-IR',ur:'ur-PK',he:'he-IL',sw:'sw-KE',ms:'ms-MY',fil:'fil-PH'});
    return known[lang] || lang || 'en-US';
  }

  function t(key){
    return (RUNTIME_I18N[activeLanguage] && RUNTIME_I18N[activeLanguage][key])
      || (I18N[activeLanguage] && I18N[activeLanguage][key])
      || I18N.en[key]
      || I18N.es[key]
      || key;
  }

  function applyLanguageUi(){
    document.documentElement.lang = activeLanguage;
    document.documentElement.dir = RTL_LANGUAGES.has(activeLanguage) ? 'rtl' : 'ltr';

    if (accessLanguageValue) accessLanguageValue.textContent = nativeLanguageName(activeLanguage);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value=t(el.dataset.i18n);
      if(value) el.textContent=value;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const value=t(el.dataset.i18nPlaceholder);
      if(value) el.placeholder=value;
    });

    const accessPortalLabel=document.getElementById('accessPortalLabel'); if(accessPortalLabel) accessPortalLabel.textContent=t('access_portal');
    const accessKicker=document.getElementById('accessKicker'); if(accessKicker) accessKicker.textContent=t('access_kicker');
    const accessTitle=document.getElementById('accessTitle'); if(accessTitle) accessTitle.textContent=t('access_title');
    const accessDescription=document.getElementById('accessDescription'); if(accessDescription) accessDescription.textContent=t('access_desc');
    const accessNameLabel=document.getElementById('accessNameLabel'); if(accessNameLabel) accessNameLabel.textContent=t('your_name');
    const accessAliasMain=document.getElementById('accessAlias'); if(accessAliasMain) accessAliasMain.placeholder=t('name_placeholder');
    const accessReadyLabel=document.getElementById('accessReadyLabel'); if(accessReadyLabel) accessReadyLabel.textContent=t('ready');
    const accessEnterText=document.getElementById('accessEnterText'); if(accessEnterText) accessEnterText.textContent=t('start_experience');
    const accessCountryLabel=document.getElementById('accessCountryLabel'); if(accessCountryLabel) accessCountryLabel.textContent=t('country_detected');
    const accessStatus=document.getElementById('accessStatus');
    if(accessStatus && !accessStatus.textContent.includes('·')) accessStatus.textContent=t('registration_required');

    const heroLead=document.getElementById('heroLead'); if(heroLead) heroLead.textContent=t('hero_lead');
    const heroCatalogButton=document.getElementById('heroCatalogButton'); if(heroCatalogButton) heroCatalogButton.textContent=t('enter_catalog');
    const heroTalkButton=document.getElementById('heroTalkButton'); if(heroTalkButton) heroTalkButton.textContent=t('talk_alex');

    document.querySelectorAll('.plan-selector label').forEach(el => el.textContent=t('choose_plan'));
    document.querySelectorAll('.price-wrap > span').forEach(el => el.textContent=t('from'));
    document.querySelectorAll('.details-btn').forEach(el => el.textContent=t('details'));
    document.querySelectorAll('.buy-btn').forEach(el => { el.innerHTML=`${t('buy')} <b>↗</b>`; });
    document.querySelectorAll('.social-order-btn').forEach(el => { el.innerHTML=`${t('quote')} <b>↗</b>`; });
    document.querySelectorAll('.availability').forEach(el => {
      const dot=el.querySelector('i');
      el.textContent='';
      if(dot) el.appendChild(dot);
      el.append(document.createTextNode(' '+t('online')));
    });

    const summaryLabels = document.querySelectorAll('#checkoutModal .order-summary > div > span');
    if(summaryLabels[0]) summaryLabels[0].textContent=t('product');
    if(summaryLabels[1]) summaryLabels[1].textContent=t('plan');
    if(summaryLabels[2]) summaryLabels[2].textContent=t('total');

    const safety=document.getElementById('checkoutSafetyNote'); if(safety) safety.textContent=t('checkout_note');
    if (paymentInstructionTitle && !selectedPayment) paymentInstructionTitle.textContent=t('payment_data');
    if (paymentInstructionText && !selectedPayment) paymentInstructionText.textContent=t('payment_choose');

    refreshAllPriceLabels();
  }

  function setLanguage(lang, manual=false, skipHydrate=false){
    const next = lang === 'auto' ? browserLanguage() : normalizeLanguageCode(lang);
    activeLanguage = next;
    translationManual = manual || translationManual;
    if (languageSelect) {
      if (manual && [...languageSelect.options].some(o=>o.value===next)) languageSelect.value=next;
      else if (!manual) languageSelect.value='auto';
    }
    applyLanguageUi();

    if (!skipHydrate) {
      hydrateCriticalTranslations(next).then(() => {
        if (activeLanguage !== next) return;
        applyLanguageUi();
        localizePaymentCards();
        if (selectedPayment) {
          const selectedButton = paymentButtons.find(b => b.dataset.method === selectedPayment);
          if (selectedButton) renderPaymentInstructions(selectedButton);
        }
      }).catch(()=>{});
    }
    if (next !== 'es') translateProductCopyOnSupportedChrome(next);
  }

  window.ALEX_GLOBAL_LOCALE = {
    t: (key) => t(key),
    language: () => activeLanguage,
    locale: () => localeForLanguage(activeLanguage),
    translateText: (text) => translateTextGlobal(text, activeLanguage)
  };

  function currencyForCountry(code){ return COUNTRY_CURRENCY[String(code||'').toUpperCase()] || 'USD'; }

  function formatMoney(amount, currency=activeCurrency){
    const value = Number(amount);
    if (!Number.isFinite(value)) return '';
    const locale = localeForLanguage(activeLanguage);
    try { return new Intl.NumberFormat(locale,{style:'currency',currency,maximumFractionDigits:['JPY','KRW','VND','CLP','PYG'].includes(currency)?0:2}).format(value); }
    catch (_) { return `${currency} ${value.toFixed(2)}`; }
  }

  async function loadRate(target){
    if (target === BASE_CURRENCY) return 1;
    const cacheKey = `alex-fx-${BASE_CURRENCY}-${target}`;
    try {
      const saved = JSON.parse(localStorage.getItem(cacheKey)||'null');
      if (saved && Date.now()-saved.time < 6*60*60*1000 && Number(saved.rate)>0) return Number(saved.rate);
    } catch (_) {}

    // Fuente principal: Frankfurter v2 (tasas recientes, sin API key).
    try {
      const response = await fetch(`https://api.frankfurter.dev/v2/rate/${encodeURIComponent(BASE_CURRENCY)}/${encodeURIComponent(target)}`, {cache:'no-store'});
      if (!response.ok) throw new Error('fx');
      const data = await response.json();
      let rate = Number(data?.rate);
      if (!(rate>0) && Array.isArray(data)) rate = Number(data[0]?.rate);
      if (!(rate>0)) throw new Error('fx');
      try { localStorage.setItem(cacheKey, JSON.stringify({rate,time:Date.now(),source:'frankfurter'})); } catch (_) {}
      return rate;
    } catch (_) {}

    // Respaldo para monedas no cubiertas temporalmente por la fuente principal.
    try {
      const response = await fetch('https://open.er-api.com/v6/latest/USD',{cache:'no-store'});
      if (!response.ok) throw new Error('fx');
      const data = await response.json();
      const pen = Number(data?.rates?.PEN);
      const out = Number(data?.rates?.[target]);
      if (!(pen>0) || !(out>0)) throw new Error('fx');
      const rate = out/pen;
      try { localStorage.setItem(cacheKey, JSON.stringify({rate,time:Date.now(),source:'fallback'})); } catch (_) {}
      return rate;
    } catch (_) { return null; }
  }

  async function loadRateBetween(sourceCurrency, targetCurrency){
    const source = String(sourceCurrency || BASE_CURRENCY).toUpperCase();
    const target = String(targetCurrency || activeCurrency).toUpperCase();

    if (source === target) return 1;
    if (source === BASE_CURRENCY) return loadRate(target);

    const cacheKey = `alex-fx-pair-${source}-${target}`;
    try {
      const saved = JSON.parse(localStorage.getItem(cacheKey) || 'null');
      if (saved && Date.now() - saved.time < 6*60*60*1000 && Number(saved.rate) > 0) {
        return Number(saved.rate);
      }
    } catch (_) {}

    // Principal: Frankfurter, usando directamente moneda origen -> moneda destino.
    try {
      const response = await fetch(
        `https://api.frankfurter.dev/v2/rate/${encodeURIComponent(source)}/${encodeURIComponent(target)}`,
        {cache:'no-store'}
      );
      if (!response.ok) throw new Error('fx');
      const data = await response.json();
      let rate = Number(data?.rate);
      if (!(rate > 0) && Array.isArray(data)) rate = Number(data[0]?.rate);
      if (!(rate > 0)) throw new Error('fx');
      try {
        localStorage.setItem(cacheKey, JSON.stringify({rate,time:Date.now(),source:'frankfurter'}));
      } catch (_) {}
      return rate;
    } catch (_) {}

    // Respaldo: todas las tasas respecto a USD y cálculo cruzado.
    try {
      const response = await fetch('https://open.er-api.com/v6/latest/USD', {cache:'no-store'});
      if (!response.ok) throw new Error('fx');
      const data = await response.json();
      const rates = data?.rates || {};
      const sourceRate = source === 'USD' ? 1 : Number(rates[source]);
      const targetRate = target === 'USD' ? 1 : Number(rates[target]);
      if (!(sourceRate > 0) || !(targetRate > 0)) throw new Error('fx');
      const rate = targetRate / sourceRate;
      try {
        localStorage.setItem(cacheKey, JSON.stringify({rate,time:Date.now(),source:'fallback'}));
      } catch (_) {}
      return rate;
    } catch (_) {
      return null;
    }
  }

  async function setCurrency(code, manual=false){
    const next = String(code||BASE_CURRENCY).toUpperCase();
    if (currencySelect && ![...currencySelect.options].some(o=>o.value===next)) {
      const option=document.createElement('option'); option.value=next; option.textContent=next; currencySelect.appendChild(option);
    }
    const rate = await loadRate(next);
    if (rate == null) {
      activeCurrency = BASE_CURRENCY; currencyRate = 1;
      if (currencySelect) currencySelect.value=BASE_CURRENCY;
    } else {
      activeCurrency = next; currencyRate = rate;
      if (currencySelect) currencySelect.value=next;
    }
    if (manual) currencyManual=true;
    if (accessCurrencyValue) accessCurrencyValue.textContent = activeCurrency === 'PEN' ? 'PEN · S/' : activeCurrency;
    await refreshAllPriceLabels();
  }

  function localPriceFromBase(base){ return Number(base) * currencyRate; }

  function priceLabelFromBase(base){
    if (base === '' || base == null || !Number.isFinite(Number(base))) return '';
    return formatMoney(localPriceFromBase(Number(base)), activeCurrency);
  }

  async function priceLabelFromSource(base, sourceCurrency){
    if (base === '' || base == null || !Number.isFinite(Number(base))) return '';
    const source = String(sourceCurrency || BASE_CURRENCY).toUpperCase();

    if (source === BASE_CURRENCY) {
      return priceLabelFromBase(base);
    }

    const rate = await loadRateBetween(source, activeCurrency);
    if (!(Number(rate) > 0)) {
      // Si temporalmente falla la tasa, conserva el precio original en su moneda.
      return formatMoney(Number(base), source);
    }

    return formatMoney(Number(base) * Number(rate), activeCurrency);
  }

  async function refreshAllPriceLabels(){
    const selects = [...document.querySelectorAll('.plan-select')];

    // Cargar una sola vez la tasa para cada moneda origen usada en el catálogo.
    const sourceCurrencies = [...new Set(
      selects.flatMap(select =>
        [...select.options]
          .filter(option => option.dataset.basePrice !== '')
          .map(option => String(option.dataset.sourceCurrency || BASE_CURRENCY).toUpperCase())
      )
    )];

    const rateMap = new Map();
    await Promise.all(sourceCurrencies.map(async source => {
      if (source === BASE_CURRENCY) {
        rateMap.set(source, currencyRate);
      } else if (source === activeCurrency) {
        rateMap.set(source, 1);
      } else {
        rateMap.set(source, await loadRateBetween(source, activeCurrency));
      }
    }));

    selects.forEach(select => {
      [...select.options].forEach(option => {
        const base = option.dataset.basePrice ?? option.dataset.price;
        const planName = option.dataset.planName || option.textContent.split('·')[0].trim();
        const sourceCurrency = String(option.dataset.sourceCurrency || BASE_CURRENCY).toUpperCase();

        option.dataset.planName = planName;

        if (base === '' || base == null || !Number.isFinite(Number(base))) {
          option.dataset.priceLabel = '';
          option.textContent = planName;
          return;
        }

        const rate = rateMap.get(sourceCurrency);
        let label = '';

        if (sourceCurrency === BASE_CURRENCY) {
          label = formatMoney(Number(base) * currencyRate, activeCurrency);
        } else if (sourceCurrency === activeCurrency) {
          label = formatMoney(Number(base), activeCurrency);
        } else if (Number(rate) > 0) {
          label = formatMoney(Number(base) * Number(rate), activeCurrency);
        } else {
          label = formatMoney(Number(base), sourceCurrency);
        }

        option.dataset.priceLabel = label;
        option.textContent = `${planName} · ${label}`;
      });

      const card = select.closest('.product-card');
      const option = select.options[select.selectedIndex];
      const priceWrap = card?.querySelector('.price-wrap');
      const strong = priceWrap?.querySelector('strong');
      const label = option?.dataset.priceLabel || '';

      if (priceWrap) priceWrap.hidden = !label;
      if (strong) strong.textContent = label;
    });

    if (selectedOrder && modalPrice) {
      const selectedCard = document.querySelector(
        `.product-card[data-product-id="${CSS.escape(selectedOrder.productId || '')}"]`
      );
      const selectedOption = selectedCard?.querySelector('.plan-select')?.selectedOptions?.[0];
      const currentLabel = selectedOption?.dataset.priceLabel || selectedOrder.priceLabel || '';

      selectedOrder.priceLabel = currentLabel;
      modalPrice.textContent = currentLabel || (activeLanguage === 'es' ? 'POR CONFIRMAR' : t('consult'));
    }
  }

  function autoLocaleFromCountry(code){
    if (!currencyManual) setCurrency(currencyForCountry(code), false);
  }

  async function translateProductCopyOnSupportedChrome(targetLang, allowDownload=false){
    if (targetLang==='es' || !('Translator' in self)) return;
    try {
      const options={sourceLanguage:'es',targetLanguage:targetLang};
      const availability=await Translator.availability(options);
      if (availability==='unavailable') return;
      if (availability==='downloadable' && !allowDownload) return;
      if (!chromeTranslator || chromeTranslator.targetLanguage!==targetLang) {
        chromeTranslator=await Translator.create({
          ...options,
          monitor(m){ m.addEventListener('downloadprogress',()=>{}); }
        });
      }
      const nodes=[...document.querySelectorAll('.product-card .description')].slice(0,60);
      for (const node of nodes) {
        if (!node.dataset.originalText) node.dataset.originalText=node.textContent.trim();
        if (!node.dataset.originalText) continue;
        try { node.textContent=await chromeTranslator.translate(node.dataset.originalText); } catch (_) {}
      }
    } catch (_) {}
  }


  populateGlobalLanguageSelector();
  populateGlobalCurrencySelector();

  if (languageSelect) languageSelect.addEventListener('change', async ()=>{
    setLanguage(languageSelect.value,true);
    translateProductCopyOnSupportedChrome(activeLanguage,true);
    if (detailsProduct && detailsModal?.classList.contains('open')) {
      const translated = await translateProductDetails(detailsProduct, activeLanguage);
      if (detailsProduct && detailsModal?.classList.contains('open')) {
        renderDetailsTranslated(detailsProduct, translated);
      }
    }
  });
  if (currencySelect) currencySelect.addEventListener('change',()=>setCurrency(currencySelect.value,true));
  setLanguage('auto', false);
  localizePaymentCards();
  setCurrency(BASE_CURRENCY, false);

  function updateClock(){
    const now = new Date();
    clock && (clock.textContent = now.toLocaleTimeString('es-PE', {hour12:false}));
  }
  updateClock();
  setInterval(updateClock, 1000);

  // Entrada Premium Access: robusta y con cierre forzado.
  // Ningún fallo de red, país, audio o animación puede dejar la pantalla bloqueada.
  let epicFinished = false;
  let epicStarted = false;
  let epicWatchdog = null;

  function forceRemoveEpicEntry(){
    if (!epicEntry) return;
    try {
      document.body.classList.remove('access-locked');
      epicEntry.classList.add('exit');
      epicEntry.style.pointerEvents = 'none';
    } catch (_) {}

    setTimeout(() => {
      try { epicEntry.remove(); } catch (_) {}
    }, 500);
  }

  function finishEpicEntry(){
    if (!epicEntry || epicFinished) return;

    epicFinished = true;

    if (epicWatchdog) {
      clearTimeout(epicWatchdog);
      epicWatchdog = null;
    }

    try {
      const name = String(epicWelcomeName?.textContent || 'USUARIO').toUpperCase();

      if (entryProgressBar) {
        entryProgressBar.style.setProperty('width', '100%', 'important');
        entryProgressBar.classList.add('ready');
      }
      if (entryProgressText) entryProgressText.textContent = '100%';

      if (entryStatusText) {
        entryStatusText.textContent = `BIENVENIDO · ${name}`;
      }

      epicEntry.classList.add('progress-complete');

      if (epicWelcomePhrase) {
        epicWelcomePhrase.textContent = `${name}, YA PUEDES ENTRAR A TU PANEL`;
      }
    } catch (_) {}

    setTimeout(forceRemoveEpicEntry, 1100);
    setTimeout(() => {
      try {
        const finalName = String(loadAlias() || epicWelcomeName?.textContent || 'USUARIO').trim();
        showRegisteredWelcome(finalName);
        sessionStorage.removeItem('alex-welcome-pending');
      } catch (_) {}
    }, 1300);
  }

  function startEpicEntry(event){
    if (!epicEntry || epicStarted) return;

    epicStarted = true;

    // Seguridad máxima: aun si ocurre un error, la intro se quita sola.
    epicWatchdog = setTimeout(() => {
      epicFinished = true;
      forceRemoveEpicEntry();
    }, 4500);

    try {
      const registeredName = String(
        event?.detail?.alias
        || loadAlias()
        || 'USUARIO'
      ).trim();

      const countryValue = document.getElementById('accessCountryValue');
      const countryText = String(
        countryValue?.textContent
        || currentVisitorCountry?.textContent
        || 'CONEXIÓN ACTIVA'
      ).trim();

      if (epicWelcomeName) {
        epicWelcomeName.textContent = registeredName.toUpperCase();
      }

      if (epicWelcomePhrase) {
        epicWelcomePhrase.textContent = `${registeredName.toUpperCase()}, TU ACCESO PERSONAL ESTÁ LISTO`;
      }

      if (epicWelcomeCountry) {
        epicWelcomeCountry.textContent =
          countryText && !/DETECTANDO/i.test(countryText)
            ? countryText.toUpperCase()
            : '🌐 CONEXIÓN ACTIVA';
      }

      document.body.classList.remove('access-locked');
      epicEntry.style.opacity = '';
      epicEntry.style.visibility = '';
      epicEntry.style.pointerEvents = 'auto';
      epicEntry.classList.add('welcome-active');

      const reduceMotion =
        window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches === true;

      const duration = reduceMotion ? 250 : 2400;
      const started = performance.now();

      const tick = (now) => {
        if (epicFinished || !epicEntry?.isConnected) return;

        const p = Math.min(
          99,
          Math.floor((Math.max(0, now - started) / duration) * 100)
        );

        try {
          if (entryProgressBar) {
            entryProgressBar.style.setProperty('width', `${p}%`, 'important');
          }
          if (entryProgressText) entryProgressText.textContent = `${p}%`;

          const name = String(epicWelcomeName?.textContent || 'USUARIO').toUpperCase();

          if (entryStatusText) {
            if (p < 25) entryStatusText.textContent = 'INICIALIZANDO TU ACCESO';
            else if (p < 55) entryStatusText.textContent = 'SINCRONIZANDO TU EXPERIENCIA';
            else if (p < 82) entryStatusText.textContent = 'VERIFICANDO TU CUENTA';
            else if (p < 100) entryStatusText.textContent = 'PREPARANDO TU PANEL';
            else entryStatusText.textContent = `BIENVENIDO · ${name}`;
          }
        } catch (_) {}

        if (p < 99) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);

      setTimeout(finishEpicEntry, reduceMotion ? 650 : 3000);

      // Aparece por si el usuario desea saltar la animación.
      setTimeout(() => {
        try { epicSkipButton?.classList.add('visible'); } catch (_) {}
      }, 800);

    } catch (_) {
      // Fallback: si algo falla, abrir el sitio casi de inmediato.
      setTimeout(finishEpicEntry, 150);
    }
  }

  epicSkipButton?.addEventListener('click', finishEpicEntry);
  window.addEventListener('alex:access-granted', startEpicEntry, {once:true});


  function countryFlag(code){
    const value = String(code || '').toUpperCase();
    if (!/^[A-Z]{2}$/.test(value)) return '🌐';
    return String.fromCodePoint(...[...value].map(char => 127397 + char.charCodeAt(0)));
  }

  function countryNameFromCode(code){
    const value = String(code || '').toUpperCase();
    if (!/^[A-Z]{2}$/.test(value)) return '';
    try { return new Intl.DisplayNames([localeForLanguage(activeLanguage)], {type:'region'}).of(value) || value; }
    catch (_) { return value; }
  }

  function safeCountry(country, code){
    let value = String(country || '').trim();
    if (/^[A-Za-z]{2}$/.test(value)) value = countryNameFromCode(value);
    if (!value && code) value = countryNameFromCode(code);
    return (value || (activeLanguage === 'es' ? 'País no disponible' : 'Country unavailable')).slice(0, 80);
  }

  function safeVisitorName(name){
    const value = String(name || '').replace(/\s+/g, ' ').trim().slice(0, 40);
    return value || 'Visitante';
  }

  function updateCountryUI(country, code, source='ip'){
    const resolved = safeCountry(country, code);
    const label = `${countryFlag(code)} ${resolved}`;
    if (currentVisitorCountry) currentVisitorCountry.textContent = label.toUpperCase();
    if (entryCountry) {
      entryCountry.dataset.geo = resolved === 'País no disponible' ? 'error' : (source === 'locale' ? 'fallback' : 'ok');
      const span = entryCountry.querySelector('span');
      if (span) { const prefix = activeLanguage === 'es' ? 'CONEXIÓN DESDE' : 'CONNECTED FROM'; const suffix = source === 'locale' ? (activeLanguage === 'es' ? ' · REGIÓN DEL DISPOSITIVO' : ' · DEVICE REGION') : ''; span.textContent = `${prefix} ${label.toUpperCase()}${suffix}`; }
    }
    if (accessCountryValueMain) accessCountryValueMain.textContent = label.toUpperCase();
    if (accessCountryLineMain) accessCountryLineMain.dataset.geo = resolved === 'País no disponible' ? 'error' : (source === 'locale' ? 'fallback' : 'ok');
    if (code) autoLocaleFromCountry(code);
  }

  function renderVisitorFeed(events){
    if (!visitorFeedMini) return;
    visitorFeedMini.textContent = '';
    const latest = [...(events || [])].reverse().slice(0, 5);
    if (!latest.length) {
      const empty = document.createElement('span');
      empty.className = 'visitor-feed-empty';
      empty.textContent = 'Esperando conexiones...';
      visitorFeedMini.appendChild(empty);
      return;
    }
    latest.forEach(event => {
      const item = document.createElement('span');
      item.className = 'visitor-feed-item';
      const flag = countryFlag(event.country_code);
      const name = document.createElement('span');
      name.className = 'vid';
      name.textContent = safeVisitorName(event.visitor_name);
      const dot = document.createElement('span');
      dot.textContent = '·';
      const country = document.createElement('span');
      country.className = 'country';
      country.textContent = `${flag} ${safeCountry(event.country, event.country_code)}`;
      item.append(name, dot, country);
      visitorFeedMini.appendChild(item);
    });
  }

  let visitorToastTimer = null;
  function showVisitorToast(event){
    if (!visitorToast || !visitorToastText || !event) return;

    const name = safeVisitorName(event.visitor_name);
    const flag = countryFlag(event.country_code);
    const country = safeCountry(event.country, event.country_code);

    visitorToastText.textContent =
      `${name} terminó de registrarse${country && country !== 'País no disponible' ? ` · ${flag} ${country}` : ''}`;

    visitorToast.hidden = false;
    visitorToast.style.display = 'flex';
    visitorToast.classList.remove('show');
    void visitorToast.offsetWidth;
    visitorToast.classList.add('show');

    clearTimeout(visitorToastTimer);
    visitorToastTimer = setTimeout(() => visitorToast.classList.remove('show'), 5200);
  }

  function localeCountryFallback(){
    const langs = [...(navigator.languages || []), navigator.language].filter(Boolean);
    for (const lang of langs) {
      const match = String(lang).match(/[-_]([A-Za-z]{2})\b/);
      if (match) {
        const code = match[1].toUpperCase();
        return {country:countryNameFromCode(code), country_code:code, source:'locale'};
      }
    }
    return {country:'País no disponible', country_code:'', source:'none'};
  }

  async function fetchGeoProvider(url, parser){
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 2800);
    try {
      const response = await fetch(url, {cache:'no-store', mode:'cors', signal:controller.signal});
      if (!response.ok) throw new Error('geo');
      const data = await response.json();
      return parser(data);
    } finally { clearTimeout(timer); }
  }

  async function detectCountryFallback(){
    const providers = [
      ['https://ipwho.is/', d => d?.success === false ? null : ({country:d.country, country_code:d.country_code, source:'ip'})],
      ['https://ipapi.co/json/', d => ({country:d.country_name, country_code:d.country_code, source:'ip'})],
      ['https://api.country.is/', d => ({country:countryNameFromCode(d.country), country_code:d.country, source:'ip'})]
    ];
    for (const [url, parser] of providers) {
      try {
        const geo = await fetchGeoProvider(url, parser);
        if (geo?.country || geo?.country_code) return geo;
      } catch (_) {}
    }
    return localeCountryFallback();
  }

  let cachedGeo = window.ALEX_PREVIEW_MODE
    ? {country:'Perú', country_code:'PE', source:'preview'}
    : null;

  async function primeCountry(){
    if (cachedGeo) {
      try { updateCountryUI(cachedGeo.country, cachedGeo.country_code, cachedGeo.source); } catch (_) {}
      return cachedGeo;
    }
    try {
      cachedGeo = await detectCountryFallback();
    } catch (_) {
      cachedGeo = localeCountryFallback();
    }
    try { updateCountryUI(cachedGeo.country, cachedGeo.country_code, cachedGeo.source); } catch (_) {}
    return cachedGeo;
  }

  async function registerPresence(displayName=''){
    const fallback = cachedGeo || await primeCountry();
    updateCountryUI(fallback.country, fallback.country_code, fallback.source);

    if (location.protocol === 'file:' || location.protocol === 'content:') {
      if (visitorSessionLabel) visitorSessionLabel.textContent = safeVisitorName(displayName).toUpperCase();
      return fallback;
    }

    const url = window.ALEX_STORE?.presenceUrl || '/api/presence';
    try {
      const response = await fetch(url, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          name:safeVisitorName(displayName),
          country:fallback.country,
          country_code:fallback.country_code,
          share_identity:Boolean(document.getElementById('shareLiveIdentity')?.checked)
        }),
        cache:'no-store'
      });
      if (!response.ok) throw new Error('presence');
      const data = await response.json();
      const source = (data.country && data.country !== 'País no disponible') ? 'ip' : fallback.source;
      updateCountryUI(data.country || fallback.country, data.country_code || fallback.country_code, source);
      if (liveVisitorTicker) {
        const cc = data.country_code || fallback.country_code;
        const cn = safeCountry(data.country || fallback.country, cc);
        liveVisitorTicker.textContent = `${safeVisitorName(data.name || displayName).toUpperCase()} · ${countryFlag(cc)} ${cn.toUpperCase()}`;
      }
      renderVisitorFeed(data.feed || []);
      lastVisitorEventId = Number(data.latest_id || 0);
      if (data.event) {
        if (visitorSessionLabel) visitorSessionLabel.textContent = safeVisitorName(data.name || displayName).toUpperCase();
        showVisitorToast(data.event);
      } else if (visitorSessionLabel) {
        visitorSessionLabel.textContent = safeVisitorName(data.name || displayName).toUpperCase();
      }
      if (data.stats?.visitors != null && visitorCount) visitorCount.textContent = Number(data.stats.visitors).toLocaleString('es-PE');
      return data;
    } catch (_) {
      if (visitorSessionLabel) visitorSessionLabel.textContent = safeVisitorName(displayName).toUpperCase();
      return fallback;
    }
  }

  async function pollVisitorFeed(){
    if (location.protocol === 'file:' || location.protocol === 'content:') return;
    const url = window.ALEX_STORE?.visitorFeedUrl || '/api/visitor-feed';
    try {
      const response = await fetch(`${url}?after=${encodeURIComponent(lastVisitorEventId)}`, {cache:'no-store'});
      if (!response.ok) return;
      const data = await response.json();
      const events = data.events || [];
      if (events.length) {
        lastVisitorEventId = Number(data.latest_id || lastVisitorEventId);
        const newest = events[events.length - 1];
        showVisitorToast(newest);
        // Mantiene visible el país del visitante actual; solo muestra un aviso del nuevo visitante.
        // Solicita el feed completo para mostrar también los últimos países.
        const full = await fetch(`${url}?after=0`, {cache:'no-store'});
        if (full.ok) {
          const fullData = await full.json();
          renderVisitorFeed((fullData.events || []).slice(-6));
        }
      }
    } catch (_) {}
  }

  primeCountry().catch(() => {});
  window.addEventListener('alex:access-granted', (event) => {
    const alias = event?.detail?.alias || localStorage.getItem('alex-alias') || '';
    registerPresence(alias);
  }, {once:true});
  setInterval(pollVisitorFeed, 12000);

  async function refreshStats(){
    const url = window.ALEX_STORE?.statsUrl || '/api/stats';
    try {
      const response = await fetch(url, { cache: 'no-store' });
      if (!response.ok) return;
      const data = await response.json();
      if (visitorCount && Number.isFinite(Number(data.visitors))) visitorCount.textContent = Number(data.visitors).toLocaleString('es-PE');
      if (orderCount && Number.isFinite(Number(data.orders))) orderCount.textContent = Number(data.orders).toLocaleString('es-PE');
      if (livePageViews && Number.isFinite(Number(data.page_views))) livePageViews.textContent = Number(data.page_views).toLocaleString('es-PE');
      if (liveOnlineUsers && Number.isFinite(Number(data.online))) liveOnlineUsers.textContent = Number(data.online).toLocaleString('es-PE');
    } catch (_) {
      // La vista previa en archivo local no tiene API; simplemente conserva los valores iniciales.
    }
  }
  refreshStats();
  setInterval(refreshStats, 5000);


  function applyRealtimeStats(data){
    if (!data) return;
    if (visitorCount && Number.isFinite(Number(data.visitors))) {
      visitorCount.textContent = Number(data.visitors).toLocaleString('es-PE');
    }
    if (orderCount && Number.isFinite(Number(data.orders))) {
      orderCount.textContent = Number(data.orders).toLocaleString('es-PE');
    }
    if (livePageViews && Number.isFinite(Number(data.page_views))) {
      livePageViews.textContent = Number(data.page_views).toLocaleString('es-PE');
    }
    if (liveOnlineUsers && Number.isFinite(Number(data.online))) {
      liveOnlineUsers.textContent = Number(data.online).toLocaleString('es-PE');
    }
  }

  async function registerRealPageView(){
    if (window.ALEX_PREVIEW_MODE) return;
    const url = window.ALEX_STORE?.pageViewUrl || '/api/page-view';
    try {
      const response = await fetch(url, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:'{}',
        cache:'no-store',
        keepalive:true
      });
      if (!response.ok) return;
      applyRealtimeStats(await response.json());
    } catch (_) {}
  }

  async function sendPresenceHeartbeat(){
    if (window.ALEX_PREVIEW_MODE || document.visibilityState === 'hidden') return;
    const url = window.ALEX_STORE?.heartbeatUrl || '/api/heartbeat';
    try {
      const response = await fetch(url, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:'{}',
        cache:'no-store',
        keepalive:true
      });
      if (!response.ok) return;
      applyRealtimeStats(await response.json());
    } catch (_) {}
  }

  registerRealPageView();
  sendPresenceHeartbeat();
  setInterval(sendPresenceHeartbeat, 15000);

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') sendPresenceHeartbeat();
  });


  function liveActivityLabel(item){
    const product = String(item?.product_name || '').trim();
    if (item?.action === 'view_product' && product) return `está viendo ${product}`;
    if (item?.action === 'checkout' && product) return `está por comprar ${product}`;
    if (item?.action === 'order' && product) return `${t('purchase_recent_action')} ${product}`;
    return 'está explorando el catálogo';
  }

  function renderLiveActivity(items){
    if (!liveActivityList) return;
    liveActivityList.textContent = '';

    const rows = Array.isArray(items) ? items.slice(0, 16) : [];

    if (!rows.length) {
      const empty = document.createElement('div');
      empty.className = 'live-activity-empty';
      empty.textContent = 'Esperando actividad en vivo...';
      liveActivityList.appendChild(empty);
      return;
    }

    rows.forEach(item => {
      const card = document.createElement('div');
      card.className = `live-activity-item action-${item.action || 'browsing'}`;

      const avatar = document.createElement('span');
      avatar.className = 'live-activity-avatar';
      avatar.textContent = item.share_identity && item.country_code
        ? countryFlag(item.country_code)
        : '●';

      const copy = document.createElement('span');
      copy.className = 'live-activity-copy';

      const name = document.createElement('strong');
      name.textContent = item.name || 'Visitante';

      const action = document.createElement('small');
      action.textContent = liveActivityLabel(item);

      copy.append(name, action);
      card.append(avatar, copy);

      if (item.action === 'checkout' || item.action === 'order') {
        const tag = document.createElement('b');
        tag.className = 'live-buy-tag';
        tag.textContent = item.action === 'order' ? 'PEDIDO' : 'COMPRA';
        card.appendChild(tag);
      }

      liveActivityList.appendChild(card);
    });
  }

  async function pollLiveActivity(){
    if (window.ALEX_PREVIEW_MODE) return;

    const url = window.ALEX_STORE?.liveActivityUrl || '/api/live-activity';

    try {
      const response = await fetch(url, {cache:'no-store'});
      if (!response.ok) return;

      const data = await response.json();
      renderLiveActivity(data.activity || []);
      applyRealtimeStats(data.stats || {});

      if (activityPageViews && data.stats?.page_views != null) {
        activityPageViews.textContent = Number(data.stats.page_views).toLocaleString('es-PE');
      }

      if (activityOnlineUsers && data.stats?.online != null) {
        activityOnlineUsers.textContent = Number(data.stats.online).toLocaleString('es-PE');
      }
    } catch (_) {}
  }

  let lastLiveActivityKey = '';
  let liveActivityTimer = null;

  async function setLiveActivity(action, productId='', productName=''){
    if (window.ALEX_PREVIEW_MODE) return;

    const key = `${action}|${productId}|${productName}`;
    if (key === lastLiveActivityKey) return;

    lastLiveActivityKey = key;

    const url = window.ALEX_STORE?.liveActivityUrl || '/api/live-activity';

    try {
      const response = await fetch(url, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          action,
          product_id:productId || '',
          product_name:productName || ''
        }),
        cache:'no-store',
        keepalive:true
      });

      if (!response.ok) return;

      const data = await response.json();
      renderLiveActivity(data.activity || []);
      applyRealtimeStats(data.stats || {});
    } catch (_) {}
  }

  const productRatios = new Map();

  if ('IntersectionObserver' in window) {
    const productObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        productRatios.set(entry.target, entry.intersectionRatio || 0);
      });

      let bestCard = null;
      let bestRatio = 0;

      productRatios.forEach((ratio, card) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestCard = card;
        }
      });

      clearTimeout(liveActivityTimer);

      liveActivityTimer = setTimeout(() => {
        if (bestCard && bestRatio >= .55) {
          const name = bestCard.querySelector('.product-copy h3')?.textContent?.trim() || '';
          setLiveActivity('view_product', bestCard.dataset.productId || '', name);
        } else {
          setLiveActivity('browsing');
        }
      }, 650);
    }, {threshold:[0,.25,.55,.75,1]});

    cards.forEach(card => productObserver.observe(card));
  }

  pollLiveActivity();
  setInterval(pollLiveActivity, 3000);

  async function trackAnalyticsEvent(eventType, payload = {}){
    const url = window.ALEX_STORE?.trackEventUrl || '/api/track-event';
    try {
      await fetch(url, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({event_type:eventType, ...payload}),
        cache: 'no-store'
      });
    } catch (_) {}
  }


  const seenPurchaseIds = new Set();
  const purchaseQueue = [];
  let purchaseToastVisible = false;

  function purchaseCountryFlag(code=''){
    const clean = String(code || '').trim().toUpperCase();
    if (!/^[A-Z]{2}$/.test(clean)) return '';
    return String.fromCodePoint(...[...clean].map(char => 127397 + char.charCodeAt(0)));
  }

  function recentOrderIcon(name=''){
    const value = String(name || '').toLowerCase();
    if (/(netflix|disney|hbo|max|prime|spotify|paramount|viki|streaming)/.test(value)) return 'lucide:tv';
    if (/(web|dominio|hosting|seo|wordpress|blog|ecommerce)/.test(value)) return 'lucide:globe-2';
    if (/(canva|chatgpt|google|gamma|office|elevenlabs|notion|ia)/.test(value)) return 'lucide:sparkles';
    return 'lucide:shopping-bag';
  }

  function recentOrderTimeAgo(iso=''){
    if (!iso) return 'Hace unos segundos';
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return 'Hace unos segundos';

    const seconds = Math.max(0, Math.floor((Date.now() - date.getTime()) / 1000));
    if (seconds < 60) return 'Hace unos segundos';

    const minutes = Math.floor(seconds / 60);
    if (minutes === 1) return 'Hace 1 minuto';
    if (minutes < 60) return `Hace ${minutes} minutos`;

    const hours = Math.floor(minutes / 60);
    if (hours === 1) return 'Hace 1 hora';
    if (hours < 24) return `Hace ${hours} horas`;

    const days = Math.floor(hours / 24);
    return days === 1 ? 'Hace 1 día' : `Hace ${days} días`;
  }

  function queueRecentOrder(order){
    if (!purchaseToast || !order) return;
    purchaseQueue.push(order);
    if (!purchaseToastVisible) showNextRecentOrder();
  }

  function showNextRecentOrder(){
    if (!purchaseToast || !purchaseQueue.length) {
      purchaseToastVisible = false;
      return;
    }

    purchaseToastVisible = true;
    const order = purchaseQueue.shift();

    const customer = order.visitor_name || 'Cliente';
    const product = order.product || 'un producto';
    const flag = purchaseCountryFlag(order.country_code);
    const place = order.country ? `${flag ? flag + ' ' : ''}${order.country}` : '';
    const plan = order.plan ? ` · ${order.plan}` : '';
    const time = recentOrderTimeAgo(order.created_at);

    purchaseToastIcon?.setAttribute('icon', recentOrderIcon(product));
    const purchaseSmall = purchaseToast?.querySelector('small');
    if (purchaseSmall) purchaseSmall.textContent = 'COMPRA DE PLATAFORMA · EN VIVO';
    if (purchaseToastTitle) purchaseToastTitle.textContent = `${customer} compró ${product}`;
    if (purchaseToastMeta) {
      purchaseToastMeta.textContent = [place, plan.replace(/^ · /,''), time].filter(Boolean).join(' · ');
    }

    purchaseToast.hidden = false;
    purchaseToast.style.display = 'flex';
    purchaseToast.classList.remove('force-hide');
    void purchaseToast.offsetWidth;
    purchaseToast.classList.add('show');

    setTimeout(() => {
      purchaseToast.classList.remove('show');
      setTimeout(() => {
        if (!purchaseQueue.length) {
          purchaseToastVisible = false;
        }
        showNextRecentOrder();
      }, 500);
    }, 6500);
  }

  let lastRecentOrderId = 0;

  function buildLocalOrderNotification(order, payment){
    const registeredName = String(
      (typeof loadAlias === 'function' ? loadAlias() : '')
      || document.getElementById('visitorSessionLabel')?.textContent
      || 'Cliente'
    ).trim();

    let country = String(
      currentVisitorCountry?.textContent
      || document.getElementById('accessCountryValue')?.textContent
      || ''
    ).trim();

    // Evitar textos de estado como "detectando..."
    if (/detectando|detecting|cargando|loading/i.test(country)) country = '';

    const countryCode = String(
      document.body?.dataset?.countryCode
      || ''
    ).trim().toUpperCase();

    return {
      id: `local-${Date.now()}`,
      product: order?.product || 'Producto',
      plan: order?.plan || '',
      payment: payment || '',
      visitor_name: registeredName || 'Cliente',
      country,
      country_code: countryCode,
      created_at: new Date().toISOString(),
      local_only: true
    };
  }

  function orderAgeMinutes(order){
    const date = new Date(order?.created_at || '');
    if (Number.isNaN(date.getTime())) return Number.POSITIVE_INFINITY;
    return Math.max(0, (Date.now() - date.getTime()) / 60000);
  }

  function markRecentOrderSeen(order){
    const id = String(order?.id || '');
    if (!id) return;
    seenPurchaseIds.add(id);
    lastRecentOrderId = Math.max(lastRecentOrderId, Number(order.id) || 0);
  }

  async function pollRecentOrders(initial=false){
    if (window.ALEX_PREVIEW_MODE) return;

    const baseUrl = window.ALEX_STORE?.recentOrdersUrl || '/api/recent-orders';
    const url = lastRecentOrderId > 0
      ? `${baseUrl}?after=${encodeURIComponent(lastRecentOrderId)}`
      : baseUrl;

    try {
      const response = await fetch(url, {cache:'no-store'});
      if (!response.ok) return;

      const data = await response.json();
      const orders = Array.isArray(data.orders) ? data.orders : [];

      if (initial && lastRecentOrderId === 0) {
        // Endpoint returns newest first when no "after" is supplied.
        orders.forEach(markRecentOrderSeen);

        // Show the latest REAL order when it is recent, so the notification
        // is visible even if the visitor opened the site after the order.
        const latest = orders[0];
        if (latest && orderAgeMinutes(latest) <= 30) {
          let alreadyShown = false;
          try {
            alreadyShown = sessionStorage.getItem('alex-last-purchase-toast') === String(latest.id);
          } catch (_) {}

          if (!alreadyShown) {
            queueRecentOrder(latest);
            try {
              sessionStorage.setItem('alex-last-purchase-toast', String(latest.id));
            } catch (_) {}
          }
        }
        return;
      }

      const fresh = orders
        .filter(order => !seenPurchaseIds.has(String(order.id)))
        .sort((a,b) => Number(a.id || 0) - Number(b.id || 0));

      fresh.forEach(order => {
        markRecentOrderSeen(order);
        queueRecentOrder(order);
      });

      if (Number(data.latest_id) > lastRecentOrderId) {
        lastRecentOrderId = Number(data.latest_id);
      }
    } catch (_) {}
  }

  pollRecentOrders(true);
  setInterval(() => pollRecentOrders(false), 3000);

  async function trackOrderIntent(order, payment){
    const url = window.ALEX_STORE?.trackOrderUrl || '/api/track-order';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          product: order.product,
          product_id: order.productId || '',
          plan: order.plan,
          payment
        }),
        cache:'no-store'
      });

      if (!response.ok) return null;

      const data = await response.json();

      if (orderCount && Number.isFinite(Number(data.orders))) {
        orderCount.textContent = Number(data.orders).toLocaleString('es-PE');
      }

      // El comprador ya vio el aviso local inmediatamente.
      // Aquí solo marcamos el ID real del servidor para evitar duplicados.
      if (data.event) {
        markRecentOrderSeen(data.event);
        try {
          sessionStorage.setItem('alex-last-purchase-toast', String(data.event.id || ''));
        } catch (_) {}
      }

      return data.event || null;
    } catch (_) {
      return null;
    }
  }

  function applyFilters() {
    const query = (searchInput?.value || '').trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const matchesQuery = card.dataset.name.includes(query);
      const matchesFilter = currentFilter === 'all' || card.dataset.category === currentFilter;
      const show = matchesQuery && matchesFilter;
      card.hidden = !show;
      if (show) visible += 1;
    });
    emptyState.hidden = visible !== 0;
  }

  searchInput?.addEventListener('input', applyFilters);

  document.querySelectorAll('[data-category-jump]').forEach(link => {
    link.addEventListener('click', () => {
      const category = link.dataset.categoryJump || '';
      const target = [...filterButtons].find(btn => btn.dataset.filter === category);
      if (target) setTimeout(() => target.click(), 250);
    });
  });

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      currentFilter = button.dataset.filter;
      applyFilters();
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeCheckout();
    if (e.key === 'Escape' && socialModal?.classList.contains('open')) closeSocial();
    if (e.key === 'Escape' && socialDetailsModal?.classList.contains('open')) closeSocialDetails();
    if (e.key === 'Escape' && detailsModal?.classList.contains('open')) closeDetails();
  });

  document.querySelectorAll('.plan-select').forEach(select => {
    select.addEventListener('change', () => {
      const card = select.closest('.product-card');
      const option = select.options[select.selectedIndex];
      const label = option.dataset.priceLabel || '';
      const priceWrap = card.querySelector('.price-wrap');
      const strong = priceWrap?.querySelector('strong');
      if(priceWrap) priceWrap.hidden = !label;
      if(strong) strong.textContent = label;
    });
  });


  function currentCustomerLanguageLabel(){
    return nativeLanguageName(activeLanguage || browserLanguage());
  }

  async function localizeWhatsappMessage(linesEs){
    const sourceLines = Array.isArray(linesEs) ? linesEs : [String(linesEs || '')];
    if (activeLanguage === 'es') return sourceLines.join('\n');

    const translated = [];
    for (const line of sourceLines) {
      if (!line) {
        translated.push('');
        continue;
      }

      // Conserva líneas de datos/identificadores sin traducir la parte variable cuando sea posible.
      // Para el resto usa el mismo traductor global del sitio.
      try {
        translated.push(await translateTextGlobal(line, activeLanguage) || line);
      } catch (_) {
        translated.push(line);
      }
    }
    return translated.join('\n');
  }

  function updateCheckoutContinueState(){
    if (!continueButton) return;
    continueButton.disabled = !(selectedPayment && checkoutTerms?.checked);
  }

  function showTermsRequired(){
    const message = t('terms_required');
    if (toast) {
      toast.textContent = message;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 1500);
    }
  }

  let purchaseEffectTimer = null;

  function triggerPurchaseEffect(order){
    if (!purchaseEffect || !order) return;

    const product = String(order.product || '').trim() || 'tu plataforma';
    const plan = String(order.plan || '').trim();
    const payment = String(order.payment || '').trim();

    if (purchaseEffectTag) purchaseEffectTag.textContent = t('purchase_effect_tag');
    if (purchaseEffectTitle) purchaseEffectTitle.textContent = t('purchase_effect_title');

    const template = String(t('purchase_effect_text') || '');
    const baseText = template.replace('{product}', product);
    const finalText = [baseText, plan ? `${t('plan')}: ${plan}` : '', payment ? `${t('select_payment')}: ${payment}` : ''].filter(Boolean).join(' · ');
    if (purchaseEffectText) purchaseEffectText.textContent = finalText;

    purchaseEffect.classList.remove('show');
    purchaseEffect.setAttribute('aria-hidden','false');
    void purchaseEffect.offsetWidth;
    purchaseEffect.classList.add('show');

    if (purchaseEffectTimer) clearTimeout(purchaseEffectTimer);
    purchaseEffectTimer = setTimeout(() => {
      purchaseEffect.classList.remove('show');
      purchaseEffect.setAttribute('aria-hidden','true');
    }, 2500);
  }


  function openCheckout(button) {
    const card = button.closest('.product-card');
    const select = card.querySelector('.plan-select');
    const option = select.options[select.selectedIndex];
    const planText = option.dataset.planName || option.textContent.split('·')[0].trim();
    const rawPrice = option.dataset.basePrice ?? option.dataset.price;
    const priceLabel = option.dataset.priceLabel || '';
    const sourceCurrency = String(option.dataset.sourceCurrency || BASE_CURRENCY).toUpperCase();
    const basePrice = rawPrice ? Number(rawPrice).toFixed(2) : '';
    selectedOrder = {
      product: button.dataset.product,
      productId: button.dataset.productId || '',
      plan: planText,
      basePrice,
      priceLabel,
      sourceCurrency,
      currency: activeCurrency
    };
    trackAnalyticsEvent('checkout', {product_id:selectedOrder.productId, product_name:selectedOrder.product, plan:selectedOrder.plan});
    setLiveActivity('checkout', selectedOrder.productId, selectedOrder.product);
    selectedPayment = null;
    modalProduct.textContent = selectedOrder.product;
    modalPlan.textContent = selectedOrder.plan;
    modalPrice.textContent = selectedOrder.priceLabel || (activeLanguage === 'es' ? 'POR CONFIRMAR' : t('consult'));
    paymentButtons.forEach(btn => { btn.classList.remove('selected'); btn.querySelector('i').textContent = '○'; });
    if (paymentInstructions) paymentInstructions.hidden = true;
    if (paymentInstructionText) paymentInstructionText.textContent = '';
    if (checkoutTerms) checkoutTerms.checked = false;
    continueButton.disabled = true;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCheckout() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.buy-btn').forEach(button => button.addEventListener('click', () => openCheckout(button)));
  document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeCheckout));


  async function localizePaymentCards(){
    const nodes=[...document.querySelectorAll('.payment-detail-text')];
    for (const node of nodes) {
      const source = node.dataset.sourceEs || node.textContent.trim();
      if (!source) continue;
      if (activeLanguage === 'es') {
        node.textContent = source;
        continue;
      }
      // Details that are almost entirely IDs/numbers remain untouched.
      const letters=(source.match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]/g)||[]).length;
      if (letters < 8) { node.textContent=source; continue; }
      const translated = await translateTextGlobal(source, activeLanguage);
      if (translated) node.textContent = translated;
    }
  }

  async function renderPaymentInstructions(button){
    if (!button) return;
    const methodName = button.dataset.method || '';
    const sourceInstruction = button.dataset.instructions || I18N.es.payment_method_help;
    if (paymentInstructions) paymentInstructions.hidden = false;
    if (paymentInstructionTitle) paymentInstructionTitle.textContent = `${t('pay_with')} ${methodName.toUpperCase()}`;

    let instruction = sourceInstruction;
    if (activeLanguage !== 'es') {
      instruction = await translateTextGlobal(sourceInstruction, activeLanguage) || sourceInstruction;
    }

    const lines = [instruction];
    if (selectedOrder?.basePrice) {
      const sourceCurrency = selectedOrder.sourceCurrency || BASE_CURRENCY;
      if (sourceCurrency === BASE_CURRENCY) {
        lines.push(`${t('payment_base_amount')}: S/ ${Number(selectedOrder.basePrice).toFixed(2)}`);
        if (activeCurrency !== BASE_CURRENCY) {
          lines.push(`${t('payment_local_amount')}: ${selectedOrder.priceLabel}`);
        }
      } else {
        // Para servicios cotizados originalmente en USD, mostrar al cliente
        // directamente el equivalente en su moneda actual.
        lines.push(`${t('payment_local_amount')}: ${selectedOrder.priceLabel}`);
      }
    }
    if (paymentInstructionText) paymentInstructionText.textContent = lines.join('\n');
  }

  paymentButtons.forEach(button => {
    button.addEventListener('click', async () => {
      selectedPayment = button.dataset.method;
      paymentButtons.forEach(btn => {
        const selected = btn === button;
        btn.classList.toggle('selected', selected);
        btn.querySelector('i').textContent = selected ? '●' : '○';
      });
      await renderPaymentInstructions(button);
      updateCheckoutContinueState();
    });
  });

  checkoutTerms?.addEventListener('change', updateCheckoutContinueState);
  detailsTerms?.addEventListener('change', () => {
    if (detailsWhatsapp) detailsWhatsapp.disabled = !detailsTerms.checked;
  });
  socialTerms?.addEventListener('change', () => {
    if (socialWhatsapp) socialWhatsapp.disabled = !socialTerms.checked;
  });

  continueButton.addEventListener('click', async () => {
    if (!selectedOrder || !selectedPayment) return;
    if (!checkoutTerms?.checked) {
      showTermsRequired();
      return;
    }

    const paymentButton = paymentButtons.find(b => b.dataset.method === selectedPayment);
    const customerLanguage = currentCustomerLanguageLabel();

    const linesEs = [
      'Hola Alex Streaming 👋', '',
      'Quiero realizar este pedido:',
      `• Plataforma: ${selectedOrder.product}`,
      `• Plan: ${selectedOrder.plan}`,
      `• Precio: ${selectedOrder.priceLabel || 'Por confirmar'}${selectedOrder.basePrice && activeCurrency !== BASE_CURRENCY && (selectedOrder.sourceCurrency || BASE_CURRENCY) === BASE_CURRENCY ? ` (base S/ ${Number(selectedOrder.basePrice).toFixed(2)})` : ''}`,
      `• Método de pago: ${selectedPayment}`,
      `• Datos: ${paymentButton?.dataset.instructions || 'Coordinar por WhatsApp'}`,
      `• ${t('customer_language')}: ${customerLanguage}`, '',
      'Acepto los términos y condiciones del servicio.',
      'Puedes usar un traductor para que el vendedor y yo podamos entendernos. Mi idioma aparece indicado arriba.',
      '',
      'Enviaré mi comprobante después de realizar el pago.'
    ];

    const message = await localizeWhatsappMessage(linesEs);

    toast?.classList.add('show');
    setTimeout(() => toast?.classList.remove('show'), 1300);

    // 1) Mostrar el efecto y la notificación usando el nombre con que se registró.
    //    Esto no depende de internet ni de la respuesta de la API.
    const localOrderEvent = buildLocalOrderNotification(selectedOrder, selectedPayment);
    triggerPurchaseEffect({...selectedOrder, payment:selectedPayment});
    queueRecentOrder(localOrderEvent);

    // 2) Registrar el pedido real en el servidor para que los demás visitantes
    //    también reciban el aviso mediante /api/recent-orders.
    trackOrderIntent(selectedOrder, selectedPayment);
    setLiveActivity('order', selectedOrder.productId, selectedOrder.product);

    // 3) Abrir WhatsApp con una pequeña pausa para que el cliente alcance
    //    a ver la animación/notificación.
    const url = `https://wa.me/${window.ALEX_STORE.whatsapp}?text=${encodeURIComponent(message)}`;
    setTimeout(() => window.open(url, '_blank', 'noopener'), 950);
  });



  // V32 — Traducción automática de DETALLES según el idioma detectado al entrar.
  // Una web no puede conocer el "idioma natal" real; usa el idioma preferido
  // configurado en el navegador/dispositivo (navigator.languages / navigator.language).
  const DETAILS_TRANSLATION_CACHE = new Map();

  async function translateProductDetails(product, targetLang){
    const lang = normalizeLanguageCode(targetLang || activeLanguage || 'es');
    if (!product || lang === 'es') {
      return {
        description: product?.description || '',
        plans: (product?.plans || []).map(p => p.name || ''),
        details: [...(product?.details || [])],
        notes: [...(product?.notes || [])]
      };
    }

    const cacheKey = `${product.id || product.name}::${lang}`;
    if (DETAILS_TRANSLATION_CACHE.has(cacheKey)) {
      return DETAILS_TRANSLATION_CACHE.get(cacheKey);
    }

    const translateOne = async (value) => {
      const text = String(value || '').trim();
      if (!text) return text;

      // Mantener marcas, IDs, precios, números, emojis y líneas casi sin texto.
      const letters = (text.match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñÀ-ÿ\u0400-\u04FF\u0600-\u06FF\u0900-\u097F\u4E00-\u9FFF\u3040-\u30FF\uAC00-\uD7AF]/g) || []).length;
      if (letters < 3) return text;

      try {
        return await translateTextGlobal(text, lang) || text;
      } catch (_) {
        return text;
      }
    };

    // Traducimos de forma secuencial para no saturar el servicio de respaldo.
    const translated = {
      description: await translateOne(product.description || ''),
      plans: [],
      details: [],
      notes: []
    };

    for (const plan of (product.plans || [])) {
      translated.plans.push(await translateOne(plan.name || ''));
    }
    for (const line of (product.details || [])) {
      translated.details.push(await translateOne(line));
    }
    for (const line of (product.notes || [])) {
      translated.notes.push(await translateOne(line));
    }

    DETAILS_TRANSLATION_CACHE.set(cacheKey, translated);
    return translated;
  }

  function detailsOptionsTitle(){
    const builtIn = {
      es:'MODALIDADES DISPONIBLES',
      en:'AVAILABLE OPTIONS',
      pt:'OPÇÕES DISPONÍVEIS',
      fr:'OPTIONS DISPONIBLES',
      de:'VERFÜGBARE OPTIONEN',
      it:'OPZIONI DISPONIBILI',
      vi:'CÁC LỰA CHỌN CÓ SẴN',
      ru:'ДОСТУПНЫЕ ВАРИАНТЫ',
      tr:'MEVCUT SEÇENEKLER',
      ar:'الخيارات المتاحة',
      zh:'可用选项',
      ja:'利用可能なオプション',
      ko:'사용 가능한 옵션',
      hi:'उपलब्ध विकल्प',
      id:'OPSI YANG TERSEDIA',
      th:'ตัวเลือกที่มี',
      nl:'BESCHIKBARE OPTIES',
      pl:'DOSTĘPNE OPCJE'
    };
    return builtIn[activeLanguage] || (activeLanguage === 'es' ? 'MODALIDADES DISPONIBLES' : 'AVAILABLE OPTIONS');
  }

  function renderDetailsTranslated(product, translated){
    if (!product || !translated) return;

    // El nombre comercial se conserva como marca/título; el contenido sí se traduce.
    detailsTitle.textContent = product.name;
    detailsDescription.textContent = translated.description || product.description || '';

    detailsPlans.innerHTML = '';
    if ((product.plans || []).length) {
      const title = document.createElement('div');
      title.className = 'details-plan-title';
      title.textContent = detailsOptionsTitle();
      detailsPlans.appendChild(title);

      (product.plans || []).forEach((plan, index) => {
        const row = document.createElement('div');
        row.className = 'details-plan-name';
        const span = document.createElement('span');
        span.textContent = translated.plans[index] || plan.name || '';
        row.appendChild(span);
        detailsPlans.appendChild(row);
      });
    }

    detailsInfo.innerHTML = '';
    if ((product.details || []).length) {
      const h3 = document.createElement('h3');
      h3.textContent = t('includes');
      const ul = document.createElement('ul');
      (product.details || []).forEach((line, index) => {
        const li = document.createElement('li');
        li.textContent = translated.details[index] || line;
        ul.appendChild(li);
      });
      detailsInfo.append(h3, ul);
    }

    detailsNotes.innerHTML = '';
    if ((product.notes || []).length) {
      const h3 = document.createElement('h3');
      h3.textContent = t('conditions');
      const ul = document.createElement('ul');
      (product.notes || []).forEach((line, index) => {
        const li = document.createElement('li');
        li.textContent = translated.notes[index] || line;
        ul.appendChild(li);
      });
      detailsNotes.append(h3, ul);
    }
  }


  function reviewStarsText(rating){
    const value = Math.max(0, Math.min(5, Number(rating || 0)));
    const rounded = Math.round(value);
    return '★'.repeat(rounded) + '☆'.repeat(5 - rounded);
  }

  function updateCardReviewSummary(productId, summary){
    const el = document.querySelector(`[data-review-summary="${CSS.escape(String(productId))}"]`);
    if (!el || !summary) return;
    const count = Number(summary.count || 0);
    const average = Number(summary.average || 0);
    const avgEl = el.querySelector('[data-review-average]');
    const countEl = el.querySelector('[data-review-count]');
    const fillEl = el.querySelector('[data-review-stars-fill]');
    if (avgEl) avgEl.textContent = count ? average.toFixed(1) : '—';
    if (countEl) countEl.textContent = `${count} reseña${count === 1 ? '' : 's'}`;
    if (fillEl) fillEl.style.width = `${count ? (average / 5) * 100 : 0}%`;
  }

  function renderReviewSummary(summary){
    const count = Number(summary?.count || 0);
    const average = Number(summary?.average || 0);
    if (detailsReviewAverage) detailsReviewAverage.textContent = count ? average.toFixed(1) : '—';
    if (detailsReviewStars) detailsReviewStars.textContent = count ? reviewStarsText(average) : '☆☆☆☆☆';
    if (detailsReviewCount) {
      detailsReviewCount.textContent = count
        ? `${count} reseña${count === 1 ? '' : 's'}`
        : 'Sin reseñas todavía';
    }
  }

  function reviewDateLabel(value){
    if (!value) return '';
    try {
      return new Intl.DateTimeFormat(activeLanguage || 'es', {
        year:'numeric', month:'short', day:'numeric'
      }).format(new Date(value));
    } catch (_) {
      return '';
    }
  }

  function renderReviewList(reviews){
    if (!detailsReviewList) return;
    detailsReviewList.innerHTML = '';

    if (!Array.isArray(reviews) || !reviews.length) {
      const empty = document.createElement('p');
      empty.className = 'reviews-empty';
      empty.textContent = 'Todavía no hay reseñas. Puedes ser la primera persona en opinar.';
      detailsReviewList.appendChild(empty);
      return;
    }

    reviews.forEach(review => {
      const article = document.createElement('article');
      article.className = 'customer-review';

      const top = document.createElement('div');
      top.className = 'customer-review-top';

      const person = document.createElement('div');
      person.className = 'customer-review-person';
      const avatar = document.createElement('span');
      avatar.textContent = String(review.display_name || 'C').trim().charAt(0).toUpperCase() || 'C';
      const nameWrap = document.createElement('div');
      const name = document.createElement('strong');
      name.textContent = review.display_name || 'Cliente';
      const date = document.createElement('small');
      date.textContent = reviewDateLabel(review.updated_at || review.created_at);
      nameWrap.append(name, date);
      person.append(avatar, nameWrap);

      const rating = document.createElement('span');
      rating.className = 'customer-review-stars';
      rating.textContent = reviewStarsText(review.rating);

      top.append(person, rating);

      const comment = document.createElement('p');
      comment.textContent = review.comment || '';

      article.append(top, comment);
      detailsReviewList.appendChild(article);
    });
  }

  function setReviewPicker(rating){
    reviewRating = Number(rating || 0);
    reviewStarPicker?.querySelectorAll('button').forEach(button => {
      const value = Number(button.dataset.rating || 0);
      button.classList.toggle('active', value <= reviewRating);
      button.setAttribute('aria-pressed', value === reviewRating ? 'true' : 'false');
    });
  }

  async function loadProductReviews(productId){
    if (!productId) return;

    if (window.ALEX_PREVIEW_MODE) {
      renderReviewSummary({count:0, average:0});
      renderReviewList([]);
      if (reviewFeedback) reviewFeedback.textContent = 'Vista previa: las reseñas reales se guardan cuando publiques la web.';
      return;
    }

    if (detailsReviewList) {
      detailsReviewList.innerHTML = '<p class="reviews-empty">Cargando reseñas...</p>';
    }

    try {
      const response = await fetch(`/api/reviews?product_id=${encodeURIComponent(productId)}`, {
        headers:{'Accept':'application/json'}
      });
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error(data.error || 'review_load_error');

      renderReviewSummary(data.summary);
      renderReviewList(data.reviews);
      updateCardReviewSummary(productId, data.summary);

      if (data.own_review) {
        setReviewPicker(data.own_review.rating);
        if (reviewComment) reviewComment.value = data.own_review.comment || '';
        if (reviewFeedback) reviewFeedback.textContent = 'Ya tienes una reseña. Puedes editarla y volver a publicar.';
      } else {
        setReviewPicker(0);
        if (reviewComment) reviewComment.value = '';
        if (reviewFeedback) reviewFeedback.textContent = '';
      }
    } catch (_) {
      renderReviewList([]);
      if (reviewFeedback) reviewFeedback.textContent = 'No se pudieron cargar las reseñas en este momento.';
    }
  }

  async function openDetails(button) {
    const id = button.dataset.productId;
    const originalProduct = (window.ALEX_PRODUCTS || []).find(p => p.id === id);
    if (!originalProduct || !detailsModal) return;

    // V45: DETALLES corresponde al plan actualmente seleccionado.
    const card = button.closest('.product-card');
    const select = card?.querySelector('.plan-select');
    const selectedIndex = select ? Number(select.value || 0) : 0;
    const selectedPlan = (originalProduct.plans || [])[selectedIndex] || (originalProduct.plans || [])[0];

    detailsProduct = {
      ...originalProduct,
      description: selectedPlan?.description || originalProduct.description || '',
      plans: selectedPlan ? [selectedPlan] : (originalProduct.plans || []),
      details: selectedPlan?.details || originalProduct.details || [],
      notes: selectedPlan?.notes || originalProduct.notes || []
    };

    trackAnalyticsEvent('details', {
      product_id:detailsProduct.id,
      product_name:detailsProduct.name,
      plan:selectedPlan?.name || ''
    });
    setLiveActivity('view_product', detailsProduct.id, detailsProduct.name);

    // Abrimos de inmediato con el contenido original para que no haya retraso visual.
    renderDetailsTranslated(detailsProduct, {
      description: detailsProduct.description || '',
      plans: (detailsProduct.plans || []).map(p => p.name || ''),
      details: [...(detailsProduct.details || [])],
      notes: [...(detailsProduct.notes || [])]
    });

    if (detailsTerms) detailsTerms.checked = false;
    if (detailsWhatsapp) detailsWhatsapp.disabled = true;
    detailsModal.classList.add('open');
    detailsModal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    loadProductReviews(detailsProduct.id);

    // Si el usuario no usa español, traducimos automáticamente el contenido
    // del modal al idioma detectado al entrar o seleccionado manualmente.
    const langAtOpen = activeLanguage;
    if (langAtOpen !== 'es') {
      detailsDescription.dataset.translationState = 'loading';
      try {
        const translated = await translateProductDetails(detailsProduct, langAtOpen);

        // Evitar actualizar el modal si el usuario cambió de producto o idioma.
        if (
          detailsProduct &&
          detailsProduct.id === id &&
          activeLanguage === langAtOpen &&
          detailsModal.classList.contains('open')
        ) {
          renderDetailsTranslated(detailsProduct, translated);
        }
      } finally {
        delete detailsDescription.dataset.translationState;
      }
    }
  }

  function closeDetails() {
    if (!detailsModal) return;
    detailsModal.classList.remove('open');
    detailsModal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.details-btn').forEach(button => button.addEventListener('click', () => openDetails(button)));

  document.querySelectorAll('.reviews-btn').forEach(button => button.addEventListener('click', async () => {
    await openDetails(button);
    setTimeout(() => detailsReviewsSection?.scrollIntoView({behavior:'smooth', block:'start'}), 140);
  }));

  reviewStarPicker?.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => setReviewPicker(Number(button.dataset.rating || 0)));
  });

  reviewForm?.addEventListener('submit', async event => {
    event.preventDefault();
    if (!detailsProduct) return;

    if (!reviewRating) {
      if (reviewFeedback) reviewFeedback.textContent = 'Selecciona de 1 a 5 estrellas.';
      return;
    }

    const comment = String(reviewComment?.value || '').trim();
    if (comment.length < 3) {
      if (reviewFeedback) reviewFeedback.textContent = 'Escribe un comentario de al menos 3 caracteres.';
      return;
    }

    if (window.ALEX_PREVIEW_MODE) {
      if (reviewFeedback) reviewFeedback.textContent = 'Vista previa: al publicar la web, esta reseña se guardará en la base de datos.';
      return;
    }

    let name = '';
    try { name = localStorage.getItem('alex-alias') || ''; } catch (_) {}

    reviewSubmit.disabled = true;
    if (reviewFeedback) reviewFeedback.textContent = 'Publicando reseña...';

    try {
      const response = await fetch('/api/reviews', {
        method:'POST',
        headers:{'Content-Type':'application/json', 'Accept':'application/json'},
        body:JSON.stringify({
          product_id: detailsProduct.id,
          rating: reviewRating,
          comment,
          name,
        })
      });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        const messages = {
          registration_required:'Debes registrarte con tu nombre antes de dejar una reseña.',
          invalid_rating:'Selecciona una valoración válida.',
          comment_too_short:'Escribe un comentario un poco más completo.',
          private_contact_not_allowed:'No publiques teléfonos, correos ni enlaces en una reseña pública.',
          slow_down:'Espera unos segundos antes de volver a publicar.',
        };
        throw new Error(messages[data.error] || 'No se pudo publicar la reseña.');
      }

      if (reviewFeedback) {
        reviewFeedback.textContent = data.updated
          ? 'Tu reseña fue actualizada correctamente.'
          : '¡Gracias! Tu reseña fue publicada.';
      }
      updateCardReviewSummary(detailsProduct.id, data.summary);
      await loadProductReviews(detailsProduct.id);
    } catch (error) {
      if (reviewFeedback) reviewFeedback.textContent = error.message || 'No se pudo publicar la reseña.';
    } finally {
      reviewSubmit.disabled = false;
    }
  });

  document.querySelectorAll('[data-close-details]').forEach(el => el.addEventListener('click', closeDetails));
  detailsWhatsapp?.addEventListener('click', async () => {
    if (!detailsProduct) return;
    if (!detailsTerms?.checked) {
      showTermsRequired();
      return;
    }

    const customerLanguage = currentCustomerLanguageLabel();
    const message = await localizeWhatsappMessage([
      'Hola Alex Streaming 👋','',
      `Quiero información sobre: ${detailsProduct.name}`,
      detailsProduct.plans?.[0]?.name ? `• Plan: ${detailsProduct.plans[0].name}` : '',
      '',
      '¿Me indicas disponibilidad y condiciones?',
      `• ${t('customer_language')}: ${customerLanguage}`,
      'Acepto los términos y condiciones del servicio.',
      'Puedes usar un traductor para que el vendedor y yo podamos entendernos. Mi idioma aparece indicado arriba.'
    ]);

    window.open(`https://wa.me/${window.ALEX_STORE.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });



  async function openSocialDetails(button){
    const card = button.closest('.social-card');
    if(!card || !socialDetailsModal) return;

    const network = button.dataset.network || card.dataset.social || 'Red social';
    const metrics = String(card.dataset.socialMetrics || '')
      .split('||')
      .map(v=>v.trim())
      .filter(Boolean);

    if(socialDetailsTitle) socialDetailsTitle.textContent = network;
    if(socialDetailsNotice) socialDetailsNotice.textContent = t('social_worldwide_notice');

    if(socialDetailsMetrics){
      socialDetailsMetrics.innerHTML='';
      for(const metric of metrics){
        const chip=document.createElement('span');
        chip.textContent=metric;
        socialDetailsMetrics.appendChild(chip);
      }
    }

    socialDetailsModal.classList.add('open');
    socialDetailsModal.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';

    if(activeLanguage !== 'es' && activeLanguage !== 'en'){
      try{
        const translatedNotice=await translateTextGlobal(
          I18N.es.social_worldwide_notice || t('social_worldwide_notice'),
          activeLanguage
        );
        if(socialDetailsNotice && translatedNotice) socialDetailsNotice.textContent=translatedNotice;

        if(socialDetailsMetrics){
          const chips=[...socialDetailsMetrics.querySelectorAll('span')];
          for(let i=0;i<chips.length;i++){
            const translatedMetric=await translateTextGlobal(metrics[i],activeLanguage);
            if(translatedMetric) chips[i].textContent=translatedMetric;
          }
        }
      }catch(_){}
    }
  }

  function closeSocialDetails(){
    if(!socialDetailsModal) return;
    socialDetailsModal.classList.remove('open');
    socialDetailsModal.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
  }

  document.querySelectorAll('.social-details-btn').forEach(button=>{
    button.addEventListener('click',()=>openSocialDetails(button));
  });
  document.querySelectorAll('[data-close-social-details]').forEach(el=>{
    el.addEventListener('click',closeSocialDetails);
  });

  function openSocial(button) {
    const card = button.closest('.social-card');
    const service = card.querySelector('.social-service')?.value || 'Interacciones';
    const quantity = card.querySelector('.social-quantity')?.value || '1000';
    const network = button.dataset.network || card.dataset.social || 'Red social';
    selectedSocialOrder = { network, service, quantity };
    socialModalNetwork.textContent = network;
    socialModalService.textContent = service;
    socialModalQuantity.textContent = Number(quantity).toLocaleString('es-PE');
    if (socialTarget) socialTarget.value = '';
    if (socialTerms) socialTerms.checked = false;
    if (socialWhatsapp) socialWhatsapp.disabled = true;
    socialModal.classList.add('open');
    socialModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => socialTarget?.focus(), 100);
  }

  function closeSocial() {
    if (!socialModal) return;
    socialModal.classList.remove('open');
    socialModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.social-order-btn').forEach(button => {
    button.addEventListener('click', () => openSocial(button));
  });
  document.querySelectorAll('[data-close-social]').forEach(el => el.addEventListener('click', closeSocial));

  socialWhatsapp?.addEventListener('click', async () => {
    if (!selectedSocialOrder) return;
    if (!socialTerms?.checked) {
      showTermsRequired();
      return;
    }

    const target = (socialTarget?.value || '').trim();
    const customerLanguage = currentCustomerLanguageLabel();

    const message = await localizeWhatsappMessage([
      'Hola Alex Streaming 👋', '',
      'Quiero solicitar este servicio de red social:',
      `• Red: ${selectedSocialOrder.network}`,
      `• Objetivo: ${selectedSocialOrder.service}`,
      `• Cantidad: ${Number(selectedSocialOrder.quantity).toLocaleString(localeForLanguage(activeLanguage))}`,
      target ? `• Enlace / usuario: ${target}` : '• Enlace / usuario: lo envío por chat',
      `• ${t('customer_language')}: ${customerLanguage}`,
      '',
      'Acepto los términos y condiciones del servicio.',
      'Puedes usar un traductor para que el vendedor y yo podamos entendernos. Mi idioma aparece indicado arriba.',
      '',
      '¿Me indicas disponibilidad, precio y condiciones del servicio?'
    ]);

    trackAnalyticsEvent('social_quote', {product_name:selectedSocialOrder.network, plan:`${selectedSocialOrder.service} · ${selectedSocialOrder.quantity}`});
    toast.textContent = t('continue_whatsapp');
    toast?.classList.add('show');
    setTimeout(() => toast?.classList.remove('show'), 1300);
    const url = `https://wa.me/${window.ALEX_STORE.whatsapp}?text=${encodeURIComponent(message)}`;
    setTimeout(() => window.open(url, '_blank', 'noopener'), 180);
  });

  // Matrix background ligero: solo visual, no afecta el contenido.
  const canvas = document.getElementById('matrixCanvas');
  const ctx = canvas?.getContext('2d');
  let drops = [];
  const chars = '01アイウエオカキクケコサシスセソナニヌネノマトリックス<>/{}[]$#';
  const fontSize = 14;
  function resizeMatrix(){
    if (!canvas || !ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = innerWidth * dpr; canvas.height = innerHeight * dpr;
    canvas.style.width = innerWidth + 'px'; canvas.style.height = innerHeight + 'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
    drops = Array(Math.ceil(innerWidth / fontSize)).fill(0).map(() => Math.random() * -60);
  }
  function drawMatrix(){
    if (!ctx || !canvas) return;
    ctx.fillStyle = 'rgba(1,5,2,.085)'; ctx.fillRect(0,0,innerWidth,innerHeight);
    ctx.font = `${fontSize}px JetBrains Mono`;
    ctx.fillStyle = '#7cffab';
    drops.forEach((y,i) => {
      const text = chars[Math.floor(Math.random()*chars.length)];
      ctx.fillText(text, i*fontSize, y*fontSize);
      if (y*fontSize > innerHeight && Math.random() > .975) drops[i] = 0; else drops[i] += .55;
    });
    requestAnimationFrame(drawMatrix);
  }
  resizeMatrix();
  addEventListener('resize', resizeMatrix, {passive:true});
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) drawMatrix();
})();


// ============================================================
// V18 — ACCESS PORTAL + NAME/COUNTRY PRESENCE + ALEX PULSE + ALEX GUIDE
// ============================================================
(() => {
  const gate = document.getElementById('accessGate');
  const enterBtn = document.getElementById('accessEnter');
  const aliasInput = document.getElementById('accessAlias');
  const accessStatus = document.getElementById('accessStatus');
  const accessNameError = document.getElementById('accessNameError');
  const accessCountryLine = document.getElementById('accessCountryLine');
  const accessCountryValue = document.getElementById('accessCountryValue');
  const musicBtn = document.getElementById('musicToggle');

  // ---------- Original procedural background music: ALEX PULSE ----------
  // Uses Web Audio only. No copyrighted/commercial song is included.
  let ctx = null, master = null, delay = null, feedback = null, timer = null, step = 0;
  let musicOn = false;
  const bpm = 116;
  const stepMs = (60_000 / bpm) / 2; // eighth notes
  const melody = [440,523.25,587.33,659.25,783.99,659.25,587.33,523.25,440,523.25,659.25,783.99,880,783.99,659.25,587.33];
  const bass = [110,110,82.41,98,110,110,130.81,98];

  function ensureAudio(){
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain();
    master.gain.value = 0.0;
    const compressor = ctx.createDynamicsCompressor();
    compressor.threshold.value = -18; compressor.ratio.value = 5;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass'; filter.frequency.value = 5200; filter.Q.value = .45;
    delay = ctx.createDelay(.6); delay.delayTime.value = .22;
    feedback = ctx.createGain(); feedback.gain.value = .20;
    delay.connect(feedback); feedback.connect(delay);
    master.connect(filter); filter.connect(compressor); compressor.connect(ctx.destination);
    filter.connect(delay); delay.connect(compressor);
  }

  function synthTone(freq, when, duration=.16, type='triangle', gain=.025, detune=0){
    const osc = ctx.createOscillator();
    const amp = ctx.createGain();
    osc.type = type; osc.frequency.value = freq; osc.detune.value = detune;
    amp.gain.setValueAtTime(.0001, when);
    amp.gain.exponentialRampToValueAtTime(gain, when + .015);
    amp.gain.exponentialRampToValueAtTime(.0001, when + duration);
    osc.connect(amp); amp.connect(master); osc.start(when); osc.stop(when + duration + .03);
  }
  function kick(when){
    const osc = ctx.createOscillator(), amp = ctx.createGain();
    osc.type='sine'; osc.frequency.setValueAtTime(145,when); osc.frequency.exponentialRampToValueAtTime(45,when+.13);
    amp.gain.setValueAtTime(.11,when); amp.gain.exponentialRampToValueAtTime(.0001,when+.16);
    osc.connect(amp); amp.connect(master); osc.start(when); osc.stop(when+.18);
  }
  function hat(when){
    const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate*.045), ctx.sampleRate);
    const data = buffer.getChannelData(0); for(let i=0;i<data.length;i++) data[i]=Math.random()*2-1;
    const src=ctx.createBufferSource(), hp=ctx.createBiquadFilter(), amp=ctx.createGain();
    src.buffer=buffer; hp.type='highpass'; hp.frequency.value=7200;
    amp.gain.setValueAtTime(.018,when); amp.gain.exponentialRampToValueAtTime(.0001,when+.04);
    src.connect(hp); hp.connect(amp); amp.connect(master); src.start(when);
  }
  function scheduleStep(){
    if (!musicOn || !ctx) return;
    const now=ctx.currentTime+.025, s=step%16;
    if (s%4===0) kick(now);
    if (s%2===1) hat(now);
    if (s%2===0) synthTone(bass[Math.floor(s/2)%bass.length],now,.24,'sawtooth',.018,-7);
    synthTone(melody[s],now,.13,s%4===0?'square':'triangle',s%4===0?.020:.013,s%3===0?5:-4);
    if (s===0 || s===8) { synthTone(220,now,.75,'sine',.012); synthTone(329.63,now,.75,'sine',.008); }
    step++;
  }
  function setMusicUi(active, message){
    musicBtn?.classList.toggle('active', active);
    musicBtn?.setAttribute('aria-pressed', active ? 'true' : 'false');
    const label = musicBtn?.querySelector('strong');
    if (label) label.textContent = message || (active ? 'ALEX PULSE ACTIVO' : 'ACTIVAR MÚSICA');
  }
  async function startMusic(){
    try{
      ensureAudio();
      if (ctx.state==='suspended') await ctx.resume();
      musicOn=true; step=0;
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setValueAtTime(Math.max(.0001, master.gain.value),ctx.currentTime);
      master.gain.exponentialRampToValueAtTime(.20,ctx.currentTime+.35);
      clearInterval(timer); scheduleStep(); timer=setInterval(scheduleStep,stepMs);
      setMusicUi(true,'ALEX PULSE ACTIVO'); localStorage.setItem('alex-pulse','on');
    }catch(e){ setMusicUi(false,'AUDIO NO DISPONIBLE'); }
  }
  function stopMusic(){
    musicOn=false; clearInterval(timer); timer=null;
    if(master&&ctx){ master.gain.cancelScheduledValues(ctx.currentTime); master.gain.setTargetAtTime(.0001,ctx.currentTime,.08); }
    setMusicUi(false,'ACTIVAR MÚSICA'); localStorage.setItem('alex-pulse','off');
  }
  musicBtn?.addEventListener('click',()=>musicOn?stopMusic():startMusic());
  window.AlexPulse={start:startMusic,stop:stopMusic};

  let welcomeLiveTimer = null;
  let welcomeLiveShownFor = '';

  function getRegisteredAccessName(){
    try {
      return String(localStorage.getItem('alex-alias') || '').trim();
    } catch (_) {
      return '';
    }
  }

  function showRegisteredWelcome(name){
    if (!welcomeLiveToast || !welcomeLiveName) return;

    const registeredName = String(name || getRegisteredAccessName() || '').trim();
    if (!registeredName) return;

    // Evita duplicar exactamente la misma bienvenida durante la misma entrada.
    if (welcomeLiveShownFor === registeredName && welcomeLiveToast.classList.contains('show')) return;
    welcomeLiveShownFor = registeredName;

    welcomeLiveName.textContent = registeredName.toUpperCase();

    let countryText = String(
      document.getElementById('currentVisitorCountry')?.textContent
      || document.getElementById('accessCountryValue')?.textContent
      || ''
    ).trim();

    if (/detectando|detecting|cargando|loading/i.test(countryText)) countryText = '';

    if (welcomeLiveMeta) {
      welcomeLiveMeta.textContent = countryText
        ? `${countryText} · TU EXPERIENCIA YA ESTÁ ACTIVA`
        : 'TU EXPERIENCIA YA ESTÁ ACTIVA';
    }

    welcomeLiveToast.hidden = false;
    welcomeLiveToast.style.display = 'flex';
    welcomeLiveToast.classList.remove('show', 'leaving');
    void welcomeLiveToast.offsetWidth;
    welcomeLiveToast.classList.add('show');

    if (welcomeLiveTimer) clearTimeout(welcomeLiveTimer);
    welcomeLiveTimer = setTimeout(() => {
      welcomeLiveToast.classList.add('leaving');
      welcomeLiveToast.classList.remove('show');
      setTimeout(() => {
        welcomeLiveToast.classList.remove('leaving');
      }, 500);
    }, 6500);
  }

  function queueRegisteredWelcome(name){
    const registeredName = String(name || getRegisteredAccessName() || '').trim();
    if (!registeredName) return;

    try {
      sessionStorage.setItem('alex-welcome-pending', registeredName);
    } catch (_) {}

    // Fallback duro: aunque falle o no termine otra animación,
    // esta bienvenida aparecerá en la interfaz.
    setTimeout(() => {
      try {
        const pending = sessionStorage.getItem('alex-welcome-pending') || registeredName;
        if (pending) {
          showRegisteredWelcome(pending);
          sessionStorage.removeItem('alex-welcome-pending');
        }
      } catch (_) {
        showRegisteredWelcome(registeredName);
      }
    }, 4700);
  }

  // ---------- Access portal ----------
  // V21: totalmente independiente de la geolocalización para que el botón
  // de entrada nunca quede bloqueado si un proveedor externo falla.
  function accessCountryLabel(){
    const current = (accessCountryValue?.textContent || '').trim();
    if (current && !/DETECTANDO|NO DISPONIBLE/i.test(current)) return current;
    try {
      const langs = [...(navigator.languages || []), navigator.language].filter(Boolean);
      for (const lang of langs) {
        const match = String(lang).match(/[-_]([A-Za-z]{2})\b/);
        if (!match) continue;
        const code = match[1].toUpperCase();
        const flag = /^[A-Z]{2}$/.test(code)
          ? String.fromCodePoint(...[...code].map(char => 127397 + char.charCodeAt(0)))
          : '🌐';
        let country = code;
        try { const locale = window.ALEX_GLOBAL_LOCALE?.locale?.() || navigator.language || 'en'; country = new Intl.DisplayNames([locale], {type:'region'}).of(code) || code; } catch (_) {}
        return `${flag} ${country}`.toUpperCase();
      }
    } catch (_) {}
    return '🌐 CONEXIÓN ACTIVA';
  }

  function saveAlias(alias){
    try { localStorage.setItem('alex-alias', alias); } catch (_) {}
  }

  function loadAlias(){
    try { return localStorage.getItem('alex-alias') || ''; } catch (_) { return ''; }
  }


  // V33 — Validación de nombre real / bloqueo de nombres genéricos.
  // No puede comprobar legalmente la identidad, pero sí rechaza alias obvios,
  // variantes con números, espacios, signos, acentos o leetspeak.
  function normalizeAliasForCheck(value){
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g,'')
      .toLowerCase()
      .replace(/0/g,'o')
      .replace(/[1!|]/g,'i')
      .replace(/3/g,'e')
      .replace(/4|@/g,'a')
      .replace(/5|\$/g,'s')
      .replace(/7/g,'t')
      .replace(/8/g,'b')
      .replace(/9/g,'g')
      .replace(/[^a-z\u00c0-\u024f\u0400-\u04ff\u0600-\u06ff\u0900-\u097f\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]/g,'');
  }

  const BLOCKED_ALIAS_WORDS = new Set([
    // Español
    'visitante','visitantes','usuario','usuarios','invitado','invitada','anonimo','anonima',
    'desconocido','desconocida','prueba','testeo',
    // Inglés
    'visitor','visitors','guest','guests','user','users','anonymous','anon','unknown','test',
    // Portugués
    'visitante','usuario','convidado','convidada','anonimo','anonima',
    // Francés
    'visiteur','visiteuse','utilisateur','invite','invitee','anonyme',
    // Italiano
    'visitatore','utente','ospite','anonimo','anonima',
    // Alemán
    'besucher','benutzer','gast','anonym',
    // Otros nombres genéricos frecuentes
    'admin','administrator','root','webmaster','cliente','client','customer'
  ]);

  function aliasLooksGeneric(alias){
    const normalized = normalizeAliasForCheck(alias);
    if (!normalized) return true;

    // Coincidencia exacta.
    if (BLOCKED_ALIAS_WORDS.has(normalized)) return true;

    // Bloquea variantes como visitante123, vi-si-tan-te, v1s1tante, guest2026, etc.
    for (const word of BLOCKED_ALIAS_WORDS) {
      if (normalized === word) return true;
      if (normalized.startsWith(word) && normalized.length <= word.length + 5) return true;
      if (normalized.endsWith(word) && normalized.length <= word.length + 5) return true;
    }

    return false;
  }

  function aliasLooksLikeRealName(alias){
    const value = String(alias || '').trim().replace(/\s+/g,' ');

    if (value.length < 2 || value.length > 40) return false;
    if (aliasLooksGeneric(value)) return false;

    // No permitir números en el nombre.
    if (/\d/.test(value)) return false;

    // Solo letras Unicode, espacios, apóstrofes y guiones.
    try {
      if (!/^[\p{L}\p{M}][\p{L}\p{M}'’\- ]*$/u.test(value)) return false;
    } catch (_) {
      if (!/^[A-Za-zÀ-ÖØ-öø-ÿ'’\- ]+$/.test(value)) return false;
    }

    // Evitar entradas del tipo "aaaaaa", "xxxxx", etc.
    const compact = normalizeAliasForCheck(value);
    if (/^(.)\1{3,}$/.test(compact)) return false;

    // Debe contener al menos 2 letras reales.
    const letters = value.match(/\p{L}/gu) || [];
    if (letters.length < 2) return false;

    return true;
  }

  function grantAccess(){
    if (!gate || gate.classList.contains('exit')) return;
    const alias=(aliasInput?.value||'').trim().replace(/\s+/g,' ').slice(0,24);
    if (alias.length < 2) {
      if (accessNameError) accessNameError.textContent = window.ALEX_GLOBAL_LOCALE?.t?.('name_required') || 'Enter your name to continue.';
      if (accessStatus) accessStatus.textContent = window.ALEX_GLOBAL_LOCALE?.t?.('registration_required') || 'REGISTRATION REQUIRED';
      gate.classList.remove('granted');
      gate.classList.add('name-missing');
      aliasInput?.focus();
      setTimeout(() => gate.classList.remove('name-missing'), 650);
      return;
    }

    if (!aliasLooksLikeRealName(alias)) {
      if (accessNameError) {
        accessNameError.textContent = window.ALEX_GLOBAL_LOCALE?.t?.('real_name_required')
          || 'Use your real name. Generic names such as Guest or Visitor are not allowed.';
      }
      if (accessStatus) {
        accessStatus.textContent = window.ALEX_GLOBAL_LOCALE?.t?.('registration_required') || 'REGISTRATION REQUIRED';
      }
      gate.classList.remove('granted');
      gate.classList.add('name-missing');
      aliasInput?.focus();
      try { localStorage.removeItem('alex-alias'); } catch (_) {}
      setTimeout(() => gate.classList.remove('name-missing'), 650);
      return;
    }

    const shareConsent = document.getElementById('shareLiveIdentity');
    if (!shareConsent?.checked) {
      if (accessNameError) {
        accessNameError.textContent = 'Debes marcar “MOSTRAR MI NOMBRE Y PAÍS EN ACTIVIDAD EN VIVO” para ingresar.';
      }
      if (accessStatus) {
        accessStatus.textContent = 'ACCESO BLOQUEADO · FALTA ACEPTAR LA ACTIVIDAD EN VIVO';
      }
      gate.classList.remove('granted');
      gate.classList.add('consent-missing');
      shareConsent?.focus();
      setTimeout(() => gate.classList.remove('consent-missing'), 700);
      return;
    }

    if (accessNameError) accessNameError.textContent = '';
    saveAlias(alias);
    queueRegisteredWelcome(alias);
    const countryLabel = accessCountryLabel();
    if(accessStatus) accessStatus.textContent=`ACCESO CONCEDIDO · ${alias.toUpperCase()} · ${countryLabel}`;
    gate.classList.add('granted');

    // El audio es opcional: nunca debe impedir el acceso.
    try {
      const result = startMusic();
      if (result && typeof result.catch === 'function') result.catch(() => {});
    } catch (_) {}

    // La transición se ejecuta siempre, sin esperar ubicación, red ni audio.
    setTimeout(()=>{
      document.body.classList.remove('access-locked');
      gate.classList.add('exit');
      try {
        window.dispatchEvent(new CustomEvent('alex:access-granted',{detail:{alias}}));
      } catch (_) {}
      setTimeout(()=>{ try { gate.remove(); } catch (_) {} },700);
    },520);
  }
  const shareLiveIdentity = document.getElementById('shareLiveIdentity');
  if (shareLiveIdentity) {
    shareLiveIdentity.checked = false;
  }

  if(aliasInput){
    const savedAlias = loadAlias();
    aliasInput.value = aliasLooksLikeRealName(savedAlias) ? savedAlias : '';
    if (!aliasInput.value && savedAlias) {
      try { localStorage.removeItem('alex-alias'); } catch (_) {}
    }
    aliasInput.addEventListener('input',()=>{
      if(accessNameError) accessNameError.textContent='';
    });
  }
  function updateAccessButtonState(){
    if (!enterBtn) return;
    const consentOk = Boolean(shareLiveIdentity?.checked);
    enterBtn.disabled = !consentOk;
    enterBtn.setAttribute('aria-disabled', consentOk ? 'false' : 'true');

    const consentBox = shareLiveIdentity?.closest('.live-share-consent');
    consentBox?.classList.toggle('accepted', consentOk);

    if (consentOk) {
      if (accessStatus && !gate?.classList.contains('granted')) {
        accessStatus.textContent = 'CASILLA ACEPTADA · ESCRIBE TU NOMBRE Y PULSA INICIAR EXPERIENCIA';
      }
      if (accessNameError?.textContent?.includes('MOSTRAR MI NOMBRE')) {
        accessNameError.textContent = '';
      }
    } else {
      if (accessStatus && !gate?.classList.contains('granted')) {
        accessStatus.textContent = 'ACCESO BLOQUEADO · MARCA LA CASILLA OBLIGATORIA PARA CONTINUAR';
      }
    }
  }

  shareLiveIdentity?.addEventListener('change', updateAccessButtonState);
  updateAccessButtonState();

  enterBtn?.addEventListener('click',grantAccess);
  aliasInput?.addEventListener('keydown',e=>{
    if(e.key==='Enter'){
      e.preventDefault();
      grantAccess();
    }
  });

  window.addEventListener('alex:access-granted', (event) => {
    const registeredName = String(event?.detail?.alias || chatOwnName() || '').trim();
    if (chatIdentity) chatIdentity.textContent = registeredName || '—';
  });

  window.addEventListener('alex:access-granted', (event) => {
    const registeredName = String(event?.detail?.alias || getRegisteredAccessName() || '').trim();
    queueRegisteredWelcome(registeredName);
  });



  // ---------- ALEX NEON RUSH MINI GAME ----------
  const gameLauncher = document.getElementById('gameLauncher');
  const gameModal = document.getElementById('gameModal');
  const gameArena = document.getElementById('gameArena');
  const gameStart = document.getElementById('gameStart');
  const gameRestart = document.getElementById('gameRestart');
  const gameScoreEl = document.getElementById('gameScore');
  const gameBestEl = document.getElementById('gameBest');
  const gameTimeEl = document.getElementById('gameTime');
  const gameComboEl = document.getElementById('gameCombo');
  const gamePlayerEl = document.getElementById('gamePlayer');
  const gameReady = document.getElementById('gameReady');

  let gameScore = 0;
  let gameCombo = 0;
  let gameTime = 30;
  let gameRunning = false;
  let gameTimer = null;
  let gameSpawnTimer = null;
  let currentOrb = null;

  function readGameBest(){
    try{return Math.max(0,Number(localStorage.getItem('alex-neon-rush-best')||0));}
    catch(_){return 0;}
  }

  function writeGameBest(value){
    try{localStorage.setItem('alex-neon-rush-best',String(value));}catch(_){}
  }

  function gameRegisteredName(){
    try{return String(localStorage.getItem('alex-alias')||'').trim() || 'PLAYER';}
    catch(_){return 'PLAYER';}
  }

  function updateGameHud(){
    if(gameScoreEl) gameScoreEl.textContent=String(Math.max(0,gameScore));
    if(gameBestEl) gameBestEl.textContent=String(readGameBest());
    if(gameTimeEl) gameTimeEl.textContent=String(gameTime);
    if(gameComboEl) gameComboEl.textContent=`x${gameCombo}`;
    if(gamePlayerEl) gamePlayerEl.textContent=gameRegisteredName();
  }

  function openGame(){
    if(!gameModal) return;
    updateGameHud();
    gameModal.classList.add('open');
    gameModal.setAttribute('aria-hidden','false');
    gameLauncher?.setAttribute('aria-expanded','true');
    document.body.style.overflow='hidden';
  }

  function closeGame(){
    stopGame(false);
    gameModal?.classList.remove('open');
    gameModal?.setAttribute('aria-hidden','true');
    gameLauncher?.setAttribute('aria-expanded','false');
    document.body.style.overflow='';
  }

  function removeCurrentOrb(){
    if(currentOrb){
      currentOrb.remove();
      currentOrb=null;
    }
  }

  function scorePop(x,y,value){
    if(!gameArena) return;
    const pop=document.createElement('span');
    pop.className=`game-score-pop ${value>=0?'good':'bad'}`;
    pop.textContent=value>0?`+${value}`:String(value);
    pop.style.left=`${x}px`;
    pop.style.top=`${y}px`;
    gameArena.appendChild(pop);
    setTimeout(()=>pop.remove(),600);
  }

  function spawnOrb(){
    if(!gameRunning || !gameArena) return;
    removeCurrentOrb();

    const rect=gameArena.getBoundingClientRect();
    const margin=38;
    const x=margin+Math.random()*Math.max(10,rect.width-margin*2);
    const y=margin+Math.random()*Math.max(10,rect.height-margin*2);

    const roll=Math.random();
    const type=roll<.58?'green':roll<.84?'blue':'red';
    const value=type==='green'?10:type==='blue'?20:-15;

    const orb=document.createElement('button');
    orb.type='button';
    orb.className=`game-orb ${type}`;
    orb.setAttribute('aria-label',type==='red'?'Glitch':'Energy core');
    orb.style.left=`${x}px`;
    orb.style.top=`${y}px`;
    currentOrb=orb;
    gameArena.appendChild(orb);

    let caught=false;
    orb.addEventListener('pointerdown',(event)=>{
      if(!gameRunning || caught) return;
      caught=true;
      const bonus=value>0 ? Math.min(20,gameCombo*2) : 0;
      const finalValue=value>0 ? value+bonus : value;
      gameScore=Math.max(0,gameScore+finalValue);

      if(value>0) gameCombo+=1;
      else gameCombo=0;

      updateGameHud();
      scorePop(x,y,finalValue);
      orb.classList.add('hit');
      setTimeout(()=>orb.remove(),160);
      if(currentOrb===orb) currentOrb=null;

      clearTimeout(gameSpawnTimer);
      gameSpawnTimer=setTimeout(spawnOrb,150+Math.random()*250);
    },{once:true});

    const lifetime=Math.max(520,1050-(30-gameTime)*10);
    gameSpawnTimer=setTimeout(()=>{
      if(!gameRunning || currentOrb!==orb) return;
      orb.remove();
      currentOrb=null;
      gameCombo=0;
      updateGameHud();
      spawnOrb();
    },lifetime);
  }

  function finishGame(){
    gameRunning=false;
    clearInterval(gameTimer);
    clearTimeout(gameSpawnTimer);
    gameTimer=null;gameSpawnTimer=null;
    removeCurrentOrb();

    const previousBest=readGameBest();
    const isRecord=gameScore>previousBest;
    if(isRecord) writeGameBest(gameScore);
    updateGameHud();

    if(gameReady){
      gameReady.style.display='grid';
      const strong=gameReady.querySelector('strong');
      const span=gameReady.querySelector('span');
      if(strong) strong.textContent=isRecord?t('game_new_record'):t('game_finished');
      if(span) span.textContent=`${t('game_score')}: ${gameScore}`;
    }
    if(gameRestart) gameRestart.disabled=false;
  }

  function startGame(){
    clearInterval(gameTimer);
    clearTimeout(gameSpawnTimer);
    removeCurrentOrb();

    gameScore=0;
    gameCombo=0;
    gameTime=30;
    gameRunning=true;
    if(gameRestart) gameRestart.disabled=true;
    if(gameReady) gameReady.style.display='none';
    updateGameHud();

    spawnOrb();
    gameTimer=setInterval(()=>{
      gameTime-=1;
      updateGameHud();
      if(gameTime<=0) finishGame();
    },1000);
  }

  function stopGame(resetReady=true){
    if(!gameRunning && !gameTimer && !gameSpawnTimer) return;
    gameRunning=false;
    clearInterval(gameTimer);
    clearTimeout(gameSpawnTimer);
    gameTimer=null;gameSpawnTimer=null;
    removeCurrentOrb();
    if(resetReady && gameReady) gameReady.style.display='grid';
  }

  gameLauncher?.addEventListener('click',openGame);
  document.querySelectorAll('[data-close-game]').forEach(el=>el.addEventListener('click',closeGame));
  gameStart?.addEventListener('click',startGame);
  gameRestart?.addEventListener('click',startGame);
  window.addEventListener('keydown',(event)=>{
    if(event.key==='Escape' && gameModal?.classList.contains('open')) closeGame();
  });
  updateGameHud();


  // ---------- Global customer chat ----------
  const chatLauncher = document.getElementById('globalChatLauncher');
  const chatPanel = document.getElementById('globalChatPanel');
  const chatClose = document.getElementById('globalChatClose');
  const chatMessages = document.getElementById('globalChatMessages');
  const chatEmpty = document.getElementById('globalChatEmpty');
  const chatForm = document.getElementById('globalChatForm');
  const chatInput = document.getElementById('globalChatInput');
  const chatCount = document.getElementById('globalChatCount');
  const chatSend = document.getElementById('globalChatSend');
  const chatError = document.getElementById('globalChatError');
  const chatIdentity = document.getElementById('globalChatIdentity');
  const chatHistory = document.getElementById('globalChatHistory');

  let chatLatestId = 0;
  let chatOldestId = 0;
  let chatHasMore = false;
  let chatLoaded = false;
  let chatPolling = null;

  function escapeFlag(code){
    const cc=String(code||'').toUpperCase();
    if(!/^[A-Z]{2}$/.test(cc)) return '🌐';
    return String.fromCodePoint(...[...cc].map(c=>127397+c.charCodeAt()));
  }

  function chatTimeLabel(value){
    try{
      return new Intl.DateTimeFormat(localeForLanguage(activeLanguage),{
        hour:'2-digit',minute:'2-digit'
      }).format(new Date(value));
    }catch(_){ return ''; }
  }

  function chatOwnName(){
    try{return String(localStorage.getItem('alex-alias')||'').trim();}catch(_){return '';}
  }

  function renderChatMessage(item, prepend=false){
    if(!chatMessages || !item || document.querySelector(`[data-chat-id="${item.id}"]`)) return;
    if(chatEmpty) chatEmpty.hidden=true;

    const wrap=document.createElement('article');
    wrap.className='global-chat-message';
    wrap.dataset.chatId=item.id;

    if(chatOwnName() && String(item.display_name||'').toLowerCase()===chatOwnName().toLowerCase()){
      wrap.classList.add('own');
    }

    const meta=document.createElement('div');
    meta.className='global-chat-meta';

    const name=document.createElement('strong');
    // Mostrar exactamente el nombre guardado al registrarse.
    name.textContent=item.display_name||'—';

    const region=document.createElement('span');
    region.textContent=`${escapeFlag(item.country_code)} ${item.country||''}`.trim();

    const time=document.createElement('span');
    time.textContent=chatTimeLabel(item.created_at);

    const body=document.createElement('div');
    body.className='global-chat-text';
    body.textContent=item.message||'';

    meta.append(name,region,time);
    wrap.append(meta,body);

    if (prepend) {
      const firstMessage = chatMessages.querySelector('.global-chat-message');
      if (firstMessage) chatMessages.insertBefore(wrap, firstMessage);
      else chatMessages.appendChild(wrap);
    } else {
      chatMessages.appendChild(wrap);
    }
  }

  async function loadChat(initial=false){
    if(!window.ALEX_STORE?.chatUrl || !chatMessages) return;

    try{
      const suffix=(!initial && chatLatestId)
        ? `?after=${encodeURIComponent(chatLatestId)}`
        : '';

      const res=await fetch(`${window.ALEX_STORE.chatUrl}${suffix}`,{cache:'no-store'});
      if(!res.ok) return;

      const data=await res.json();
      const messages=data.messages||[];

      messages.forEach(item => renderChatMessage(item, false));

      if (messages.length) {
        chatLatestId=Math.max(chatLatestId, Number(data.latest_id||0), ...messages.map(m=>Number(m.id||0)));
        const batchOldest=Math.min(...messages.map(m=>Number(m.id||0)).filter(Boolean));
        if (batchOldest) chatOldestId = chatOldestId ? Math.min(chatOldestId,batchOldest) : batchOldest;
      }

      if (initial) {
        chatHasMore=Boolean(data.has_more);
        if (chatHistory) chatHistory.hidden=!chatHasMore;
      }

      if(initial && chatMessages.scrollHeight) chatMessages.scrollTop=chatMessages.scrollHeight;
      else if(messages.length) chatMessages.scrollTop=chatMessages.scrollHeight;

      chatLoaded=true;
    }catch(_){}
  }

  async function loadOlderChat(){
    if(!chatOldestId || !window.ALEX_STORE?.chatUrl || !chatMessages) return;

    if(chatHistory) chatHistory.disabled=true;

    const previousHeight=chatMessages.scrollHeight;

    try{
      const res=await fetch(
        `${window.ALEX_STORE.chatUrl}?before=${encodeURIComponent(chatOldestId)}`,
        {cache:'no-store'}
      );
      if(!res.ok) return;

      const data=await res.json();
      const messages=data.messages||[];

      // Insertar del más nuevo al más viejo delante del primer mensaje,
      // para conservar el orden cronológico final.
      [...messages].reverse().forEach(item => renderChatMessage(item, true));

      if(messages.length){
        chatOldestId=Math.min(
          chatOldestId,
          ...messages.map(m=>Number(m.id||0)).filter(Boolean)
        );
      }

      chatHasMore=Boolean(data.has_more);
      if(chatHistory) chatHistory.hidden=!chatHasMore;

      // Mantener la posición visual mientras aparecen mensajes antiguos arriba.
      chatMessages.scrollTop=chatMessages.scrollHeight-previousHeight;
    }catch(_){
    }finally{
      if(chatHistory) chatHistory.disabled=false;
    }
  }

  chatHistory?.addEventListener('click',loadOlderChat);

  function openGlobalChat(){
    if(!chatPanel) return;
    const registeredName = chatOwnName();
    if(chatIdentity) chatIdentity.textContent = registeredName || '—';
    chatPanel.classList.add('open');
    chatPanel.setAttribute('aria-hidden','false');
    chatLauncher?.setAttribute('aria-expanded','true');
    if(!chatLoaded) loadChat(true);
    if(!chatPolling) chatPolling=setInterval(()=>loadChat(false),3500);
    setTimeout(()=>chatInput?.focus(),120);
  }

  function closeGlobalChat(){
    chatPanel?.classList.remove('open');
    chatPanel?.setAttribute('aria-hidden','true');
    chatLauncher?.setAttribute('aria-expanded','false');
    if(chatPolling){clearInterval(chatPolling);chatPolling=null;}
  }

  chatLauncher?.addEventListener('click',()=>{
    if(chatPanel?.classList.contains('open')) closeGlobalChat(); else openGlobalChat();
  });
  chatClose?.addEventListener('click',closeGlobalChat);

  chatInput?.addEventListener('input',()=>{
    if(chatCount) chatCount.textContent=String(chatInput.value.length);
    if(chatError) chatError.textContent='';
  });

  chatForm?.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const message=String(chatInput?.value||'').trim();
    if(!message || !window.ALEX_STORE?.chatUrl) return;

    if(chatSend) chatSend.disabled=true;
    if(chatError) chatError.textContent='';

    try{
      const res=await fetch(window.ALEX_STORE.chatUrl,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          message
        })
      });
      const data=await res.json().catch(()=>({}));
      if(!res.ok || !data.ok){
        const error=data.error||'send_error';
        if(chatError){
          chatError.textContent =
            error==='registration_required' ? t('chat_registration_required') :
            error==='private_contact_not_allowed' ? t('chat_private_contact') :
            error==='slow_down' ? t('chat_slow_down') :
            t('chat_send_error');
        }
        return;
      }
      renderChatMessage(data.message);
      chatLatestId=Math.max(chatLatestId,Number(data.message?.id||0));
      if(chatInput){chatInput.value='';chatInput.focus();}
      if(chatCount) chatCount.textContent='0';
      if(chatMessages) chatMessages.scrollTop=chatMessages.scrollHeight;
    }catch(_){
      if(chatError) chatError.textContent=t('chat_send_error');
    }finally{
      if(chatSend) chatSend.disabled=false;
    }
  });


})();
