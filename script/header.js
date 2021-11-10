import { products } from "./procucts.js"
// shopCart
const cartQuantityDOM = document.querySelectorAll(".cartQuantity");
const main = document.querySelector("main");
const header = document.querySelectorAll("header");

let headerHeight = header[0].clientHeight;
main.style.paddingTop = `${headerHeight + 20}px`

setInterval(()=> {
    if(headerHeight !== header[0].clientHeight) {
        headerHeight = header[0].clientHeight;
        main.style.paddingTop = `${headerHeight + 20}px`
    }
}, 1)

let headerHeight1 = header[1].clientHeight;
main.style.paddingTop = `${headerHeight1 + 20}px`

setInterval(()=> {
    if(headerHeight1 !== header[1].clientHeight) {
        headerHeight = header[1].clientHeight;
        main.style.paddingTop = `${headerHeight1 + 20}px`
    }
}, 1)


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

