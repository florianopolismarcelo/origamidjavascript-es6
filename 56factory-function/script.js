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
  return Object.freeze({ // Não deixa sobrescrever outro nome congela (fixa) botão Comprar e Vender
    text,
    element
  });
}
const btnCompar2 = createButton2("Comprar");
const btnVender2 = createButton2("Vender");

//btnCompar2.text = 'Novo texto';  
//btnVender2.element = 'Novo texto';

console.log(btnCompar2, btnVender2);

//--------------------------------------------------

function Pessoa(nome){
  if(!(this instanceof Pessoa)){
    return new Pessoa(nome)
  }
  this.nome = nome;
}
Pessoa.prototype.andar = function() {
  return `${this.nome} andou`
}
const designer = Pessoa('André')
console.log(designer)

//--------------------------------------------------