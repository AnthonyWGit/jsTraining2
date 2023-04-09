const wrapperQuery = document.querySelector(".wrapper")
const squareQuerySelect = wrapperQuery.querySelectorAll(".square")
squareQuerySelect.forEach(square=> square.addEventListener("click", issou)) //QuerySelectorAll returns a nodeList so we need to use forEach
function issou()
{
    this.classList.toggle("red")
}
