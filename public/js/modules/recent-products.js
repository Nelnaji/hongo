import { main } from "@popperjs/core";

export const createRecentProducts = () => {


    const produits = [
        {
            nom : "textured Sweater",
            ancienPrix : "",
            prix : "£50.00",
            promo : "",
            src : "../img/fashion/fashion-recent-products-01-1-1.jpg",
            hoverSrc: "../img/fashion/fashion-recent-products-01-a-1-1.jpg",
            
        },
        {
            nom : "Traveller Shirt",
            ancienPrix : "",
            prix : "£510.00",
            promo : "",
            src : "../img/fashion/fashion-recent-products-02-1-1.jpg",
            hoverSrc: "../img/fashion/fashion-recent-products-02-a-1-1-1",
            
        },
        {
            nom : "Crewneck Sweatshirt",
            ancienPrix : "",
            prix : "£20.00 - £50.00",
            promo : "",
            src : "../img/fashion/fashion-recent-products-03-1-1.jpg",
            hoverSrc: "../img/fashion/fashion-recent-products-03-a-1-1.jpg",
            
        },
        {
            nom : "Skinny Trousers",
            ancienPrix : "£200.00",
            prix : "£160.00",
            promo : "20%",
            src : "../img/fashion/fashion-recent-products-04.jpg",
            hoverSrc: "../img/fashion/fashion-recent-products-04-a-1.jpg",
            
        },
        {
            nom : "High Neck Sweater",
            ancienPrix : "£40.00",
            prix : "£35.00",
            promo : "12%",
            src : "../img/fashion/fashion-recent-products-05-1.jpg",
            hoverSrc: "../img/fashion/fashion-recent-products-05-a-1.jpg",
            
        },
        {
            nom : "Sleeve Sweater",
            ancienPrix : "£140.00",
            prix : "£120.00",
            promo : "14%",
            src : "../img/fashion/fashion-recent-products-06-1.jpg",
            hoverSrc: "../img/fashion/fashion-recent-products-06-a-1.jpg",
            
        },
        {
            nom : "Pocket Sweatshirt",
            ancienPrix : "",
            prix : "£410.00",
            promo : "",
            src : "../img/fashion/fashion-recent-products-07-1.jpg",
            hoverSrc: "../img/fashion/fashion-recent-products-07-a-1.jpg",
            
        },
        {
            nom : "Top With Pleated",
            ancienPrix : "",
            prix : "£20.00 - £50.00",
            promo : "",
            src : "../img/fashion/fashion-recent-products-08-1.jpg",
            hoverSrc: "../img/fashion/fashion-recent-products-08-a.jpg",
            
        },
        {
            nom : "Cotton Sweater",
            ancienPrix : "£180.00",
            prix : "£155.00",
            promo : "14%",
            src : "../img/fashion/fashion-recent-products-09.jpg",
            hoverSrc: "../img/fashion/fashion-recent-products-09-a-1-1.jpg",
            
        },
        {
            nom : "Texture Plain Regular",
            ancienPrix : "£85.00",
            prix : "£70.00",
            promo : "18%",
            src : "../img/fashion/fashion-recent-products-10-1.jpg",
            hoverSrc: "../img/fashion/fashion-recent-products-10-a-1.jpg",
            
        }

        
]

// main element
const mainSection = document.querySelector('.recent-products');
const titleContainer = document.createElement('div');
const gridContainer = document.createElement('div');
const productCard = document.createElement('div')

// card elements
const productImg = document.createElement('img');
const productName = document.createElement('p')
const productPrice = document.createElement('p');
const productAncientPrice = document.createElement('span');

// section title and text elements
const maintitle = document.createElement('h4');
maintitle.innerText = "Recent Products";
maintitle.classList.add('primary-section-title')
titleContainer.append(maintitle);


const mainText = document.querySelector('p');
mainText.innerText="Lorem ipsum is simply dummy text of the printing and typesetting industry printing and industry.";


titleContainer.append(mainText);


mainSection.append(titleContainer);






}