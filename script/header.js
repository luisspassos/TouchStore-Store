const cartQuantityDOM = document.querySelector(".cartQuantity");

const cartProducts = JSON.parse(localStorage.getItem("test")) || [];

console.log(cartProducts)

if(cartProducts.length === 0) {
    cartQuantityDOM.style.display = "none";
}

cartQuantityDOM.textContent = cartProducts.length

export { cartProducts, cartQuantityDOM }
