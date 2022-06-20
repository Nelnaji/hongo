export const changeTheme = () => {
  const btntheme = document.querySelector(".theme-change");

  // about section selectors
  const aboutSection = document.querySelector("main");
  const mainTextAbout = document.querySelector(".about-main-text");
  const header = document.querySelector("header");
  const latestStyleSection = document.querySelector(".latest-styles");
  const recentProductsSection = document.querySelector(".recent-products");
  const testimonialsSection = document.querySelector(".testimonials-container");
  const latestBlogSection = document.querySelector(".latest-blog");
  const contactSection = document.querySelector(".contact");

  const nav = document.querySelector("nav");
  const navLogo = document.querySelector(".nav-logo");

  const navIcons = document.querySelectorAll(".main-nav-icon-link");
  const navLink = document.querySelectorAll(".main-nav-link");

  const sectionOne = document.querySelector("header");

  btntheme.addEventListener("click", (e) => {
    // changement du hero
    // nav.classList.toggle("dark-nav");
    // header dark mode
    header.classList.toggle("header-dark");
    // testimonials+style dark mode
    testimonialsSection.classList.toggle("dark-mode");
    latestStyleSection.classList.toggle("dark-mode");
    //  changement de l'icone de la nav en dark mode.
    if (navLogo.getAttribute("src") === "./public/img/logo.png") {
      navLogo.src = "./public/img/white-logo.png";
    } else if (navLogo.getAttribute("src") === "./public/img/white-logo.png") {
      navLogo.src = "./public/img/logo.png";
    }
    console.log(navLogo.getAttribute("src"));
    // change icon colors
    navIcons.forEach((icon) => {
      icon.classList.toggle("dark-icon");
    });
    // change link colors
    navLink.forEach((link) => {
      link.classList.toggle("dark-link");
    });

    if (e.target.classList[1] === "fa-moon") {
      // changer l'icone de theme dans la nav-bar
      e.target.classList.remove("fa-moon");
      e.target.classList.add("fa-sun");
    } else if (e.target.classList[1] === "fa-sun") {
      e.target.classList.remove("fa-sun");
      e.target.classList.add("fa-moon");
    }

    // changing Hero theme

    aboutSection.classList.toggle("dark-mode-about");
    mainTextAbout.classList.toggle("dark-mode-main-text");
  });
};
