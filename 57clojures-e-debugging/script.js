debugger;
function contagem() {
  let total = 0;
  return function incremento() {
    total++;
    console.log(total);
  };
}
//console.log(contagem());
const ativarIncremento = contagem();
ativarIncremento();
ativarIncremento();
ativarIncremento();
ativarIncremento();

/*
//Debugar e entender esse código
let item1 = 1;
function funcao1() {
  let item2 = 2;
  function funcao2() {
    let item3 = 3;
    console.log(item1);
    console.log(item2);
    console.log(item3);
  }
  funcao2();
}
funcao1();
*/
