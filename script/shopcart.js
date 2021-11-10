import { cartProducts, cartQuantityDOM } from "./header.js";
import { products } from "./procucts.js";

const productList = document.querySelector(".productList");
const productLength = document.querySelectorAll("#productLength");
const paymentPriceDOM = document.querySelectorAll("#paymentPrice");
const cleanCartBtn = document.querySelector("#cleanCart");
const checkoutButton = document.querySelector("#checkout");
const modalBackground = document.querySelector(".modalBackground");
const buyModal = document.querySelector(".buyModal");
const btnBuyModal = document.querySelector(".buyModal button");
const emptyCartModal = document.querySelector("#emptyCart");
const emptyModalBtn = document.querySelector("#emptyCart button");

const foundProducts = [];
cartProducts.forEach(cartProduct => {
    foundProducts.push([products.find(product => product.id === cartProduct[0]), cartProduct[1]])
})

const paymentPrice = ()=> {
    if(foundProducts.length !== 0) {
        return foundProducts.map(product => Number(product[0].price) * product[1]).reduce((acc, product) => acc + product).toLocaleString("pt-br");
    }
}

// product List

function productListComponent() {
    productList.innerHTML = foundProducts.map(product => {
        const priceFormatted = Number(product[0].price).toLocaleString("pt-br")
        return (
            `<li class="product">
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
        </li>`
        )
    }).join("")
}

productListComponent()

const substractBtn = document.querySelectorAll(".substractBtn");
const addBtn = document.querySelectorAll(".addBtn");
const productQuantity = document.querySelectorAll(".quantityContainer > span");

function addToStorage(i) {
    productQuantity[i].textContent = foundProducts[i][1];
    cartProducts[i][1] = foundProducts[i][1];
    localStorage.setItem("test", JSON.stringify(cartProducts))
}

addBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        foundProducts[i][1]++;
        paymentPriceDOM.forEach(payment => {
            payment.textContent = `R$ ${paymentPrice()}`
        })
        addToStorage(i)
    })
})

substractBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        if (foundProducts[i][1] > 1) {
            foundProducts[i][1]--;
            paymentPriceDOM.forEach(payment => {
                payment.textContent = `R$ ${paymentPrice()}`
            })
            addToStorage(i)
        }
    })
})

// payment infos

function resetCart() {
    cartProducts.length = 0;
    productLength.forEach(product => {
        product.innerHTML = `0<br> produtos`;
    })
    paymentPriceDOM.forEach(payment => {
        payment.textContent = "R$ 00,00"
    })
    cartQuantityDOM.forEach(quantity => {
        quantity.style.display = "none"
    })
    foundProducts.length = 0;
    localStorage.setItem("test", JSON.stringify(cartProducts))
    productListComponent()
}

function closeBuyModal() {
    buyModal.style.display = "none";
    modalBackground.style.display = "none";
}

productLength.forEach(product => {
    product.innerHTML = `${foundProducts.length}<br> produtos`;
})

if (paymentPrice() === undefined) {
    paymentPriceDOM.forEach(payment => {
        payment.textContent = "R$ 00,00"
    })
} else {
    paymentPriceDOM.forEach(payment => {
        payment.textContent += paymentPrice()
    })
}

cleanCartBtn.addEventListener('click', ()=> {
    if(cartProducts.length !== 0) {
        resetCart()
    } else {
        modalBackground.style.display = "block";
        emptyCartModal.style.display = "block";
    }
})

checkoutButton.addEventListener("click", () => {
    if(cartProducts.length !== 0) {
        resetCart()
        buyModal.style.display = "block";
        modalBackground.style.display = "block";
    } else {
        modalBackground.style.display = "block";
        emptyCartModal.style.display = "block";
    }
})

btnBuyModal.addEventListener("click", () => {
    closeBuyModal()
})

emptyModalBtn.addEventListener("click", () => {
    closeBuyModal()
})

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeBuyModal()
    }
})
