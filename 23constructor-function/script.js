function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro("Honda", 3000);
const fiat = new Carro("Fiat", 4000);
console.log(honda);
console.log(fiat);

console.log("-----------------------");

function Carro2(marca, precoInicial) {
  this.taxa = 1.2;
  const precoFinal = precoInicial * this.taxa;
  console.log(this); // Aqui só mostra a taxa
  this.marca = marca;
  console.log(this); // Aqui mostra a taxa e a marca
  this.preco = precoFinal;
  console.log(this); // Aqui mostra a taxa, a marca e preço.
}
const mazda = new Carro2("Mazda", 5000);
