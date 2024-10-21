const carros = ["Ford", "Fiat", "Honda"];

carros.forEach((item, index, array) => {
  console.log(item.toLocaleUpperCase(), index, array);
});

console.log("----------------------------------");
//Abaixo usando o map ao ivés de forEach o resultado será o mesmo

const carros2 = ["Ford", "Fiat", "Honda"];

carros2.map((item, index, array) => {
  console.log(item.toLocaleUpperCase(), index, array);
});

/*
const li = document.querySelectorAll("li");
li.forEach(i => i.classList.add("ativa"));

li.forEach(function (item) {
  item.classList.add("ativa");
});
*/
const numeros = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map((n) => n * 3);
console.log(numerosX3);

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const tempoAulas = aulas.map((aula) => aula.min);

console.log("----------------------------------");

const nomeAulas2 = function (aula) {
  return aula.nome;
};

const arrayNomeAulas = aulas.map(nomeAulas2);
console.log(arrayNomeAulas);
console.log(tempoAulas);

console.log("----------------------------------");

const numeros1 = [10, 25, 30, 3, 54, 33, 22];

const maiorNumero = numeros1.reduce((anterior, atual) => {
  if (anterior > atual) return anterior;
  else return atual;
}, 0);

console.log(maiorNumero);

console.log("----------------------------------");

const aulas2 = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const listaAulas2 = aulas2.reduce((acumulador, aulas2, index) => {
  console.log(aulas2.nome);
  acumulador[index] = aulas2.nome;
  console.log(acumulador);
  return acumulador;
}, {});
//console.log(listaAulas2)

console.log("----------------------------------");

const frutas2 = ["Banana", "Pêra", "Uva"];
const temUva = frutas2.some((item) => {
  return item === "Uva";
});
console.log(temUva);
