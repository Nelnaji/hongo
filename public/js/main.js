import { createRecentProducts } from "./modules/recent-products.js";
import { changeTheme } from "./modules/dark-mode.js";
import { allNavMagic } from "./modules/nav.js";
import { firstCarouselEngine } from "./modules/first-carousel.js";
import { secondCarouselEngine } from "./modules/second-carousel.js";
import { modalWindowChange } from "./modules/modal.js";

// cette fonction créee la page recent products

createRecentProducts();
changeTheme();
allNavMagic();
firstCarouselEngine();
secondCarouselEngine();
modalWindowChange();
