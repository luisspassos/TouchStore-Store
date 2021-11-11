import { products } from "./procucts.js"
import { } from "./header.js";

const btnsSlider = document.querySelectorAll(".slider button");
const imgsSlider = document.querySelector(".imgsSlider");
const clickableImages = document.querySelectorAll(".imgsSlider img");
const imgsSliderLength = document.querySelectorAll(".imgsSlider img").length;
const productsList = document.querySelector(".products");
const indexes = document.querySelectorAll(".indexes > li");
const notFoundSection = document.querySelector(".notFound");
const notFoundText = document.querySelector(".notFound p");

// slider
let index = 0;

function slider() {
    index++;

    if (index > imgsSliderLength - 1) {
        index = 0;
    }

    imgsSlider.style.transform = `translateX(${-index * 100}%)`

    indexes.forEach((_, i) => {
        if (index === i) {
            indexes[i].style.background = "#56BFA1"
        } else {
            indexes[i].style.background = "#8fbfb298"
        }
    })
}

btnsSlider.forEach(button => {
    button.addEventListener("click", slider)
})

//Products List

const searchUrl = location.search.split("=")[1];

function productListComponent(list) {
    productsList.innerHTML = list.map(product => {

        const price = Number(product.price).toLocaleString("pt-br", {maximumFractionDigits: 2, minimumFractionDigits: 2})

        return (
            `<li class="product">
                <img src="${product.img}" alt="${product.alt}">
                <section class="productInfos">
                    <p>${product.title}</p>
                    <div class="buttonAndPrice">
                        <p>R$ ${price}</p>
                        <button>VER PRODUTO</button>
                    </div>
                </section>
            </li>`
        )
    }).join("")

    const allProducts = document.querySelectorAll(".product");

    list.forEach((product, i) => {
        allProducts[i].addEventListener("click", () => {
            location = `product.html?product=${product.id}`
        })
    })
}

if (searchUrl) {

    const wantedProducts = products.filter(product => product.title.toLowerCase().includes(searchUrl.toLowerCase()))

    if(wantedProducts == 0) {
        notFoundText.innerHTML += `Nenhum resultado<br> para "<em>${decodeURI(searchUrl)}</em>"`
        notFoundSection.style.display = "flex"
        productListComponent(products)
    } else {
        productListComponent(wantedProducts)
    }

} else {
    productListComponent(products)
}

// Slider images

const imagesPath = [products[8].id, products[2].id]

imagesPath.forEach((path, i) => {
    clickableImages[i].addEventListener("click", () => {
        location = `product.html?product=${path}`
    })
})