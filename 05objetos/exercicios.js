console.log("-----------------------");
console.log(
  "01) Crie um objeto com os seus dados pessoais deve possuir per pelo menos duas propriedades nome e sobre nome"
);
console.log("-----------------------");

pessoa = {
  nome: "Marcelo",
  sobreNome: "Souza",
  idade: 28,
  cidade: "Florianópolis",
};
console.log(pessoa);

console.log("-----------------------");
console.log("02) Crie um método anterior que mostre seu nome completo");
console.log("-----------------------");

pessoa.nomeCompleto = function () {
  return `${this.nome} ${this.sobreNome}`;
};
console.log(pessoa.nomeCompleto());

console.log("-----------------------");
console.log("03) Modifique abaixo o valor da propriedade preço para 3000");
console.log("-----------------------");
console.log("var carro = {");
console.log("preco: 1000,");
console.log("portas: 4,");
console.log("marca: 'Audi'");
console.log("}");

var carro = {
  preco: 1000,
  portas: 4,
  marca: "Kind",
};
carro.preco = 3000; // Foi mudado sem alterar dentro do objeto
console.log(carro);

console.log("-----------------------");
console.log(
  "04) Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem"
);
console.log("-----------------------");

var cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa == "homem") {
      return "latir";
    } else {
      return false;
    }
  },
};
console.log(cachorro)
console.log(cachorro.latir('homem'))