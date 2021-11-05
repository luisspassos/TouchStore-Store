import { products } from "./procucts.js"

const btnsSlider = document.querySelectorAll(".imgsSlider button");
const imgsSlider = document.querySelector(".imgsSlider");
const clickableImages = document.querySelectorAll(".imgsSlider img");
const imgsSliderLength = document.querySelectorAll(".imgsSlider img").length;
const indexes = document.querySelectorAll(".imgsSlider div");
const productsList = document.querySelector(".products");

// slider
let index = 0;

function slider() {
    index++;

    if (index > imgsSliderLength - 1) {
        index = 0;
    }

    imgsSlider.style.transform = `translateX(${-index * 100}%)`
    indexes.forEach(i => {
        i.style.transform = `translateX(${index * 1233}px)`
    })
    btnsSlider.forEach(btn => {
        btn.style.transform = `translateX(${index * 1233}px)`
    })
    
    indexes.forEach((_, i)=> {
        if(index === i) {
            indexes[i].style.background = "#56BFA1"
        } else {
            indexes[i].style.background = "#8fbfb298"
        }
    }) 
}

btnsSlider.forEach(button => {
    button.addEventListener("click", slider)
})

//products

productsList.innerHTML = products.map(product => {

    const price = product.price.split(".").join(",");

    return(
        `<article class="product">
            <img src="${product.img}" alt="${product.alt}">
            <section class="productInfos">
                <p>${product.title}</p>
                <div class="buttonAndPrice">
                    <p>R$ ${price}</p>
                    <button>VER PRODUTO</button>
                </div>
            </section>
        </article>`
    )
}).join("")

const allProducts = document.querySelectorAll(".product");

products.forEach((product, i) => {
    allProducts[i].addEventListener("click", () => {
        location = `product.html?product=${product.id}`
    })
})

// Slider images

const messages = ["ola", "banana"];

messages.forEach((message, i) => {
    clickableImages[i].addEventListener("click", () => {
        alert(message)
    })
})
