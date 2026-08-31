(function () {
  const footerMarkup = `<footer><div class="wrap footer-grid"><div class="footer-brand"><a class="logo" href="/" style="color:#ece2e2;"><span class="mark">💚</span>Karachi Best <b style="color:var(--accent);">Escorts</b></a><p>Karachi Best Escorts provides verified VIP, luxury, and independent escorts and call girls across Karachi. Our discreet services ensure elite companionship customized to your preferences.</p></div><div><h4>Services</h4><ul><li><a href="/services/VIP-Escorts/">VIP Escorts</a></li><li><a href="/services/Young-Escorts/">Young Escorts</a></li><li><a href="/services/Quick-meet/">Quick Meet Package</a></li><li><a href="/services/Hourly-Escort/">Hourly Escort Package</a></li></ul></div><div><h4>Areas</h4><ul><li><a href="/areas-we-serve/dha-defence/">DHA Defence</a></li><li><a href="/areas-we-serve/clifton/">Clifton</a></li><li><a href="/areas-we-serve/bahria-town/">Bahria Town</a></li><li><a href="/areas-we-serve/">All Karachi Areas →</a></li></ul></div><div><h4>Get in touch</h4><ul><li><a href="tel:+923350246669">+92 335 0246669</a></li><li><a href="https://wa.me/923350246669">WhatsApp us</a></li><li><a href="/faq/">FAQ</a></li><li><a href="/about/">About us</a></li></ul></div></div><div class="wrap footer-bottom"><span>© 2026 Karachi Best Escorts. All rights reserved.</span><span>karachibestescorts.com <a href="/contact/">Contact</a></span></div></footer>`;
  const existingFooter = document.querySelector('footer');
  if (existingFooter) existingFooter.outerHTML = footerMarkup;
  else document.body.insertAdjacentHTML('beforeend', footerMarkup);

  const nav = document.querySelector('.primary');
  if (nav && !nav.querySelector('a[href="/blog/"]')) nav.insertAdjacentHTML('beforeend', '<a href="/blog/">Blogs</a>');
  const mobileMenu = document.querySelector('.mobile-nav');
  if (mobileMenu && !mobileMenu.querySelector('a[href="/blog/"]')) mobileMenu.insertAdjacentHTML('beforeend', '<a class="mn-link" href="/blog/">Blogs</a>');

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
    const closeMobileNav = () => {
      mobileNav.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    };
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('menu-open', isOpen);
    });
    mnCloseBtn.addEventListener('click', closeMobileNav);
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileNav));
    mobileNav.addEventListener('click', (event) => {
      if (event.target === mobileNav) closeMobileNav();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMobileNav();
    });
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
