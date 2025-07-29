(function() {
  const heroTitle = document.querySelector('.hero h1');
  const heroSubtitle = document.querySelector('.hero h2');

  function updateHeroOpacity() {
    const start = 0;
    const end = 200;
    const scrollY = window.scrollY;
    let opacity = 1;

    if (scrollY <= start) {
      opacity = 1;
    } else if (scrollY >= end) {
      opacity = 0;
    } else {
      opacity = 1 - (scrollY - start) / (end - start);
    }

    heroTitle.style.opacity = opacity;
    heroSubtitle.style.opacity = opacity;
  }

  window.addEventListener('scroll', () => {
    requestAnimationFrame(updateHeroOpacity);
  });
updateHeroOpacity();
const video = document.querySelector('.background-video');
if (video) {
  video.play().catch(() => {});


    
  }
  y();
})();

