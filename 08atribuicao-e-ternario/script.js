//Abaixo são as atribuições

var numero1 = 5;
var numero2 = 10;

numero1 += numero2; //numero1 = numero1 + numero2
console.log(numero1);

numero1 -= numero2; //numero1 = numero1 - numero2
console.log(numero1);

numero1 *= numero2; //numero1 = numero1 * numero2
console.log(numero1);

numero1 /= numero2; //numero1 = numero1 / numero2
console.log(numero1);

numero1 %= numero2; //numero1 = numero1 % numero2
console.log(numero1);

numero1 **= numero2; //numero1 = numero1 ** numero2
console.log(numero1);

//Abaixo são os operadores ternários
var idade = 17;
var podeBeber;

podeBeber = idade >= 18 ? true : false;

console.log(podeBeber);

//----------------------------------------

var idade = 20;
var naoPossuiDiabete = true;
var podeBeber;

podeBeber = idade >= 18 && naoPossuiDiabete ? "Pode beber" : "Não pode beber";

console.log(podeBeber);

// condicionais sem {} lembrando que é apenas válido para quando é feito uma linha ao lado no máximo uma abaixo:

var estaEmpregado = false;
if (estaEmpregado) console.log("Sim, estou trabalhando.");
else console.log("Não estou trabalhando.");

var naoPossuiFaculdade = true;
if (naoPossuiFaculdade) 
  console.log("Sim, possuo faculdade.");
else 
  console.log("Não possuo faculdade.");
