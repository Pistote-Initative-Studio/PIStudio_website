document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  const options = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, options);

  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.add('fade-in');
    observer.observe(sec);
  });

  const hero = document.getElementById('hero');
  const heroHeight = hero.offsetHeight;

  function handleHeroScroll() {
    const rect = hero.getBoundingClientRect();
    const progress = Math.min(Math.max(-rect.top / heroHeight, 0), 1);
    hero.style.opacity = 1 - progress;
    hero.style.transform = `translateY(-${progress * heroHeight * 0.5}px)`;
  }

  window.addEventListener('scroll', handleHeroScroll);
  handleHeroScroll();
});
