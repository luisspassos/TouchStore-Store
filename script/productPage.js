import { products } from "./procucts.js";

const imgProduct = document.querySelector(".imageAndInfos > figure > img");
const titleProduct = document.querySelector(".informationHeader > h1");
const priceProduct = document.querySelector(".informationHeader > h2");
const buyBtn = document.querySelector("#buyBtn");
const modal = document.querySelector(".modalBackground");
const btnModal = document.querySelector(".modal button");

const urlProduct = location.search.split("=")[1];

const {img, title, alt, price} = products.find(product => product.id === urlProduct);
const priceFormatted = price.split(".").join(",");

// view product

imgProduct.src = img;
imgProduct.alt = alt;
titleProduct.textContent = title;
priceProduct.textContent += priceFormatted;

// buy button

buyBtn.addEventListener("click", () => {
    modal.style.display = "block"
})

btnModal.addEventListener("click", () => {
    modal.style.display = "none"
})

document.addEventListener("keydown", (e) => {
    if(e.key === "Escape") {
        modal.style.display = "none"
    }
})