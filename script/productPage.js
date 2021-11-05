import { products } from "./procucts.js";

const imgProduct = document.querySelector(".imageAndInfos > figure > img");
const titleProduct = document.querySelector(".informationHeader > h1");
const priceProduct = document.querySelector(".informationHeader > h2");
const buyBtn = document.querySelector("#buyBtn");
const modalBackground = document.querySelector(".modalBackground");
const buyModal = document.querySelector(".buyModal");
const btnBuyModal = document.querySelector(".buyModal button");
const addBtn = document.querySelector("#addBtn");
const addModal = document.querySelector(".addModal");
const modalCancelBtn = document.querySelector("#modalCancelBtn");
const modalCartQuantity = document.querySelector(".quantityAddModal > span")
const modalAddButton = document.querySelector("#modalAddButton");

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
    buyModal.style.display = "block";
    modalBackground.style.display = "block";
})

btnBuyModal.addEventListener("click", () => {
    buyModal.style.display = "none";
    modalBackground.style.display = "none";
})

document.addEventListener("keydown", (e) => {
    if(e.key === "Escape") {
        modalBackground.style.display = "none"
        buyModal.style.display = "none";
        addModal.style.display = "none";
    }
})

// add button and add modal

addBtn.addEventListener("click", () => {
    addModal.style.display = "flex";
    modalBackground.style.display = "block"
})

modalCancelBtn.addEventListener("click", () => {
    addModal.style.display = "none";
    modalBackground.style.display = "none"
})

let modalCartQuantityNumber = 1;

modalAddButton.addEventListener("click", () => {
    modalCartQuantityNumber++;
    modalCartQuantity.textContent = modalCartQuantityNumber;
})