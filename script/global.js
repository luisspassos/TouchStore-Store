const search = document.querySelector(".fa-search");
const searchContainer = document.querySelector(".searchContainer");

search.addEventListener("click", ()=> {
    searchContainer.style.display = "flex";
})

document.addEventListener('click', (event) => {
  const withinBoundaries = event.composedPath().includes(search)

  if(!withinBoundaries) {
    searchContainer.style.display = "none";
  }
})


