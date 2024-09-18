console.log("-----------------------");
console.log(
  "Verifique se a sua idade é maior que a de algum parente, dependendo do resultado coloque É maior, É igual ou menor. "
);

var minhaIdade = 47;
var idadeAmigo = 38;

if (minhaIdade > idadeAmigo) {
  console.log("Idade é maior.");
} else if (minhaIdade === idadeAmigo) {
  console.log("idade é igual");
} else {
  console.log("Idade é menor");
}

console.log("-----------------------");
console.log(
  "Qual valor é retornado na seguinte expressão: var expressao = (5 - 2) && (5 - ' ') && (5 - 2)? "
);
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao);

console.log("-----------------------");
console.log("Verifique se as seguintes variáveis são truthu ou falsy");

var nome = "André";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(
  "Nome: " +
    !!nome +
    "\nIdade: " +
    !!idade +
    "\nPossui Doutorado: " +
    !!possuiDoutorado +
    "\nEmprego Futuro: " +
    !!empregoFuturo +
    "\nDinheiro na conta: " +
    !!dinheiroNaConta
);

console.log("-----------------------");
console.log(
  "Compare o total de habitantes do Brasil com China (valor em milhões)"
);

var brasil = 287;
var china = 1348;

if (brasil > china) {
  console.log("Brasil tem mais abitantes");
} else {
  console.log("China tem mais abitantes");
}

console.log("-----------------------");
console.log("O que aparecerá no console?");

if (("Gato" === "gato") && (5 > 2)) {
  console.log("verdadeiro");
} else {
  console.log("Falso");
}

console.log("-----------------------");
console.log("O que aparecerá no console?");

if (("Gato" === "gato") || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log("Falso");
}