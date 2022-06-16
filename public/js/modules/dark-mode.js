export const changeTheme = () => {
  const btntheme = document.querySelector(".theme-change");

  // about section selectors
  const aboutSection = document.querySelector("main");
  const mainTextAbout = document.querySelector(".about-main-text");
  const heroSection = document.querySelector(".hero-container");
  const latestStyleSection = document.querySelector(".latest-styles");
  const recentProductsSection = document.querySelector(".recent-products");
  const testimonialsSection = document.querySelector(".testimonials");
  const latestBlogSection = document.querySelector(".latest-blog");
  const contactSection = document.querySelector(".contact");

  const nav = document.querySelector("nav");
  const navLogo = document.querySelector(".nav-logo");

  const navIcons = document.querySelectorAll(".main-nav-icon-link");
  const navLink = document.querySelectorAll(".main-nav-link");

  const sectionOne = document.querySelector("header");

  btntheme.addEventListener("click", (e) => {
    // change l'icone de theme dans la nav-bar
    if (e.target.classList[1] === "fa-moon") {
      e.target.classList.remove("fa-moon");
      e.target.classList.add("fa-sun");
    } else if (e.target.classList[1] === "fa-sun") {
      e.target.classList.remove("fa-sun");
      e.target.classList.add("fa-moon");
    }

    aboutSection.classList.toggle("dark-mode-about");
    mainTextAbout.classList.toggle("dark-mode-main-text");
  });
};
