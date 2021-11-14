// shopCart
const cartQuantityDOM = document.querySelectorAll(".cartQuantity");

const removedProducts = JSON.parse(localStorage.getItem("@@removedProducts")) || [];
let cartProducts = JSON.parse(localStorage.getItem("@@cartProducts")) || [];

cartProducts = cartProducts.filter((_,index)=> !removedProducts.includes(index));
localStorage.setItem("@@cartProducts", JSON.stringify(cartProducts));
localStorage.setItem("@@removedProducts", null);

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

