console.log("-----------------------");
console.log(
  "01) Some 500 ao valor de scroll abaixo, atribuindo o novo valor a scroll"
);
console.log("-----------------------");

var scroll = 1000;
scroll += 500;
console.log(scroll); //1.500

console.log("-----------------------");
console.log(
  "02) Atribua True para a variável darCredito, caso o cliente possuia carro e casa. E false casa o contrário"
);
console.log("-----------------------");

var possuiCarro = true;
var possuiCasa = true;
var darCredito;
var darCredito = possuiCarro && possuiCasa;
console.log(darCredito);

// Outra forma fazer abaixo:

var possuiCarro = false;
var possuiCasa = true;
var darCredito;
var darCredito =
  possuiCarro && possuiCasa ? "Dar crédito ao cliente" : "Negar crédito ao cliente";
console.log(darCredito);
