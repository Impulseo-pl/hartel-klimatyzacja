(() => {
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('.menu a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
  }));
  const onScroll = () => nav.classList.toggle('scrolled', scrollY > 10);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const els = document.querySelectorAll('.head, .card, .feature-in, .steps li, .gallery figure, .post, .review, .faq details, .form, .contact-info');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    els.forEach(el => { el.classList.add('rv'); io.observe(el); });
  }

  const form = document.getElementById('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const msg = form.querySelector('.form-msg');
    if (!form.imie.value.trim() || !form.tel.value.trim()) {
      msg.textContent = 'Podaj imię i telefon, żebyśmy mogli oddzwonić.';
      return;
    }
    msg.textContent = 'Wersja demo: na gotowej stronie zapytanie trafi na hartel.klima@wp.pl.';
    form.reset();
  });
})();
