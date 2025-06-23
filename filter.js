const openBtn = document.getElementById('openFilters');
const closeBtn = document.getElementById('closeFilters');
const overlay = document.getElementById('filterOverlay');
const modal = document.getElementById('filterModal');
const globalHeader = document.getElementById('filterHeader');

function closeAllPanels() {
  document.querySelectorAll('.filter-overlay-panel.active').forEach(panel => {
    panel.classList.remove('active');
  });
}

function openFilters() {
  modal?.classList.add('show');
  overlay?.classList.add('show');
  globalHeader?.classList.add('show');
  document.body.style.overflow = 'hidden';
  // НЕ відкриваємо жодної вкладеної панелі автоматично
}

function closeFilters() {
  modal?.classList.remove('show');
  overlay?.classList.remove('show');
  globalHeader?.classList.remove('show');
  document.body.style.overflow = '';
  closeAllPanels(); // ховаємо всі вкладені панелі при закритті фільтрів
}

// Відкриття головної панелі
openBtn?.addEventListener('click', openFilters);

// Закриття по кнопці "х"
closeBtn?.addEventListener('click', closeFilters);

// Закриття по overlay
overlay?.addEventListener('click', closeFilters);

// Відкриття вкладених панелей по кліку
document.querySelectorAll('[data-panel]').forEach(el => {
  el.addEventListener('click', () => {
    const panelId = el.dataset.panel;
    const panel = document.querySelector(panelId);
    if (panel) panel.classList.add('active');
  });
});

// Назад до головної панелі
document.querySelectorAll('.back-to-main').forEach(el => {
  el.addEventListener('click', () => {
    const target = el.dataset.close;
    const panel = document.querySelector(target);
    if (panel) panel.classList.remove('active');
  });
});

document.querySelectorAll('.back-to-main-span').forEach(el => {
  el.addEventListener('click', () => {
    const target = el.dataset.close;
    const panel = document.querySelector(target);
    if (panel) panel.classList.remove('active');
  });
});

const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');
const mobileOverlay = document.querySelector('.mobile-nav-overlay');

if (burger && mobileNav && mobileOverlay) {
  burger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.classList.toggle('noscroll');
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
  });

  mobileOverlay.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.classList.remove('noscroll');
    burger.classList.remove('fa-times');
    burger.classList.add('fa-bars');
  });
}

let lastScroll = 0;
const header = document.getElementById('site-header');
const scrollThreshold = 50;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
    header.classList.add('hide');
  } else if (currentScroll < lastScroll) {
    header.classList.remove('hide');
  }

  lastScroll = currentScroll;
});

function revealOnScrollOnce() {
  const elements = document.querySelectorAll(
   '.product-count, select, .products, .card'
);

  for (let el of elements) {
    if (el.classList.contains('active')) continue;

    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('active');
    }
  }
}


window.addEventListener('scroll', revealOnScrollOnce);
document.addEventListener('DOMContentLoaded', revealOnScrollOnce);

const buttons = document.querySelectorAll('.filter-item');
const groups = document.querySelectorAll('.filter-group');

buttons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    const isActive = btn.classList.contains('active');

    buttons.forEach((b, j) => {
      b.classList.remove('active');
      if (groups[j]) groups[j].classList.remove('open');
    });

    if (!isActive) {
      btn.classList.add('active');
      if (groups[i]) groups[i].classList.add('open');
    }
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.toolbar-left')) {
    buttons.forEach((b, j) => {
      b.classList.remove('active');
      if (groups[j]) groups[j].classList.remove('open');
    });
  }
});
