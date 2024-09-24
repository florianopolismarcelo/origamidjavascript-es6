console.log("-----------------------");
console.log(
  "01) Crie um array com os anos que o Brasil ganhou a copa 1959, 1962, 1970, 1994, 2002"
);
console.log("-----------------------");

var copaDoMundo = [1959, 1962, 1970, 1994, 2002];
console.log(copaDoMundo);

console.log("-----------------------");
console.log(
  "02) interaja com array utilizando um loop, para  mostrar no console a seguinte mensagem, `O Brasil ganhou a copa de ${ano}`"
);
console.log("-----------------------");

for (var i = 0; i < copaDoMundo.length; i++) {
  console.log(`O Brasil ganhou a copa de: ` + copaDoMundo[i]);
}

console.log("-----------------------");
console.log(
  "03) Interaja com um loop nas futas abaixo e para ao chegar em pera"
);
console.log("-----------------------");

var frutas = ["Banana", "Maça", "Pera", "Uva", "Melância"];
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "Pera") {
    break;
  }
}

console.log("-----------------------");
console.log(
  "04) Coloque a última fruta no array acima em uma variável, sem remover a mesma do array."
);
console.log("-----------------------");

var ultimaFruta = frutas[frutas.length - 1]; //tira a última fruta
console.log(ultimaFruta); // lista só a última fruta
console.log(frutas); // mostra todas as frutas
