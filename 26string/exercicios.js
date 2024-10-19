console.log("-----------------------");
console.log(
  "01) Utilizando o foreache no array abaixo some o valos da taxa e os valores de recebimento"
);

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];
let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace("R$ ", "");
  if (item.descricao.slice(0, 4) === "Taxa") {
    taxaTotal += numeroLimpo;
  } else if (item.descricao.slice(0, 4) === "Rece") {
    recebimentoTotal += numeroLimpo;
  }
});
console.log(`Taxa total: ${taxaTotal}`);
console.log(`Recebimento total: ${recebimentoTotal}`);

console.log("-----------------------");
console.log("02) Retorne uma array com a lista abaixo");

const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta;Foguete"; // Essa é a lista

const arrayTransportes = transportes.split(";");
console.log(arrayTransportes);

console.log("-----------------------");
console.log("03) Substitua todos os span's por a's ");
let html =
  "<ul> <li><span>Sobre</span></li> <li><span>Produtos</span><li> <li><span>Contato</span></li> </ul>";

html = html.split("span").join("a");
console.log(html);

console.log("-----------------------");
console.log("04) Retorne o último caracter da frase");

const frase = "Melhor do ano";
console.log(frase[frase.length - 1]);

console.log("-----------------------");
console.log("05) Retorne o total de taxas");
const transacoes2 =
  ["Taxa do Banco",
  "TAXA DO PÃO",
  "taxa do mercado",
  "depósito Bancário",
  "TARIFA especial"];

let taxasTotal1 = 0;
transacoes2.forEach((item1) => {
  //item = item.toLowerCase();
  //item = item.trim();
  //item = item.slice(0, 4);
  item1 = item1.toLowerCase().trim().slice(0,4) // O código acima é o mesmo que esta linha
  if (item1 === "taxa") taxasTotal1++;
});
console.log(taxasTotal1);
