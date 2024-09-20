console.log("-----------------------");
console.log("01) Crie uma função para verificar se um valor é truthy");
console.log("-----------------------");

function isTruthy(dado) {
  return !!dado;
}
var oieTruthy = isTruthy("oi");
console.log(isTruthy(""));

//----------------------------------

console.log("-----------------------");
console.log(
  "02) Crie uma função matemática que retorne o perímetro de um quadrado, lebrando: perímetro é a soma dos quatros lados do quadrado"
);
console.log("-----------------------");

function perimetroQuadrado(lado) {
  return lado * 4;
}
console.log(perimetroQuadrado(4));

//----------------------------------

console.log("-----------------------");
console.log(
  "03) Crie uma função que retone o seu nome completo ela deve posssuir os parâmetros: nome e sobrenome"
);
console.log("-----------------------");

function nomeCompleto(nome, sobrenome) {
  //return nome + ' ' + sobrenome
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto("Marcelo", "Souza"));
//----------------------------------

console.log("-----------------------");
console.log("04) Crie uma função que verifica se um número é par");
//----------------------------------
console.log("-----------------------");

function par(numero) {
  if (numero % 2 == 0) {
    return "Número par";
  } else {
    return "Não é par";
  }
}
console.log(par(9));

function parr(numero) {
  var modulo = numero % 2;
  if (modulo == 0) {
    return "Par";
  } else {
    return false;
  }
}
console.log(parr(6));

//----------------------------------

console.log("-----------------------");
console.log(
  "05) Crie uma função que retone o tipo de dado do argumento passado nela (typeof)"
);
console.log("-----------------------");

function tipoDeDado(dado) {
  return typeof dado;
}
console.log(tipoDeDado("oi"));
console.log(tipoDeDado(null));
console.log(tipoDeDado(5));
console.log(
  tipoDeDado(function () {
    console.log("teste");
  })
);

//----------------------------------

console.log("-----------------------");
console.log(
  "06) AddEventListener é uma função nativa do javaScript o primeiro parâmentro é o evento que ocorre e o segundo callback utiliza essa função para mostrar no controle o seu nome completo quando o oevento 'click' ocorrer"
);
// Observação! Função abaixo está correta porém testar no navegador.
/*
addEventListener("click", function () {
  console.log("Marcelo Souza");
});

*/
//----------------------------------

console.log("----------------------");
console.log("07) Corrija o erro abaixo:");
console.log("----------------------");

console.log("function precisoVisitar(paisesVisitados) {");
console.log("var totalPaises = 193;");
console.log(
  "return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;"
);
console.log("}");
console.log("function jaVisitei(paisesVisitados) {");
console.log(
  "return `Já visitei ${paisesVisitados} do total de ${totalPAises}` países;"
);
console.log("}");
console.log("precisoVisitar(20)");
console.log("jaVisitei(20)");
console.log("----------------------");
console.log("----------------------");

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de  ${totalPaises} paises`;
}

console.log(precisoVisitar(20))