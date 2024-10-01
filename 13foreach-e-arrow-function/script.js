const imgs = document.querySelectorAll("img");

let i = 0;
imgs.forEach(function (item, index, array) {
  console.log(item, index, array);
});

console.log("-----------------------------------");
console.log("Abaixo é arrow function");

imgs.forEach((item, index, array) => console.log(item, index, array));

console.log("-----------------------------------");

const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);
console.log(titulos);
console.log(titulosArray);

titulosArray.forEach(function (item, index, array) {
  // console.log(item, index, array)
});

