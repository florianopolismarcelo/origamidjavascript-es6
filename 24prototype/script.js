function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return "Abraçou";
  };
  this.andar = function () {
    return "Andou pelo objeto";
  };
}

var obj = {
  nome: "Souza",
  idade: 33,
};

obj.teste = "Isso";

Pessoa.prototype.andar = function () {
  return this.nome + "Pessoa andou";
};

Pessoa.prototype.nadar = function () {
  return this.nome + "Pessoa nadou";
};
const marcelo = new Pessoa("Marcelo", 47);

//console.log(Pessoa.prototype);
//console.log(marcelo.prototype); // dará undefined porque marcelo é um objeto não é uma função

const pais = "Brasil";
const cidade = new String("Rio");

const lista = document.querySelectorAll("li");

//Transforma em uma array
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const Carro = {
  marca: "Ford",
  preco: 2000,
  andar() {
    return true;
  },
};

Carro // Objeto
Carro.marca // String
Carro.preco // Number
Carro.andar // Boolean
Carro.marca.charAt // Function
Carro.marca.charAt // String