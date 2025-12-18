(function(){
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  // Header scroll state
  const header = document.querySelector('[data-header]');
  if(header){
    const onScroll = () => {
      header.setAttribute('data-scrolled', window.scrollY > 10 ? 'true' : 'false');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive:true });
  }


  // Mobile menu toggle
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      const open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
    });

    // Close menu on link click (mobile)
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.setAttribute('data-open','false');
        toggle.setAttribute('aria-expanded','false');
      });
    });
  }

  // Hero "headline slider" (simple)
  const slides = document.querySelectorAll('[data-hero-slide]');
  let idx = 0;
  function show(i){
    slides.forEach((s, n) => s.classList.toggle('is-active', n === i));
  }
  if(slides.length > 1){
    show(0);
    setInterval(() => {
      idx = (idx + 1) % slides.length;
      show(idx);
    }, 5200);
  }

})();
