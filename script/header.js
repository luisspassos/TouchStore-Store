/* const cartQuantityDOM = document.querySelector(".cartQuantity");

const cartQuantityStorage = JSON.parse(localStorage.getItem("cartQuantity"));

const cartProducts = cartQuantityStorage;

cartQuantityDOM.textContent = 0;

 */

const cartQuantityDOM = document.querySelector(".cartQuantity");

const cartProducts = JSON.parse(localStorage.getItem("test")) || [];

if(cartProducts.length === 0) {
    cartQuantityDOM.style.display = "none";
}

cartQuantityDOM.textContent = cartProducts.length

export { cartProducts, cartQuantityDOM }
