function revealOnScrollOnce() {
    const elements = document.querySelectorAll(
      '.product-card, .product, .section-title, .sale-section, .hero-content, .per h1, .per p, .top-sales, .footer, .footer h2, .footer-links li, .social-icons a'
    );

    for (let el of elements) {
      if (el.classList.contains('active')) continue; // якщо вже з'явився — пропускаємо

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

  burger.addEventListener('click', () => {
    mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
  });