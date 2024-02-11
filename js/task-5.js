const body = document.querySelector("body");
const buttonColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColorHandler() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}

buttonColor.addEventListener("click", changeColorHandler);

