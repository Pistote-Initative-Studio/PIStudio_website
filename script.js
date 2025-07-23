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
  const fadeDistance = 400; // distance in px over which hero fades out

  function handleHeroScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const progress = Math.min(Math.max(scrollY / fadeDistance, 0), 1);
    hero.style.opacity = 1 - progress;
  }

  window.addEventListener('scroll', handleHeroScroll);
  handleHeroScroll();
});
