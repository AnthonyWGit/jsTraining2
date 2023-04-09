const wrapperQuery = document.querySelector(".wrapper")
const squareQuerySelect = wrapperQuery.querySelectorAll(".square")
squareQuerySelect.forEach(square=> square.addEventListener("click", toggleExample)) //QuerySelectorAll returns a nodeList so we need to use forEach
function toggleExample()
{
    this.classList.toggle("red")
}
