import { products } from "./procucts.js"
// shopCart
const cartQuantityDOM = document.querySelectorAll(".cartQuantity");

let cartProducts = JSON.parse(localStorage.getItem("test")) || [];

if(cartProducts.length !== 0) {
    cartQuantityDOM.forEach(cartQuatity => {
        cartQuatity.style.display = "flex"
    })
}

cartQuantityDOM.forEach(cart => {
    cart.textContent = cartProducts.length
})

export { cartProducts, cartQuantityDOM }

// search

const searchInput = document.querySelectorAll(".searchContainer input");
const searchButton = document.querySelectorAll(".searchContainer button");
const searchForm = document.querySelector(".searchContainer");

function search() {
    searchInput.forEach(input => {
        if(input.value !== "") {
            location = `index.html?search=${input.value}#products`
        }
    })
}

searchForm.addEventListener("submit", (e)=> {
    e.preventDefault()
})

searchButton.forEach(btn => {
    btn.addEventListener("click", search)
})

searchInput.forEach(input => {
    input.addEventListener("focus", ()=> {
        input.addEventListener("keydown", (e)=> {
            if(e.key === "Enter") {
                search()
            }
        })
    })
})

