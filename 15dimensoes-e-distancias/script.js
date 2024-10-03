const listaAnimais = document.querySelector(".animais-lista");
//const listaAnimais = document.querySelector(".copy");

const height = listaAnimais.scrollHeight;
console.log(height);
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroh2 = document.querySelector("h2");
const h2left = primeiroh2.offsetLeft;
console.log(h2left);

const oneh2 = primeiroh2.getBoundingClientRect();
console.log(oneh2);
console.log(oneh2.height);
console.log(oneh2.top);

console.log("------------------------");

if (oneh2.top < 0) {
  console.log("Passou do elemento");
}
console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset
);

const small = window.matchMedia("max-width: 600px").matches;
if (small) {
  console.log("Usuário mobile");
} else {
  console.log("Usuário desktop");
}
