

console.log("01) Remova o erro abaixo:");
/*
prieceNumber("R$ 99,99");
const prieceNumber = (n) => +n.replace("R$", "").replace(",", ".");
*/ 
console.log("-----------------------");
const prieceNumber1 = (n) => +n.replace("R$", "").replace(",", ".");
console.log(prieceNumber1("R$ 99,99"));

//Observação a função abaixo é a mesma que a de cima, verificar com atenção o que muda!
const prieceNumber2 = function (n) {
  return +n.replace("R$", "").replace(",", ".");
};
console.log(prieceNumber2("R$ 99,99"));

console.log("02) Crie um IIFE e esole o escopo de qualquer código JS");
console.log("-----------------------");

(function() {
  const nome = 'Marcelo'
  console.log(nome)
})();

console.log("03) Como podemos utilizar a função abaixo:");
console.log("-----------------------");

const active = (callback) => callback();

//A função que está acima não faz sentido usar 
active(function() {
  console.log('Teste de Active')
})
