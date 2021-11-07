const cartQuantityDOM = document.querySelector(".cartQuantity");

let cartProducts = JSON.parse(localStorage.getItem("test")) || [];

if(cartProducts.length === 0) {
    cartQuantityDOM.style.display = "none";
}

cartQuantityDOM.textContent = cartProducts.length

export { cartProducts, cartQuantityDOM }