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

  let currentFilter = 'all';
  let selectedOrder = null;
  let selectedPayment = null;

  document.getElementById('year').textContent = new Date().getFullYear();

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

  document.querySelectorAll('.plan-select').forEach(select => {
    select.addEventListener('change', () => {
      const card = select.closest('.product-card');
      const option = select.options[select.selectedIndex];
      const price = Number(option.dataset.price).toFixed(2);
      card.querySelector('.price-wrap strong').textContent = `${window.ALEX_STORE.currency} ${price}`;
    });
  });

  function openCheckout(button) {
    const card = button.closest('.product-card');
    const select = card.querySelector('.plan-select');
    const option = select.options[select.selectedIndex];
    const planText = option.textContent.split('·')[0].trim();
    const price = Number(option.dataset.price).toFixed(2);

    selectedOrder = {
      product: button.dataset.product,
      plan: planText,
      price,
      currency: button.dataset.currency
    };
    selectedPayment = null;

    modalProduct.textContent = selectedOrder.product;
    modalPlan.textContent = selectedOrder.plan;
    modalPrice.textContent = `${selectedOrder.currency} ${selectedOrder.price}`;
    paymentButtons.forEach(btn => btn.classList.remove('selected'));
    paymentButtons.forEach(btn => btn.querySelector('i').textContent = '○');
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

  document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', () => openCheckout(button));
  });

  document.querySelectorAll('[data-close-modal]').forEach(el => {
    el.addEventListener('click', closeCheckout);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeCheckout();
  });

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
      'Hola Alex Streaming 👋',
      '',
      'Quiero realizar este pedido:',
      `• Plataforma: ${selectedOrder.product}`,
      `• Plan: ${selectedOrder.plan}`,
      `• Precio: ${selectedOrder.currency} ${selectedOrder.price}`,
      `• Método de pago: ${selectedPayment}`,
      '',
      '¿Me indicas los datos para continuar con el pago?'
    ].join('\n');

    const url = `https://wa.me/${window.ALEX_STORE.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
  });
})();
