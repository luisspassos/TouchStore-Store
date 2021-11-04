import { products } from "./procucts.js";

const imgProduct = document.querySelector(".imageAndInfos > figure > img");
const titleProduct = document.querySelector(".informationHeader > h1");
const priceProduct = document.querySelector(".informationHeader > h2");

const urlProduct = location.search.split("=")[1];

const {img, title, alt, price} = products.find(product => product.id === urlProduct);
const priceFormatted = price.split(".").join(",");

imgProduct.src = img;
imgProduct.alt = alt;
titleProduct.textContent = title;
priceProduct.textContent += priceFormatted;
