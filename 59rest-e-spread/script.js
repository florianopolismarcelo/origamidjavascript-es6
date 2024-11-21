//Parâmentro Rest
function anunciarGanhadores(...ganhadores) {
  ganhadores.forEach((ganhador) => {
    console.log(ganhador + " ganhou.");
  });
}
anunciarGanhadores("Marcelo", "Ângela", "Sebastiana");

//---------------------------------------------------------
console.log("----------------------")
function perimetroForma7(...listaArgumentos) {
  console.log(listaArgumentos);
  listaArgumentos.forEach((item) => console.log(item));
}
perimetroForma7(10, 20, 30, "Oi", "Teste");

console.log("----------------------")
function perimetroForma8(lado, totalLados, ...listaArgumentos) {
  console.log(listaArgumentos);
  return lado * totalLados;
}
console.log(perimetroForma8(10, 20, 30, "Oi", "Teste"));

//---------------------------------------------------------
console.log("----------------------")
function perimetroForma9(lado, totalLados, ...listaArgumentos) {
  console.log(listaArgumentos);
  console.log(arguments);
  return lado * totalLados;
}
console.log(perimetroForma9(10, 20, 30, "Oi", "Teste"));

//---------------------------------------------------------
console.log("----------------------")
function anunciarGanhadores1(premio, ...ganhadores) {
  ganhadores.forEach((ganhador) => {
    console.log(ganhador + " ganhou um " + premio);
  });
}
anunciarGanhadores1("carro", "Marcelo", "Sebastina", "Motta");

console.log("----------------------")
//Operador Spread

const frutas = ['Banana', 'Uva', 'Morango']
const legumes = ['Cenoura', 'Batata', 'Brócolis']
const comidas = [...frutas, 'Crepióca', ...legumes]
console.log(comidas)

console.log("----------------------")
//Spread Argument
function anunciarGanhadores2(premio, ...ganhadores) {
  ganhadores.forEach((ganhador) => {
    console.log(ganhador + " ganhou um " + premio);
  });
}
const ganhadores = ["João", "Maria", "Batista"]
console.log(anunciarGanhadores2("carro", ...ganhadores));

console.log("----------------------")
//Abaixo uso real Spread
const todosOsNumeros = [ 3,4,5,6,7,8,9,14,47]
const numeroMaximo = Math.max(...todosOsNumeros)
console.log(numeroMaximo)

console.log("----------------------")
//Transformar em Array
const btns = document.querySelectorAll('button')
const btnsArray = [...btns]
console.log(btnsArray)