var possuiGraduacao = true;

if (possuiGraduacao) {
  console.log("É verdadeiro.");
} else {
  console.log("É falso.");
}

//----------------------------------

var possuiGraduacao = true;
var possuiDoutorado = true;

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado.");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado.");
} else {
  console.log("Não possui graduação");
}

//----------------------------------

var possuiGraduacao = true;
var possuiDoutorado = true;

if (!possuiDoutorado) {
  // !possuiDoutorado  o ponto de ! inverte o valor
  console.log("Possui graduação e doutorado.");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado.");
} else {
  console.log("Não possui graduação");
}

//----------------------------------

var possuiGraduacao = true;
var possuiDoutorado = true;

if (!!possuiDoutorado) {
  // !possuiDoutorado  o ponto de ! inverte o valor pode ser colocado 2
  console.log("Possui graduação e doutorado.");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado.");
} else {
  console.log("Não possui graduação");
}
console.log("-----------------------");
console.log("(5 - 5) && (5 + 5)) É verdadeiro ou falso.");

if (5 - 5 && 5 + 5) {
  console.log("verdadeiro");
} else {
  console.log("false");
}

console.log("-----------------------");
console.log("(5 + 5) && (5 + 5)) É verdadeiro ou falso.");

if (5 + 5 && 5 + 5) {
  console.log("verdadeiro");
} else {
  console.log("false");
}

console.log("-----------------------");
console.log("(5 - 10) && (5 + 5)) É verdadeiro ou falso.");

var condicional = 5 - 10 && 5 + 5;
if (condicional) {
  console.log("verdadeiro");
} else {
  console.log("false");
}

/* também tem as condicionais ou que é representado pela || 

true || true = true
true || false = true
false || true = true
false || false = false

*/
