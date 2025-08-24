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

  const track = document.querySelector('.carousel-track');
  const slides = track ? Array.from(track.children) : [];
  const nextButton = document.querySelector('.carousel-button.next');
  const prevButton = document.querySelector('.carousel-button.prev');
  let currentIndex = 0;

  function updateSlide() {
    if (track) {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }

  if (nextButton && prevButton && slides.length > 0) {
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlide();
    });

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlide();
    });

    let startX = 0;
    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    track.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      if (endX - startX > 50) {
        prevButton.click();
      } else if (startX - endX > 50) {
        nextButton.click();
      }
    });
  }
})();

