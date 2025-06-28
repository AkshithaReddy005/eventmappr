// Vanilla JS carousel: shows 3 at a time, slides left/right with nav buttons
// No infinite loop, responsive, smooth animation

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.wellness-carousel');
  const cards = Array.from(document.querySelectorAll('.wellness-carousel-card'));
  const leftBtn = document.getElementById('wellness-carousel-left');
  const rightBtn = document.getElementById('wellness-carousel-right');

  // Responsive: how many cards per view
  function getCardsPerView() {
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 900) return 2;
    return 3;
  }

  let currentIndex = 0;
  let cardsPerView = getCardsPerView();

  function updateCarousel() {
    cardsPerView = getCardsPerView();
    const cardWidth = cards[0].offsetWidth;
    const gap = parseInt(window.getComputedStyle(carousel).gap) || 32;
    const offset = (cardWidth + gap) * currentIndex;
    carousel.style.transform = `translateX(-${offset}px)`;
    // Disable left btn if at start, right btn if at end
    leftBtn.disabled = currentIndex === 0;
    rightBtn.disabled = currentIndex >= cards.length - cardsPerView;
  }

  leftBtn.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
  rightBtn.addEventListener('click', function () {
    if (currentIndex < cards.length - cardsPerView) {
      currentIndex++;
      updateCarousel();
    }
  });

  window.addEventListener('resize', () => {
    // Reset to 0 if cardsPerView increases
    cardsPerView = getCardsPerView();
    if (currentIndex > cards.length - cardsPerView) {
      currentIndex = Math.max(0, cards.length - cardsPerView);
    }
    updateCarousel();
  });

  // Initial setup
  carousel.style.transition = 'transform 0.4s cubic-bezier(.6,.2,.3,1)';
  updateCarousel();
});
