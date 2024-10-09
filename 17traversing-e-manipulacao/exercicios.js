console.log("-----------------------");
console.log("01) Duplique o menu e adicione ele em copy");

const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

console.log("-----------------------");
console.log("02) Selecione o primeiro DT da dl de Faq");
const faq = document.querySelector(".faq");
const primeiroDt = faq.querySelector("dt");
console.log(primeiroDt);

console.log("-----------------------");
console.log("03) Selecione o DD referente ao primeiro DT");
console.log("-----------------------");
const proximoDD = primeiroDt.nextElementSibling;
console.log(proximoDD);

console.log("04) Substitua o conteúdo html de .faq pelo de .animais");
console.log("-----------------------");

const animais = document.querySelector(".animais");
faq.innerHTML = animais.innerHTML;
console.log(faq.innerHTML);
