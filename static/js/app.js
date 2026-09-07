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
  const continueButton = document.getElementById('continueWhatsapp');
  const toast = document.getElementById('toast');
  const clock = document.getElementById('liveClock');
  const visitorCount = document.getElementById('visitorCount');
  const orderCount = document.getElementById('orderCount');
  const epicEntry = document.getElementById('epicEntry');
  const entryCountry = document.getElementById('entryCountry');
  const entryProgressBar = document.getElementById('entryProgressBar');
  const entryProgressText = document.getElementById('entryProgressText');
  const entryStatusText = document.getElementById('entryStatusText');
  const currentVisitorCountry = document.getElementById('currentVisitorCountry');
  const visitorSessionLabel = document.getElementById('visitorSessionLabel');
  const visitorFeedMini = document.getElementById('visitorFeedMini');
  const visitorToast = document.getElementById('visitorToast');
  const visitorToastText = document.getElementById('visitorToastText');
  const liveVisitorTicker = document.getElementById('liveVisitorTicker');
  let lastVisitorEventId = 0;
  const socialModal = document.getElementById('socialModal');
  const socialModalNetwork = document.getElementById('socialModalNetwork');
  const socialModalService = document.getElementById('socialModalService');
  const socialModalQuantity = document.getElementById('socialModalQuantity');
  const socialTarget = document.getElementById('socialTarget');
  const socialWhatsapp = document.getElementById('socialWhatsapp');
  const detailsModal = document.getElementById('detailsModal');
  const detailsTitle = document.getElementById('detailsTitle');
  const detailsDescription = document.getElementById('detailsDescription');
  const detailsPlans = document.getElementById('detailsPlans');
  const detailsInfo = document.getElementById('detailsInfo');
  const detailsNotes = document.getElementById('detailsNotes');
  const detailsWhatsapp = document.getElementById('detailsWhatsapp');
  let detailsProduct = null;

  let currentFilter = 'all';
  let selectedOrder = null;
  let selectedPayment = null;
  let selectedSocialOrder = null;

  document.getElementById('year').textContent = new Date().getFullYear();

  function updateClock(){
    const now = new Date();
    clock && (clock.textContent = now.toLocaleTimeString('es-PE', {hour12:false}));
  }
  updateClock();
  setInterval(updateClock, 1000);

  // Entrada Premium Access: se inicia DESPUÉS del portal de acceso.
  let epicFinished = false;
  let epicStarted = false;
  function finishEpicEntry(){
    if (!epicEntry || epicFinished) return;
    epicFinished = true;
    if (entryProgressBar) entryProgressBar.classList.add('ready');
    if (entryProgressText) entryProgressText.textContent = '100%';
    if (entryStatusText) entryStatusText.textContent = 'ACCESO PREMIUM LISTO';
    setTimeout(() => {
      epicEntry.classList.add('exit');
      setTimeout(() => epicEntry.remove(), 750);
    }, 420);
  }
  function startEpicEntry(){
    if (!epicEntry || epicStarted) return;
    epicStarted = true;
    epicEntry.style.opacity = '';
    epicEntry.style.visibility = '';
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const started = performance.now();
    const duration = reduceMotion ? 250 : 3600;
    const tick = (now) => {
      if (epicFinished) return;
      const p = Math.min(96, Math.floor(((now - started) / duration) * 100));
      if (entryProgressBar) entryProgressBar.style.setProperty('width', `${p}%`, 'important');
      if (entryProgressText) entryProgressText.textContent = `${p}%`;
      if (p < 28 && entryStatusText) entryStatusText.textContent = 'CARGANDO CATÁLOGO PREMIUM';
      else if (p < 58 && entryStatusText) entryStatusText.textContent = 'SINCRONIZANDO STREAMING E IA';
      else if (p < 84 && entryStatusText) entryStatusText.textContent = 'VERIFICANDO CONEXIÓN';
      else if (entryStatusText) entryStatusText.textContent = 'PREPARANDO EXPERIENCIA';
      if (p < 96) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    setTimeout(finishEpicEntry, reduceMotion ? 350 : 4050);
  }
  window.addEventListener('alex:access-granted', startEpicEntry, {once:true});


  function countryFlag(code){
    const value = String(code || '').toUpperCase();
    if (!/^[A-Z]{2}$/.test(value)) return '🌐';
    return String.fromCodePoint(...[...value].map(char => 127397 + char.charCodeAt(0)));
  }

  function countryNameFromCode(code){
    const value = String(code || '').toUpperCase();
    if (!/^[A-Z]{2}$/.test(value)) return '';
    try { return new Intl.DisplayNames(['es'], {type:'region'}).of(value) || value; }
    catch (_) { return value; }
  }

  function safeCountry(country, code){
    let value = String(country || '').trim();
    if (/^[A-Za-z]{2}$/.test(value)) value = countryNameFromCode(value);
    if (!value && code) value = countryNameFromCode(code);
    return (value || 'País no disponible').slice(0, 80);
  }

  function updateCountryUI(country, code, source='ip'){
    const resolved = safeCountry(country, code);
    const label = `${countryFlag(code)} ${resolved}`;
    if (currentVisitorCountry) currentVisitorCountry.textContent = label.toUpperCase();
    if (entryCountry) {
      entryCountry.dataset.geo = resolved === 'País no disponible' ? 'error' : (source === 'locale' ? 'fallback' : 'ok');
      const span = entryCountry.querySelector('span');
      if (span) span.textContent = `CONEXIÓN DESDE ${label.toUpperCase()}${source === 'locale' ? ' · REGIÓN DEL DISPOSITIVO' : ''}`;
    }
    if (liveVisitorTicker) liveVisitorTicker.textContent = `VISITOR_LIVE: ${label.toUpperCase()}`;
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
      item.innerHTML = `<span class="vid">VISITOR_${String(event.id || 0).padStart(4,'0')}</span><span>·</span><span class="country">${flag} ${safeCountry(event.country)}</span>`;
      visitorFeedMini.appendChild(item);
    });
  }

  let visitorToastTimer = null;
  function showVisitorToast(event){
    if (!visitorToast || !visitorToastText || !event) return;
    const flag = countryFlag(event.country_code);
    visitorToastText.textContent = `VISITOR_${String(event.id || 0).padStart(4,'0')} entró desde ${flag} ${safeCountry(event.country)}`;
    visitorToast.classList.add('show');
    clearTimeout(visitorToastTimer);
    visitorToastTimer = setTimeout(() => visitorToast.classList.remove('show'), 3600);
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

  async function registerPresence(){
    // Incluso la vista previa content:// intenta resolver el país por IP desde el navegador.
    const fallback = await detectCountryFallback();
    updateCountryUI(fallback.country, fallback.country_code, fallback.source);

    if (location.protocol === 'file:' || location.protocol === 'content:') {
      if (visitorSessionLabel) visitorSessionLabel.textContent = 'PREVIEW';
      return fallback;
    }

    const url = window.ALEX_STORE?.presenceUrl || '/api/presence';
    try {
      const response = await fetch(url, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({country:fallback.country, country_code:fallback.country_code}),
        cache:'no-store'
      });
      if (!response.ok) throw new Error('presence');
      const data = await response.json();
      const source = (data.country && data.country !== 'País no disponible') ? 'ip' : fallback.source;
      updateCountryUI(data.country || fallback.country, data.country_code || fallback.country_code, source);
      renderVisitorFeed(data.feed || []);
      lastVisitorEventId = Number(data.latest_id || 0);
      if (data.event) {
        if (visitorSessionLabel) visitorSessionLabel.textContent = `VISITOR_${String(data.event.id).padStart(4,'0')}`;
        showVisitorToast(data.event);
      } else if (visitorSessionLabel) {
        visitorSessionLabel.textContent = 'RETURNING';
      }
      if (data.stats?.visitors != null && visitorCount) visitorCount.textContent = Number(data.stats.visitors).toLocaleString('es-PE');
      return data;
    } catch (_) {
      if (visitorSessionLabel) visitorSessionLabel.textContent = 'LIVE';
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

  registerPresence();
  setInterval(pollVisitorFeed, 12000);

  async function refreshStats(){
    const url = window.ALEX_STORE?.statsUrl || '/api/stats';
    try {
      const response = await fetch(url, { cache: 'no-store' });
      if (!response.ok) return;
      const data = await response.json();
      if (visitorCount && Number.isFinite(Number(data.visitors))) visitorCount.textContent = Number(data.visitors).toLocaleString('es-PE');
      if (orderCount && Number.isFinite(Number(data.orders))) orderCount.textContent = Number(data.orders).toLocaleString('es-PE');
    } catch (_) {
      // La vista previa en archivo local no tiene API; simplemente conserva los valores iniciales.
    }
  }
  refreshStats();
  setInterval(refreshStats, 15000);

  async function trackOrderIntent(order, payment){
    const url = window.ALEX_STORE?.trackOrderUrl || '/api/track-order';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ product: order.product, plan: order.plan, payment })
      });
      if (!response.ok) return;
      const data = await response.json();
      if (orderCount && Number.isFinite(Number(data.orders))) orderCount.textContent = Number(data.orders).toLocaleString('es-PE');
    } catch (_) {}
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
    if (e.key === 'Escape' && detailsModal?.classList.contains('open')) closeDetails();
  });

  document.querySelectorAll('.plan-select').forEach(select => {
    select.addEventListener('change', () => {
      const card = select.closest('.product-card');
      const option = select.options[select.selectedIndex];
      const label = option.dataset.priceLabel || 'Consultar';
      card.querySelector('.price-wrap strong').textContent = label;
    });
  });

  function openCheckout(button) {
    const card = button.closest('.product-card');
    const select = card.querySelector('.plan-select');
    const option = select.options[select.selectedIndex];
    const planText = option.textContent.split('·')[0].trim();
    const rawPrice = option.dataset.price;
    const priceLabel = option.dataset.priceLabel || 'Consultar';
    const price = rawPrice ? Number(rawPrice).toFixed(2) : '';
    selectedOrder = { product: button.dataset.product, plan: planText, price, priceLabel, currency: button.dataset.currency };
    selectedPayment = null;
    modalProduct.textContent = selectedOrder.product;
    modalPlan.textContent = selectedOrder.plan;
    modalPrice.textContent = selectedOrder.price ? `${selectedOrder.currency} ${selectedOrder.price}` : selectedOrder.priceLabel;
    paymentButtons.forEach(btn => { btn.classList.remove('selected'); btn.querySelector('i').textContent = '○'; });
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

  paymentButtons.forEach(button => {
    button.addEventListener('click', () => {
      selectedPayment = button.dataset.method;
      paymentButtons.forEach(btn => {
        const selected = btn === button;
        btn.classList.toggle('selected', selected);
        btn.querySelector('i').textContent = selected ? '●' : '○';
      });
      continueButton.disabled = false;
    });
  });

  continueButton.addEventListener('click', () => {
    if (!selectedOrder || !selectedPayment) return;
    const message = [
      'Hola Alex Streaming 👋', '', 'Quiero realizar este pedido:',
      `• Plataforma: ${selectedOrder.product}`,
      `• Plan: ${selectedOrder.plan}`,
      `• Precio: ${selectedOrder.price ? `${selectedOrder.currency} ${selectedOrder.price}` : selectedOrder.priceLabel}`,
      `• Método de pago: ${selectedPayment}`, '',
      '¿Me indicas los datos para continuar con el pago?'
    ].join('\n');
    toast?.classList.add('show');
    setTimeout(() => toast?.classList.remove('show'), 1300);
    trackOrderIntent(selectedOrder, selectedPayment);
    const url = `https://wa.me/${window.ALEX_STORE.whatsapp}?text=${encodeURIComponent(message)}`;
    setTimeout(() => window.open(url, '_blank', 'noopener'), 180);
  });


  function openDetails(button) {
    const id = button.dataset.productId;
    detailsProduct = (window.ALEX_PRODUCTS || []).find(p => p.id === id);
    if (!detailsProduct || !detailsModal) return;
    detailsTitle.textContent = detailsProduct.name;
    detailsDescription.textContent = detailsProduct.description || '';
    detailsPlans.innerHTML = (detailsProduct.plans || []).length
      ? `<div class="details-plan-title">MODALIDADES DISPONIBLES</div>` + (detailsProduct.plans || []).map(plan =>
          `<div class="details-plan-name"><span>${plan.name}</span></div>`
        ).join('')
      : '';
    detailsInfo.innerHTML = (detailsProduct.details || []).length
      ? `<h3>INCLUYE</h3><ul>${detailsProduct.details.map(x => `<li>${x}</li>`).join('')}</ul>` : '';
    detailsNotes.innerHTML = (detailsProduct.notes || []).length
      ? `<h3>CONDICIONES</h3><ul>${detailsProduct.notes.map(x => `<li>${x}</li>`).join('')}</ul>` : '';
    detailsModal.classList.add('open');
    detailsModal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }

  function closeDetails() {
    if (!detailsModal) return;
    detailsModal.classList.remove('open');
    detailsModal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.details-btn').forEach(button => button.addEventListener('click', () => openDetails(button)));
  document.querySelectorAll('[data-close-details]').forEach(el => el.addEventListener('click', closeDetails));
  detailsWhatsapp?.addEventListener('click', () => {
    if (!detailsProduct) return;
    const message = ['Hola Alex Streaming 👋','',`Quiero información sobre: ${detailsProduct.name}`,'','¿Me indicas disponibilidad y condiciones?'].join('\
');
    window.open(`https://wa.me/${window.ALEX_STORE.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
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

  socialWhatsapp?.addEventListener('click', () => {
    if (!selectedSocialOrder) return;
    const target = (socialTarget?.value || '').trim();
    const message = [
      'Hola Alex Streaming 👋', '',
      'Quiero solicitar una cotización de campaña social:',
      `• Red: ${selectedSocialOrder.network}`,
      `• Objetivo: ${selectedSocialOrder.service}`,
      `• Cantidad: ${Number(selectedSocialOrder.quantity).toLocaleString('es-PE')}`,
      target ? `• Enlace / usuario: ${target}` : '• Enlace / usuario: lo envío por chat',
      '',
      '¿Me indicas disponibilidad, precio y condiciones?'
    ].join('\n');
    toast.textContent = 'COTIZACIÓN PREPARADA';
    toast?.classList.add('show');
    setTimeout(() => toast?.classList.remove('show'), 1300);
    const url = `https://wa.me/${window.ALEX_STORE.whatsapp}?text=${encodeURIComponent(message)}`;
    setTimeout(() => window.open(url, '_blank', 'noopener'), 180);
  });

  // Matrix background ligero: solo visual, no afecta el contenido.
  const canvas = document.getElementById('matrixCanvas');
  const ctx = canvas?.getContext('2d');
  let drops = [];
  const chars = '01AXSTREAMING<>/{}[]$#';
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
    ctx.fillStyle = 'rgba(2,4,5,.075)'; ctx.fillRect(0,0,innerWidth,innerHeight);
    ctx.font = `${fontSize}px JetBrains Mono`;
    ctx.fillStyle = '#68ffb8';
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
// V14 — ACCESS PORTAL + ALEX PULSE + ALEX GUIDE IN MOTION
// ============================================================
(() => {
  const gate = document.getElementById('accessGate');
  const enterBtn = document.getElementById('accessEnter');
  const aliasInput = document.getElementById('accessAlias');
  const accessStatus = document.getElementById('accessStatus');
  const mascot = document.getElementById('animeGuide');
  const bubble = document.getElementById('animeGuideBubble');
  const musicBtn = document.getElementById('musicToggle');
  const isDesktop = () => window.matchMedia('(min-width: 901px)').matches;

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

  // ---------- Access portal ----------
  function grantAccess(){
    if (!gate || gate.classList.contains('exit')) return;
    const alias=(aliasInput?.value||'').trim().slice(0,24) || 'Visitante';
    localStorage.setItem('alex-alias',alias);
    if(accessStatus) accessStatus.textContent=`ACCESO CONCEDIDO · BIENVENIDO ${alias.toUpperCase()}`;
    gate.classList.add('granted');
    startMusic(); // button click is a user gesture, so browsers allow audio here.
    setTimeout(()=>{
      document.body.classList.remove('access-locked');
      gate.classList.add('exit');
      window.dispatchEvent(new CustomEvent('alex:access-granted',{detail:{alias}}));
      setTimeout(()=>gate.remove(),700);
      const strong=bubble?.querySelector('strong');
      if(strong) strong.textContent=`Bienvenido, ${alias} ✦`;
    },520);
  }
  if(aliasInput){ aliasInput.value=localStorage.getItem('alex-alias')||''; }
  enterBtn?.addEventListener('click',grantAccess);
  aliasInput?.addEventListener('keydown',e=>{if(e.key==='Enter') grantAccess();});

  // ---------- Moving guide ----------
  const guideMessages = [
    {id:'inicio', text:'Bienvenido a Alex Streaming ✦'},
    {id:'catalogo', text:'Elige tu plataforma o herramienta.'},
    {id:'redes', text:'Panel de redes listo para cotizar.'},
    {id:'pagos', text:'Yape, Plin, BCP y Binance.'},
    {id:'como-comprar', text:'3 pasos y terminas por WhatsApp.'}
  ];
  function currentGuideMessage(){
    let selected=guideMessages[0], y=scrollY+innerHeight*.46;
    guideMessages.forEach(item=>{const el=document.getElementById(item.id);if(el&&el.offsetTop<=y) selected=item;});
    return selected.text;
  }
  let lastY=scrollY,lastX=0,walkTimer=null,lastText='';
  function moveMascot(){
    if(!mascot||!isDesktop()) return;
    const maxScroll=Math.max(1,document.documentElement.scrollHeight-innerHeight);
    const progress=Math.min(1,Math.max(0,scrollY/maxScroll));
    const minX=18,maxX=Math.max(minX,innerWidth-145);
    // Moves left-to-right through first half, then back right-to-left in second half.
    const waveProgress=progress<.5?progress*2:(1-progress)*2;
    const x=minX+(maxX-minX)*waveProgress;
    const y=Math.sin(scrollY/115)*7;
    const dir=x>=lastX?'right':'left'; lastX=x;
    mascot.dataset.side=x>innerWidth*.64?'right':'left';
    mascot.dataset.dir=dir;
    mascot.style.transform=`translate3d(${x}px,${y}px,0) scaleX(${dir==='left'?-1:1})`;
    // Keep text readable even when the character flips.
    if(bubble) bubble.style.transform=`scaleX(${dir==='left'?-1:1})`;
    const text=currentGuideMessage();
    if(bubble&&text!==lastText){const strong=bubble.querySelector('strong');if(strong)strong.textContent=text;lastText=text;}
    if(Math.abs(scrollY-lastY)>2){
      mascot.classList.add('walking'); clearTimeout(walkTimer); walkTimer=setTimeout(()=>mascot.classList.remove('walking'),420);
    }
    lastY=scrollY;
  }
  addEventListener('scroll',()=>requestAnimationFrame(moveMascot),{passive:true});
  addEventListener('resize',moveMascot,{passive:true});
  if(mascot&&isDesktop()){
    addEventListener('mousemove',e=>{
      const nx=(e.clientX/innerWidth-.5)*8,ny=(e.clientY/innerHeight-.5)*6;
      mascot.style.filter=`drop-shadow(${nx*-.4}px ${ny*-.4}px 22px rgba(82,214,255,.12))`;
    },{passive:true});
  }
  moveMascot();
})();
