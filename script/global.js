const search = document.querySelector(".fa-search");
const searchContainer = document.querySelector(".searchContainer");
const searchContainerInput = document.querySelector(".searchContainer input");

let searchIsVisible = false;


// MUDAR TODA A BUSCA
document.addEventListener("click", (e) => {
  if(!e.target.className.includes("fa-search")) {
    searchIsVisible = false;
  }
})

search.addEventListener("click", () => {
  if(searchIsVisible) {
    searchContainer.style.display = "none";
    searchIsVisible = false;
    return;
  }
  searchContainer.style.display = "flex";
  searchContainerInput.focus();
  searchIsVisible = true;
})

searchContainerInput.addEventListener("blur", ()=> {
  searchContainer.style.display = "none";
})

