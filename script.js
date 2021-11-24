function randomColor() {
  const aleatColor1 = Math.round(Math.random() * 255);
  const aleatColor2 = Math.round(Math.random() * 255);
  const aleatColor3 = Math.round(Math.random() * 255);
  const newColor = `rgb(${aleatColor1},${aleatColor2},${aleatColor3})`;
  return newColor;
}
const colorBall = document.querySelectorAll('.ball');
for (let index = 0; index < colorBall.length; index += 1) {
  colorBall[index].style.backgroundColor = randomColor();
}
