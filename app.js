let button1 = document.querySelector(".button-1");
let button2 = document.querySelector(".button-2");
let button3 = document.querySelector(".button-3");
let button4 = document.querySelector(".button-4");
let button5 = document.querySelector(".button-5");
let button6 = document.querySelector(".button-6");
let score = document.querySelector(".score");
let score2 = document.querySelector(".score2");
let btn = document.querySelector(".btn");

determinant = 0;
determinant2 = 0;

button1.addEventListener("click", () => {
  determinant += 1;
  score.innerText = determinant;
});

button2.addEventListener("click", () => {
  determinant += 2;
  score.innerText = determinant;
});

button3.addEventListener("click", () => {
  determinant += 3;
  score.innerText = determinant;
});

button4.addEventListener("click", () => {
  determinant2 += 1;
  score2.innerText = determinant2;
});

button5.addEventListener("click", () => {
  determinant2 += 2;
  score2.innerText = determinant2;
});

button6.addEventListener("click", () => {
  determinant2 += 3;
  score2.innerText = determinant2;
});

btn.addEventListener("click", () => {
  determinant = 0;
  determinant2 = 0;
  score.innerText = determinant;
  score2.innerText = determinant2;
});
