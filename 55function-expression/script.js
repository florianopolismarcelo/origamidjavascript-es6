function somar1(a, b) {
  return a + b;
}
console.log(somar1(7, 8));

//-----------------------------------------------------------

const somar2 = function (a, b) {
  // pode colocar a variável como let ou var
  return a + b;
};
console.log(somar2(9, 8));

//-----------------------------------------------------------

const somar3 = (a, b) => {
  return a + b;
};
console.log(somar3(18, 10));

//-----------------------------------------------------------

const somar4 = (a, b) => a + b; // Por ter uma linha pode simplificar assim
console.log(somar4(17, 30));

//-----------------------------------------------------------

const somar5 = (a) => a + a; // Por ter um parametro (a) pode simplificar assim
console.log(somar5(17));

//-----------------------------------------------------------

function initCodigo1() {
  const instrumento1 = "Cavaquinho";
  console.log(instrumento1);
}
initCodigo1();

//-----------------------------------------------------------

