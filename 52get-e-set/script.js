const button1 = {
  get tamanho1() {
    return 200;
  },
};
console.log(button1.tamanho1);

console.log("-------------------------------------------------------");

const button2 = {
  get tamanho2() {
    button2.tamanho2 = 400;
    return this._numero;
  },
  set tamanho2(numero) {
    this._numero = numero * 2;
  },
};
console.log(button2.tamanho2);

console.log("-------------------------------------------------------");

const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  },
};
frutas.nova = 'Manga'
frutas.nova = 'Melância'
frutas.nova = 'Pêssego'
frutas.nova = 'Melão'

console.log(frutas);

console.log("-------------------------------------------------------");

// Abaixo sem o método SET
class Button1 {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  get element() {
    const buttonElement1 = document.createElement("button");
    buttonElement1.innerText = this.text;
    buttonElement1.style.color = this.color;
    return buttonElement1;
  }
}

const blueButton1 = new Button1("Comprar", "blue");
console.log(blueButton1);

console.log("-------------------------------------------------------");

// Abaixo com o método SET
class Button2 {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  get element() {
    const type = this._elementType || "button";
    const buttonElement2 = document.createElement("button");
    buttonElement2.innerText = this.text;
    buttonElement2.style.color = this.color;
    return buttonElement2;
  }
  set element(type) {
    this._elementType = type;
  }
}

const blueButton2 = new Button2("Comprar", "blue");
console.log(blueButton2);
