import { cartProducts } from "./header.js";
import { products } from "./procucts.js";

const productList = document.querySelector(".productList");
const productLength = document.querySelector("#productLength");
const paymentPriceDOM = document.querySelector("#paymentPrice");
const clearCartBtn = document.querySelector("#clearCart");

const foundProducts = [];
cartProducts.forEach(cartProduct => {
    foundProducts.push([products.find(product => product.id === cartProduct[0]), cartProduct[1]])
})

const paymentPrice = foundProducts.reduce((acc, product) => acc + +(product[0].price), 0).toLocaleString("pt-br")

// product List

function productListComponent() {
    productList.innerHTML = foundProducts.map(product => {
        const priceFormatted = Number(product[0].price).toLocaleString("pt-br")
        return (
            `<article class="product">
            <section class="allInfos">
                <img src="${product[0].img}" alt="${product[0].alt}">
                <div class="infos">
                    <p>${product[0].title}</p>
                    <div class="quantity">
                        <p>R$ ${priceFormatted}</p>
                        <div class="quantityContainer">
                            <p>Quantidade:</p>
                            <span>${product[1]}</span>
                            <div class="quantityIcons">
                                <figure class="addBtn">
                                    <img src="assets/plus_circle_dark.svg" alt="Icone de mais">
                                </figure>
                                <figure class="substractBtn">
                                    <img src="assets/subs_circle_dark.svg" class="icon" alt="Icone de menos">
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="line productLine"></div>
        </article>`
        )
    }).join("")
}

productListComponent()

const substractBtn = document.querySelectorAll(".substractBtn");
const addBtn = document.querySelectorAll(".addBtn");
const productQuantity = document.querySelectorAll(".quantityContainer > span");

function addToStorage() {
    productQuantity[i].textContent = foundProducts[i][1];
    cartProducts[i][1] = foundProducts[i][1];
    localStorage.setItem("test", JSON.stringify(cartProducts))
}

addBtn.forEach((btn, i)=> {
    btn.addEventListener("click", () => {
        foundProducts[i][1]++;
        addToStorage()
    })
})

substractBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        if (foundProducts[i][1] > 1) {
            foundProducts[i][1]--;
            addToStorage()
        }
    })
})

// payment infos

productLength.innerHTML = `${foundProducts.length}<br> produtos`;
paymentPriceDOM.textContent += paymentPrice


