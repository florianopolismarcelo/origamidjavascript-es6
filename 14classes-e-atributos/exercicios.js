console.log("-----------------------");
console.log("01) Adicione a classe ativo a todos os itens do menu");

const itensMenu = document.querySelectorAll(".menu a");
itensMenu.forEach((item) => {
  item.classList.add("ativo");
});
console.log(itensMenu);

console.log("-----------------------");
console.log(
  "02) Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro"
);
itensMenu.forEach((item) => {
  item.classList.remove("ativo");
});
itensMenu[0].classList.add("ativo");
console.log(itensMenu);

console.log("-----------------------");
console.log("03) Verifique se as imagens possuem atributos alt");

const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute("alt");
  console.log(img, possuiAtributo);
});

console.log("-----------------------");
console.log("01) Modifique o hrfe do link externo do menu");

const link = document.querySelector('a[href^="http"]');
link.setAttribute("href", "https://www.google.com");
console.log(link);
