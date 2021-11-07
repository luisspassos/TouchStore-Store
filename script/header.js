import { products } from "./procucts.js"
// shopCart
const cartQuantityDOM = document.querySelector(".cartQuantity");

let cartProducts = JSON.parse(localStorage.getItem("test")) || [];

if(cartProducts.length === 0) {
    cartQuantityDOM.style.display = "none";
}

cartQuantityDOM.textContent = cartProducts.length

export { cartProducts, cartQuantityDOM }

// search

const searchInput = document.querySelector(".searchContainer input");
const searchButton = document.querySelector(".searchContainer button");

function search() {
    if(searchInput.value !== "") {
        location = `index.html?search=${searchInput.value}#products`
    }
}

searchButton.addEventListener("click", search)

searchInput.addEventListener("focus", ()=> {
    searchInput.addEventListener("keydown", (e)=> {
        if(e.key === "Enter") {
            search()
        }
    })
})