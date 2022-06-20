export const secondCarouselEngine = () => {
  const leftArrow = document.querySelector(".testimonials-left-arrow");
  const rightArrow = document.querySelector(".slider__btn--right");

  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".slider");

  let currentSlide = 0;
  const maxSlide = slides.length;

  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * i - 1}%)`;
  });

  rightArrow.addEventListener("click", function () {
    if (currentSlide === maxSlide) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
    });
  });
};
