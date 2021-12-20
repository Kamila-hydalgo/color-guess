const answer = document.querySelector('#answer');
// Requisito 4.
function randomColor() {
  const aleatColor1 = Math.round(Math.random() * 255);
  const aleatColor2 = Math.round(Math.random() * 255);
  const aleatColor3 = Math.round(Math.random() * 255);
  const newColor = `(${aleatColor1},${aleatColor2},${aleatColor3})`;
  return newColor;
}

function addColorBalls () {
  const colorBall = document.querySelectorAll('.ball');
  for (let index = 0; index < colorBall.length; index += 1) {
    colorBall[index].style.backgroundColor = `rgb${randomColor()}`;
  }
}
addColorBalls();

function addColorText () {
  const randomNumber = Math.round(Math.random() * 5);
  const ballSelected = document.querySelectorAll('.ball')[randomNumber];
  const rgbSelected = ballSelected.style.backgroundColor;
  const textRgb = document.querySelector('#rgb-color');
  textRgb.innerText = rgbSelected.replace('rgb', '');
}
addColorText();

// Requisito 5.

const allBalls = document.querySelector('#all-balls');
const randomNumber = Math.round(Math.random() * 5);
const ballSelected = document.querySelectorAll('.ball')[randomNumber];
const rgbSelected = ballSelected.style.backgroundColor;
const textRgb = document.querySelector('#rgb-color');
textRgb.innerText = rgbSelected.replace('rgb', '');

allBalls.addEventListener('click', (event) => {
  const elementoClicado = event.target;
  const colorElementoClicado = elementoClicado.style.backgroundColor.replace('rgb', '');
  if (colorElementoClicado === textRgb.innerText) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
});

//Requisito 6.
const resetRestart = document.querySelector("#reset-game");

resetRestart.addEventListener('click', () => {
  answer.innerText = "Escolha uma cor";
  addColorBalls();
  addColorText();
});