console.log("01)  Retorne um número aleatório entre 1050 e 2000");
console.log("-----------------------");

const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(aleatorio);

console.log("02)  Retorne o maior número da lista abaixo:");
console.log("-----------------------");

const numeros = "4, 5, 20, 27, 9";
const arraNumeros = numeros.split(", ");
const numeroMaximo = Math.max(...arraNumeros);
console.log(numeroMaximo);

console.log(
  "03) Crie uma função para limpar os preços e retornar os números com centavos arrendodados depois retorte a soma total"
);

const listaPrecos = ["R$ 59,99", "R$ 100,222", "R$ 230", "r$ 200"];

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", "."); // coloca em maúsculo, tira R$, tira o espaço em branco e tira virgula e coloca o ponto
  preco = +preco.toFixed(2); // arendonda o valor
  return preco;
}
let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limparPreco(preco);
});
console.log(
  soma.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
);

limparPreco(listaPrecos[1]);
