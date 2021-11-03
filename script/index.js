import { products } from "./procucts.js"

const btnsSlider = document.querySelectorAll(".btnsSlider button");
const imgsSlider = document.querySelector(".imgsSlider");
const imgsSliderLength = document.querySelectorAll(".imgsSlider img").length;
const indexes = document.querySelectorAll(".indexes div");

let index = 0;

function slider() {
    index++;

    if (index > imgsSliderLength - 1) {
        index = 0;
    }

    imgsSlider.style.transform = `translateX(${-index * 100}%)`
    
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