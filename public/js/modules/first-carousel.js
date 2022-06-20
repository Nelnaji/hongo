export const firstCarouselEngine = () => {
  const carouselBtnContainer = document.querySelector(
    ".hero-carousel-container"
  );
  const carouselBtns = document.querySelectorAll(".carousel");
  const firstCarousel = document.querySelector(".first-carousel");

  const slider = function () {
    const slides1 = document.querySelectorAll(".hero-division-container");
    let curSlide = 0;
    const maxSlide1 = slides1.length;
    // Functions
    const goToSlide = function (slide) {
      slides1.forEach(
        (s, i) => (s.style.transform = `translateY(${100 * (i - slide)}%)`)
      );
    };

    // /code qui vas créer les boutons
    const createBtns = function () {
      slides1.forEach(function (_, i) {
        carouselBtnContainer.insertAdjacentHTML(
          "beforeend",
          `<p class="carousel" data-slide="${i}">&nbsp;&nbsp;0${
            i + 1
          }&nbsp;&nbsp;</p>`
        );
      });
    };

    const activateBtns = function (slide) {
      document
        .querySelectorAll(".carousel")
        .forEach((btn) => btn.classList.remove("carousel-active"));

      document
        .querySelector(`.carousel[data-slide="${slide}"]`)
        .classList.add("carousel-active");
    };
    // Next slide

    const init = function () {
      createBtns();
      goToSlide(0);
      activateBtns(0);
    };
    init();
    // Event handlers
    carouselBtnContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("carousel")) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateBtns(slide);
      }
    });
  };

  slider();
};
