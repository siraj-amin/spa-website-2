(function () {
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('shrink', window.scrollY > 20);
    }, { passive: true });
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  const mobileNav = document.getElementById('mobile-nav');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mnCloseBtn = document.getElementById('mn-close-btn');
  if (mobileNav && hamburgerBtn && mnCloseBtn) {
    hamburgerBtn.addEventListener('click', () => mobileNav.classList.add('open'));
    mnCloseBtn.addEventListener('click', () => mobileNav.classList.remove('open'));
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));
  }

  document.querySelectorAll('.faq-list').forEach(list => {
    const items = list.querySelectorAll('.faq-item');
    items.forEach(item => {
      const btn = item.querySelector('.faq-q');
      btn.addEventListener('click', () => {
        const wasOpen = item.classList.contains('open');
        items.forEach(other => {
          other.classList.remove('open');
          other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        });
        if (!wasOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  });
})();
