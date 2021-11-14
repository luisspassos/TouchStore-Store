import { products } from "./procucts.js"
// shopCart
const cartQuantityDOM = document.querySelectorAll(".cartQuantity");

const removedProducts = JSON.parse(localStorage.getItem("MUDARISSO6")) || [];
let cartProducts = JSON.parse(localStorage.getItem("test")) || [];

console.log(removedProducts)
console.log(cartProducts)

cartProducts = cartProducts.filter((_,index)=> !removedProducts.includes(index));
localStorage.setItem("test", JSON.stringify(cartProducts));
localStorage.setItem("MUDARISSO6", null);

console.log(cartProducts)

// ver isso direito

if(cartProducts.length !== 0) {
    cartQuantityDOM.forEach(cartQuatity => {
        cartQuatity.style.display = "flex"
    })
}

cartQuantityDOM.forEach(cart => {
    cart.textContent = cartProducts.length
})

export { cartProducts, cartQuantityDOM, removedProducts }

// search

const searchInput = document.querySelectorAll(".searchContainer input");
const searchButton = document.querySelectorAll(".searchContainer button");
const searchForm = document.querySelectorAll(".searchContainer");

function search() {
    searchInput.forEach(input => {
        if(input.value !== "") {
            location = `index.html?search=${input.value}#products`
        }
    })
}

searchForm.forEach(form => {
    form.addEventListener("submit", (e)=> {
        e.preventDefault()
    })
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

