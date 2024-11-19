function createButton(text) {
  function element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = text;
    return buttonElement;
  }
  return {
    text,
    element,
  };
}
const btnCompar = createButton("Comprar");
const btnVender = createButton("Vender");

console.log(btnCompar, btnVender);

//--------------------------------------------------

function createButton2(text) {
  function element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = text;
    return buttonElement;
  }
  return Object.freeze({
    // Não deixa sobrescrever outro nome congela (fixa) botão Comprar e Vender
    text,
    element,
  });
}
const btnCompar2 = createButton2("Comprar");
const btnVender2 = createButton2("Vender");

//btnCompar2.text = 'Novo texto';
//btnVender2.element = 'Novo texto';

console.log(btnCompar2, btnVender2);

//--------------------------------------------------

function Pessoa(nome) {
  if (!(this instanceof Pessoa)) {
    return new Pessoa(nome);
  }
  this.nome = nome;
}
Pessoa.prototype.andar = function () {
  return `${this.nome} andou`;
};
const designer = Pessoa("André");
console.log(designer);

//--------------------------------------------------

console.log("Abaixo continuação aula:");
// Observação: $$ é sinal de JQuery

function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function hide() {
    elements.forEach((element) => {
      element.style.display = "none";
    });
    return this; // esse retorno com this funciona da mesma forma do retorno comentado abaixo:
    //return $$(selectedElements);
  }
  function show() {
    elements.forEach((element) => {
      element.style.display = "initial";
    });
    return this;
    //return $$(selectedElements);
  }

  function on(onEvent, callback) {
    elements.forEach((element) => {
      element.addEventListener(onEvent, callback);
    });
    return this;
    //return $$(selectedElements);
  }

  function addClass(className) {
    elements.forEach((element) => {
      element.classList.add(className);
    });
    return this;
    //return $$(selectedElements);
  }
  function removeClass(className) {
    elements.forEach((element) => {
      element.classList.remove(className);
    });
    return this;
    //return $$(selectedElements);
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
  };
}
const btns = $$("button");
console.log(btns.hide().show());

function handleClick(event) {
  console.log(event.target);
  btns.addClass("active");
}
btns.on("click", handleClick);
