/* AOS (Animate On Scroll) - Lightweight custom version for fade/slide effects */
document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('[data-aos]');
  function animateOnScroll() {
    const triggerBottom = window.innerHeight * 0.92;
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        el.classList.add('aos-animate');
      } else {
        el.classList.remove('aos-animate');
      }
    });
  }
  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('resize', animateOnScroll);
  animateOnScroll();
});
