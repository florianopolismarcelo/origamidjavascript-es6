console.log("-----------------------");
console.log("01) Transforme o objeto abaixo em uma Contrutor function");
console.log("-----------------------");

const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " Andou");
  },
};
//Abaixo é o Construtor function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(nome + " Andou");
  };
}

console.log("-----------------------");
console.log(
  "02) Crie 3 pessoas, João - 20 anos, Maria - 25 anos, Marcelo 15 anos"
);

const Joao = new Pessoa("Joao", 22);
const Maria = new Pessoa("Maria", 25);
const Bruno = new Pessoa("Bruno", 15);

console.log(
  "03) Crie um Construtor Function (Dom) para manipulação de listas de elementos do dom. Deve conter as seguintes propriedades e métodos: elements, retorna NodeList com os elementos selecionados addClass(classe), remove a classe a todos os elementos"
);

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}
const listaItens = new Dom("li");
const ul = new Dom("ul");

//listaItens.addClass("ativar");
//ul.addClass("ativar-ul");
