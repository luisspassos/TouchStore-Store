import { products } from "./procucts.js";

const urlProduct = location.search.split("=")[1];
const productView = document.querySelector(".imageAndInfos");

const {img, title, alt, price} = products.find(product => product.id === urlProduct);
const priceFormatted = price.split(".").join(",")

productView.innerHTML = `<figure>
<img src="${img}" alt="${alt}">
</figure>
<section class="information">
<div class="informationHeader">
    <a href="index.html" class="moreProducts" href="#">
        <div></div>
        Ver mais produtos
    </a>
    <h1>${title}</h1>
    <h2>R$ ${priceFormatted}</h2>
</div>
<div class="btnsProduct">
    <button class="buttonProduct">
        ADICIONAR AO CARRINHO
        <img src="assets/plus_circle.svg" alt="Icone de mais">
    </button>
    <button class="buttonProduct">
        COMPRAR AGORA
        <img src="assets/shopping_bag.svg" alt="Icone de sacola de shopping">
    </button>
</div>
</section>`
