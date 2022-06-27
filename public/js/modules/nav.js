export const allNavMagic = () => {
  const allLinks = document.querySelectorAll("a:link");

  allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = link.getAttribute("href");

      // Scroll back to top
      if (href === "#")
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

      // Scroll to other links
      if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }

      // Close mobile naviagtion
      if (link.classList.contains("main-nav-link"))
        headerEl.classList.toggle("nav-open");
    });
  });

  ///////////////////////////////////////////////////////////
  // Sticky navigation
  const nav = document.querySelector(".nav");
  const navLogo = document.querySelector(".nav-logo");

  const navIcons = document.querySelectorAll(".main-nav-icon-link");
  const navLink = document.querySelectorAll(".main-nav-link");

  const sectionOne = document.querySelector(".header");
  const options = {
    rootMargin: "-20px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        navLogo.src = "./public/img/white-logo.png";

        nav.classList.add("sticky");
        // changement de la couleur du logo

        // loop pour chaque lien
        navLink.forEach((link) => {
          link.classList.add("sticky-link");
        });
        // loop pour changer couleur de chaque icone
        navIcons.forEach((link) => {
          link.classList.add("sticky-icon");
        });
      } else {
        nav.classList.remove("sticky");
        // changement de la couleur du logo
        navLogo.src = "./public/img/logo.png";
        // loop pour chaque lien
        navLink.forEach((link) => {
          link.classList.remove("sticky-link");
        });
        navIcons.forEach((link) => {
          link.classList.remove("sticky-icon");
        });
      }
    });
  }, options);

  observer.observe(sectionOne);

  // mobile navigation {
  const mobileBtn = document.querySelector(".mobile-navigation-btn");
  const mobileClose = document.querySelector(".close-mobile-nav");

  const navContainer = document.querySelector(".main-nav-link-container");
  const iconNavContainer = document.querySelector(".main-nav-icon-container");

  mobileBtn.addEventListener("click", function () {
    console.log(screen.width);
    if (mobileClose.style.display === "none") {
      mobileClose.style.display = "block";
    } else mobileClose.style.display = "none";

    if (mobileBtn.style.display === "flex") {
      mobileBtn.style.display = "none";
    } else {
      mobileBtn.style.display = "flex";
    }
    iconNavContainer.classList.remove("main-nav-icon-container");
    iconNavContainer.classList.add("main-nav-icon-mobile");

    navContainer.classList.remove("main-nav-link-container");
    navContainer.classList.add("main-nav-link-mobile");
  });

  mobileClose.addEventListener("click", function () {
    if (mobileClose.style.display === "none") {
      mobileClose.style.display = "block";
    } else mobileClose.style.display = "none";

    if (mobileBtn.style.display === "flex") {
      mobileBtn.style.display = "none";
    } else {
      mobileBtn.style.display = "flex";
    }

    iconNavContainer.classList.add("main-nav-icon-container");
    iconNavContainer.classList.remove("main-nav-icon-mobile");
    navContainer.classList.add("main-nav-link-container");
    navContainer.classList.remove("main-nav-link-mobile");
  });
};
