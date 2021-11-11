import { products } from "./procucts.js";
import { cartProducts, cartQuantityDOM } from "./header.js";

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
const modalSubsButton = document.querySelector("#modalSubsButton");
const addButtonToCart = document.querySelector("#addButtonToCart");
const limitModal = document.querySelector("#limitModal");
const limitModalBtn = document.querySelector("#limitModal > button")

const urlProduct = location.search.split("=")[1];

const {img, title, alt, price, id} = products.find(product => product.id === urlProduct);
const priceFormatted = Number(price).toLocaleString("pt-br", {maximumFractionDigits: 2, minimumFractionDigits: 2});

// view product

imgProduct.src = img;
imgProduct.alt = alt;
titleProduct.textContent = title;
priceProduct.textContent += priceFormatted;

// buy button

function closeBuyModal() {
    buyModal.style.display = "none";
    modalBackground.style.display = "none";
}

buyBtn.addEventListener("click", () => {
    buyModal.style.display = "block";
    modalBackground.style.display = "block";
})

btnBuyModal.addEventListener("click", () => {
    closeBuyModal()
    console.log('aaaaa')
})

// add button and add modal

let productQuantity = 1;
const quantityInCart = cartProducts.find(product => product[0] === id)

function resetModal() {
    productQuantity = 1;
    modalCartQuantity.textContent = productQuantity;
    addModal.style.display = "none";
    modalBackground.style.display = "none"
}

function addToStorage() {
    resetModal()
    localStorage.setItem("test", JSON.stringify(cartProducts))
}

function closeLimitModal() {
    modalBackground.style.display = "none"
    limitModal.style.display = "none"
}

function openLimitModal() {
    modalBackground.style.display = "block"
    limitModal.style.display = "block"
}

addBtn.addEventListener("click", () => {
    if(quantityInCart[1] >= 99) {
        openLimitModal()
        return;
    }
        addModal.style.display = "flex";
        modalBackground.style.display = "block"
})

modalCancelBtn.addEventListener("click", () => {
    resetModal()
})

modalAddButton.addEventListener("click", () => {
    if(productQuantity < 99) {
        productQuantity++;
        modalCartQuantity.textContent = productQuantity;
    }
})

modalSubsButton.addEventListener("click", () => {
    if(productQuantity > 1) {
        productQuantity--;
        modalCartQuantity.textContent = productQuantity;
    }
})

addButtonToCart.addEventListener("click", () => {
    const quantity = +(modalCartQuantity.textContent);

    if(quantityInCart) {
        const sumOfQuantities = quantityInCart[1] + quantity;
        if(sumOfQuantities >= 100) {
            quantityInCart[1] = 99;
            addToStorage()
            return;
        }
        quantityInCart[1] += quantity
        addToStorage()
        return;
    }

    cartProducts.push([id, quantity])

    addToStorage()
    cartQuantityDOM.forEach(quantity => {
        quantity.style.display = "flex";
        quantity.textContent = cartProducts.length;
    })
})

limitModalBtn.addEventListener("click", () => {
    closeLimitModal()
})

// ESC modals

document.addEventListener("keydown", (e) => {
    if(e.key === "Escape") {
        closeBuyModal()
        resetModal()
        closeLimitModal()
    }
})