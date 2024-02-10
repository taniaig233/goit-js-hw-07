const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]"); 
const inputElement = document.querySelector("#controls input");
const divElement = document.querySelector("#boxes");


btnCreate.addEventListener("click", () => {
  if (Number(inputElement.value) >= 1 && Number(inputElement.value) <= 100) {
    createBoxes(Number(inputElement.value))
      }     else {
        alert(`enter a value between 1 and 100`)
      }
      }
)
  
btnDestroy.addEventListener('click', () => {
	destroyBoxes.call()
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function createBoxes(amount) {
  let size = 30;
  for (let index = 0; index < amount; index++) {
    const color = getRandomHexColor();
    divElement.insertAdjacentHTML("beforeend",
      `<div class = "square"
      style = "width: ${size}px; height: ${size}px; background-color: ${color};">
    </div>`);
    size += 10;
  }
  inputElement.value = "";
}

const destroyBoxes = () => {
  divElement.innerHTML = "";
}







 
