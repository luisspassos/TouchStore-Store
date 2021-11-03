const search = document.querySelector(".fa-search");
const searchContainer = document.querySelector(".searchContainer");
const searchContainerInput = document.querySelector(".searchContainer input");

search.addEventListener("click", () => {
  searchContainer.style.display = "flex";
  searchContainerInput.focus();
})

searchContainerInput.addEventListener("blur", ()=> {
  searchContainer.style.display = "none";
})

