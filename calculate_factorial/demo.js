"use strict";

var saveInput = Number(document.querySelector(".userInput").value);
console.log(saveInput);
function calculateFactorial(saveInput) {
  let total = 1;
  for (let i = 1; i <= saveInput; i++) {
    total *= i;
  }
  document.querySelector(".output").textContent = total;
}
// function calculateFactorial(saveInput) {
//   let total = 1;
//   for (let i = 1; i <= saveInput; i++) {
//     total *= i;
//   }
//   document.querySelector(".output").textContent = total;
// }

document
  .querySelector(".button1")
  .addEventListener("click", calculateFactorial);
