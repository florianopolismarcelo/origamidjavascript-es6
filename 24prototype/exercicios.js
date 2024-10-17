console.log("-----------------------");
console.log(
  "01) Crie uma função con trutora de Pessoas, deve conter nome, sobrenome e idade, crie um método no protótipo que retorne o nome completo da pessoa"
);
console.log("-----------------------");

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};
const marcelo = new Pessoa("Marcelo", "Souza", 47);
console.log("-----------------------");
console.log(
  "02) Liste os métodos acessados por dados criados com NodeList, HTMLColletion, Document"
);

Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

console.log("-----------------------");
console.log("03) Liste os os construtores dos dados abaixo");

const li = document.querySelectr("li");

li; // HTMLElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // Undefined

onsole.log("-----------------------");
console.log("03) Qual o construtor do dado abaixo: ");

li.hidden.constructor.name; // Retorna uma String, cuidado com a pegadinha pois aperece um boolean estudar mais sobre...
