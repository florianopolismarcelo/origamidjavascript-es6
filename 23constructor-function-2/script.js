/*
const Dom = {
  seletor: "li",
  element() {
    return document.querySelector(this.seletor);
  },
  ativar() {
    this.element().classList.add("ativar");
  },
};
Dom.ativar(); // Aqui ativa na li
Dom.seletor = "ul";
Dom.ativar(); //Aqui ativa na ul
*/

function Dom(seletor) {
  this.element = function () {
    return document.querySelector(seletor);
  };
  this.ativar = function () {
    this.element().classList.add("ativar");
  };
}

const li = new Dom("li");
const ul = new Dom("ul");
const lastLi = new Dom("li:last-clild"); // Ativa o último item
lastLi.ativar();
