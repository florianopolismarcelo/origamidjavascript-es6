// Abaixo tem duas forma de construir um objeto

const carro1 = {
  // forma 1
  marca: "Ford",
  ano: 2018,
};
console.log(carro1);

console.log("-----------------------------------");

const carro2 = new Object({
  // forma 2
  nome: "BYD",
  ano: "2024",
});
console.log(carro2);

console.log("-----------------------------------");

const carro3 = {
  //marca: "Marca",
  rodas: 4,
  acelerar() {
    return this.marca + " acelerou";
  },
  buzinar() {
    return this.marca + " buzinou";
  },
};
console.log(carro3);

const honda1 = Object.create(carro3);
honda1.marca = "Honda";
console.log(honda1);

console.log("-----------------------------------");

const carro4 = {
  marca: "Marca",
  rodas: 4,

  init(valor) {
    this.marca = valor;
    return this;
  },
  acelerar() {
    return this.marca + " acelerou";
    //return ` ${this.marca} acelerou às ${this.rodas}  rodas.`;
  },
  buzinar() {
    return this.marca + " buzinou.";
  },
};
console.log(carro4);

const honda2 = Object.create(carro4).init("Honda2");
console.log(honda2.acelerar());

const ferrari = Object.create(carro4).init("Ferrari");
console.log(ferrari.acelerar());

console.log("-----------------------------------");

const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "bizinou";
  },
};

const moto = {
  rodas: 2,
  capacete: true,
};
Object.assign(moto, funcaoAutomovel);
console.log(moto);

console.log("-----------------------------------");

Object.defineProperties(moto, {
  rodas: {
    get() {
      return this._rodas;
    },
    set(valor) {
      this._rodas = valor * 4 + ' Total Rodas'
    },
  },
});

console.log(moto)
//Object.getOwnPropertyDescriptor(Array)
//Object.getOwnPropertyDescriptor(window)
//Object.getOwnPropertyDescriptor(moto)
Object.getOwnPropertyDescriptor(Array.prototype)

console.log("-----------------------------------");

const frutas = ["Banana"]
//console.log(Object.getPrototypeOf(frutas))
console.log(Object.getPrototypeOf(''))
console.log(Array.prototype)

console.log("-----------------------------------");

const frutas1 = ["Banana", "Pêra"]
const frutas2 = ["Banana", "Pêra"]

Object.is(frutas1, frutas2) // false