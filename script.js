function revealOnScrollOnce() {
    const elements = document.querySelectorAll(
      '.product-card, .product, .section-title, .sale-section, .hero-content, .per h1, .per p, .top-sales'
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

const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');
const body = document.body;

const overlay = document.createElement('div');
overlay.className = 'mobile-nav-overlay';
document.body.appendChild(overlay);

burger.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  overlay.classList.toggle('active');
  body.classList.toggle('noscroll');
  burger.classList.toggle('fa-bars');
  burger.classList.toggle('fa-times');
});

overlay.addEventListener('click', () => {
  mobileNav.classList.remove('active');
  overlay.classList.remove('active');
  body.classList.remove('noscroll');
  burger.classList.remove('fa-times');
  burger.classList.add('fa-bars');
});

let lastScroll = 0;
const header = document.getElementById('site-header');
const scrollThreshold = 50;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
    header.classList.add('hide');
  } 
  else if (currentScroll < lastScroll) {
    header.classList.remove('hide');
  }

  lastScroll = currentScroll;
});