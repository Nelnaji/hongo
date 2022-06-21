export const changeTheme = () => {
  const btntheme = document.querySelector(".theme-change");
  const main = document.querySelector("main");

  // about section selectors
  const aboutSection = document.querySelector("main");
  const mainTextAbout = document.querySelector(".about-main-text");
  const header = document.querySelector(".header");
  const latestStyleSection = document.querySelector(".latest-styles");
  const testimonialsSection = document.querySelector(".testimonials-container");
  const information = document.querySelector(".information");
  const latestfooter = document.querySelector(".last-footer-container");
  const contactSection = document.querySelector(".contact");
  const instaContact = document.querySelector(".instagram-div");
  const bigTitle = document.querySelector(".big-title");
  const emailFooter = document.querySelector(".email-input-container");
  const mainFooter = document.querySelector(".main-footer-container");

  btntheme.addEventListener("click", (e) => {
    // changement du hero

    // header dark mode
    header.classList.toggle("dark");
    // testimonials+style dark mode
    testimonialsSection.classList.toggle("dark-mode");
    latestStyleSection.classList.toggle("dark-mode");
    //  changement de l'icone de la nav en dark mode.

    // change icon colors

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
    instaContact.classList.toggle("dark-contact");
    contactSection.classList.toggle("dark-contact");
    emailFooter.classList.toggle("dark-footer");
    mainFooter.classList.toggle("dark-footer");
    latestfooter.classList.toggle("darkest-footer");
    information.classList.toggle("darkest-contact");
    bigTitle.classList.toggle("dark-title");
  });
};
