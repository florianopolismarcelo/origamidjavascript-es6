var nome = "Marcelo";
var idade = 28;
var possuiFaculdade = true;

console.log(
  "nome: " +
    nome +
    "\nIdade: " +
    idade +
    "\nPossui faculdade: " +
    possuiFaculdade
);

//----------------------------------

var preço = 25;
var totalComprado = 5;
totalPreco = preço * totalComprado;

console.log("Preço total: " + totalPreco);

//----------------------------------

var sobrenome = "Souza",
  cidade = "Florianópolis";

console.log("Seu sobrenome é: " + sobrenome + "\nSua fidade: " + cidade);

//----------------------------------

var semDefinir;
console.log("Variável não definida: " + semDefinir);

//----------------------------------

var gols = 500;
var frase1 = "Romário fez " + gols + "gols";
var frase2 = `Romário fez ${gols * 2} gols`;

console.log(frase1);
console.log(frase2);

//----------------------------------
console.log("");
console.log("Exercicio : ");
console.log("");
//----------------------------------

// Declarar uma variável com o seu nome
// Declarar uma variável com a sua idade
// Declarar uma variável comida sem valor
// Atribuir valor a sua comida favorita
// Declarar 5 variáveis diferentes sem valore

var name = "Marcelo";
var idade = 47;
var comida;
var comidaFavorita = "Tapióca";
var meta, numero, soma, resultado, sobreNome;

console.log(
  "Seu nome: " +
    nome +
    "\nSua idade: " +
    idade +
    "\nSua comida: " +
    comida +
    "\nSua comida favorita: " +
    comidaFavorita +
    "\nMeta: " +
    meta +
    "\nNúmero: " +
    numero +
    "\nsoma: " +
    soma +
    "\nResultado: " +
    resultado +
    "\nSobrenome: " +
    sobreNome
);
//----------------------------------
console.log("");
console.log("Exercicio : ");
console.log("");

// Declare uma variável contendo uma string
// Declare uma variável contendo um número dentro de uma string
// Declare uma variável com a sua idade
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
// Coloque a seguinte frase em uma variável: It's time
// Verifique o tipo da variável que contém o seu nome

var professor = "André";
var ano = "2024";
var idade = 47;
var nome = "Marcelo";
var sobreNome = "Souza";
var time = "It's time";

console.log(
  "Professor: " +
    professor +
    "\nAno atual: " +
    ano +
    `\nMeu nome: ${nome} ${sobreNome}` +
    "\nQual é o tempo: " +
    time
);
console.log(typeof nome); //Verifica o tipo da variável que contém seu nome
