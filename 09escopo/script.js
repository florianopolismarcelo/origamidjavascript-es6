//Variável dentro do escopo

function mostrarCarro() {
  var carro = 'Fusca'
  console.log(carro)
}
mostrarCarro()


//Variável fora do escopo (Variável Global)
var carro = 'Fiat'
function qualCarro(){
}
qualCarro()
console.log(carro)


var instrumentoMusical = 'Cavaquinho'
function mostrarInstrumento(){
  var frase = `Meu instrumento é um ${instrumentoMusical}`
  console.log(frase)
}
mostrarInstrumento()
console.log(instrumentoMusical)