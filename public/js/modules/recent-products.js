export const createRecentProducts = () => {
  const produits = [
    {
      nom: "textured Sweater",
      ancienPrix: "",
      prix: "£50.00",
      promo: "",
      src: "./public/img/fashion/fashion-recent-products-01-1-1.jpg",
      hoverSrc: "./public/img/fashion/fashion-recent-products-01-a-1-1.jpg",
    },
    {
      nom: "Traveller Shirt",
      ancienPrix: "",
      prix: "£510.00",
      promo: "",
      src: "./public/img/fashion/fashion-recent-products-02-1-1.jpg",
      hoverSrc: "./public/img/fashion/fashion-recent-products-02-a-1-1-1.jpg",
    },
    {
      nom: "Crewneck Sweatshirt",
      ancienPrix: "",
      prix: "£20.00 - £50.00",
      promo: "",
      src: "./public/img/fashion/fashion-recent-products-03-1-1.jpg",
      hoverSrc: "./public/img/fashion/fashion-recent-products-03-a-1-1.jpg",
    },
    {
      nom: "Skinny Trousers",
      ancienPrix: "£200.00 ",
      prix: "£160.00",
      promo: "20%",
      src: "./public/img/fashion/fashion-recent-products-04.jpg",
      hoverSrc: "./public/img/fashion/fashion-recent-products-04-a-1.jpg",
    },
    {
      nom: "High Neck Sweater",
      ancienPrix: "£40.00 ",
      prix: "£35.00",
      promo: "12%",
      src: "./public/img/fashion/fashion-recent-products-05-1.jpg",
      hoverSrc: "./public/img/fashion/fashion-recent-products-05-a-1.jpg",
    },
    {
      nom: "Sleeve Sweater",
      ancienPrix: "£140.00 ",
      prix: "£120.00",
      promo: "14%",
      src: "./public/img/fashion/fashion-recent-products-06-1.jpg",
      hoverSrc: "./public/img/fashion/fashion-recent-products-06-a-1.jpg",
    },
    {
      nom: "Pocket Sweatshirt",
      ancienPrix: "",
      prix: "£410.00",
      promo: "",
      src: "./public/img/fashion/fashion-recent-products-07-1.jpg",
      hoverSrc: "./public/img/fashion/fashion-recent-products-07-a-1.jpg",
    },
    {
      nom: "Top With Pleated",
      ancienPrix: "",
      prix: "£20.00 - £50.00",
      promo: "",
      src: "./public/img/fashion/fashion-recent-products-08-1.jpg",
      hoverSrc: "./public/img/fashion/fashion-recent-products-08-a.jpg",
    },
    {
      nom: "Cotton Sweater",
      ancienPrix: "£180.00 ",
      prix: "£155.00",
      promo: "14%",
      src: "./public/img/fashion/fashion-recent-products-09.jpg",
      hoverSrc: "./public/img/fashion/fashion-recent-products-09-a-1-1.jpg",
    },
    {
      nom: "Texture Plain Regular",
      ancienPrix: "£85.00 ",
      prix: "£70.00",
      promo: "18%",
      src: "../public/img/fashion/fashion-recent-products-10-1.jpg",
      hoverSrc: "../public/img/fashion/fashion-recent-products-10-a-1.jpg",
    },
  ];

  // main element
  const mainSection = document.querySelector(".recent-products");
  const titleContainer = document.createElement("div");
  const gridContainer = document.createElement("div");

  // section title and text elements
  const maintitle = document.createElement("h2");
  maintitle.innerText = "Recent Products";
  maintitle.classList.add("primary-section-title");
  titleContainer.append(maintitle);
  const mainText = document.querySelector("p");
  mainText.innerText =
    "Lorem ipsum is simply dummy text of the printing and typesetting industry printing and industry.";
  titleContainer.append(mainText);
  mainText.classList.add("primary-section-text-title");
  titleContainer.classList.add("primary-section-title-container");
  mainSection.append(titleContainer);

  // Setup du contenaire grid.

  gridContainer.classList.add("recent-products-grid");
  mainSection.append(gridContainer);

  // loop qui vas ajouter chaque element.

  produits.forEach((element) => {
    // span des elements de la navigation
    const likeNumber = document.querySelector(".like-number");
    const cartNumber = document.querySelector(".cart-number");

    let productCard = document.createElement("div");
    let productImg = document.createElement("img");
    let productName = document.createElement("p");
    let productPrice = document.createElement("p");
    let productAncientPrice = document.createElement("span");
    let panierLikeContainer = document.createElement("div");
    let productNameContainer = document.createElement("div");
    let imageContainer = document.createElement("div");
    let likeContainer = document.createElement("div");
    let cartContainer = document.createElement("div");

    let likeBtn = document.createElement("i");
    let panierBtn = document.createElement("i");

    likeBtn.classList.add("fa-solid", "fa-heart");
    panierBtn.classList.add("fa-solid", "fa-cart-shopping");

    panierLikeContainer.classList.add("panier-container");
    likeContainer.append(likeBtn);
    cartContainer.append(panierBtn);
    panierLikeContainer.append(cartContainer);
    panierLikeContainer.append(likeContainer);

    likeContainer.classList.add("show-btn", "btn-like");
    cartContainer.classList.add("show-btn", "btn-cart");

    panierLikeContainer.classList.add("absolute-container");
    productCard.append(imageContainer);
    imageContainer.classList.add("image-container");
    imageContainer.append(panierLikeContainer);

    gridContainer.append(productCard);

    productCard.classList.add("product-card");

    imageContainer.append(productImg);
    productNameContainer.append(productName);
    productNameContainer.append(productAncientPrice);
    productNameContainer.append(productPrice);
    productCard.append(productNameContainer);
    productNameContainer.classList.add("name-price-container");
    productImg.classList.add("product-card-img");
    productImg.src = element.src;
    panierLikeContainer.classList.add("show");

    productName.innerText = element.nom;
    productPrice.innerText = element.prix;

    productPrice.prepend(productAncientPrice);
    productPrice.classList.add("product-price");
    productAncientPrice.innerText = element.ancienPrix;
    //mouse hover sur les cards.
    productImg.addEventListener("mouseenter", () => {
      productImg.src = element.hoverSrc;
    });

    productImg.addEventListener("mouseleave", () => {
      productImg.src = element.src;
    });

    panierLikeContainer.addEventListener("click", (e) => {
      const clicked = e.target.closest(".show-btn");

      // logique de clique pour changer le span dans la barre de navigation
      if (clicked.getAttribute("class") === "show-btn btn-like") {
        likeNumber.innerText = +likeNumber.innerText + 1;
      } else if (clicked.getAttribute("class") === "show-btn btn-cart") {
        cartNumber.innerText = +cartNumber.innerText + 1;
      }
    });

    // logique ^pour ajouter dynamiquement promotion
    if (element.promo != "") {
      const promotion = document.createElement("div");
      const promotionContainer = document.createElement("p");
      promotion.innerText = `-${element.promo}`;
      promotionContainer.append(promotion);
      imageContainer.append(promotionContainer);
      promotionContainer.classList.add("promotion-container");
      promotion.classList.add("promotion");
    }
  });
};
