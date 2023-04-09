const wrapperQuery = document.querySelector(".wrapper")
const squareQuerySelect = wrapperQuery.querySelectorAll(".square")
squareQuerySelect.forEach(square=> square.addEventListener("click", issou))
function issou()
{
    this.classList.toggle("red")
}
