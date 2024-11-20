//Parâmentros

function perimetroForma1(lado, totalados) {
  return lado * totalados;
}
perimetroForma1(10, 4); // Valor 40
perimetroForma1(10); // NaN
console.log(perimetroForma1(10, 4))
console.log(perimetroForma1(10))
console.log("----------------------")



function perimetroForma2(lado, totalados) {
  totalados = totalados || 4;
  return lado * totalados;
}
perimetroForma2(10, 4); // Valor 40
perimetroForma2(10); // Valor 40
console.log(perimetroForma2(10, 4))
console.log(perimetroForma2(10))
console.log("----------------------")

function perimetroForma3(lado, totalados = 4) {
  return lado * totalados;
}
perimetroForma3(10, 4); // Valor 40
perimetroForma3(10); // Valor 40
console.log(perimetroForma3(10, 4))
console.log(perimetroForma3(10))
console.log("----------------------")


//Abaixo arguments
function perimetroForma4(lado, totalados = 4) {
  console.log(arguments)
  return lado * totalados;
}
perimetroForma4(10, 4); // Valor 40
//perimetroForma4(10); // Valor 40
console.log(perimetroForma4(10))
console.log("----------------------")

//Abaixo arguments em array

function perimetroForma5(lado, totalados = 4) {
  const argArray = Array.from(arguments)
  console.log(argArray)
  return lado * totalados;
}
perimetroForma5(10, 4); // Valor 40
//perimetroForma4(10); // Valor 40

console.log("----------------------")
// Com forEach para mostrar cada argumentos
function perimetroForma6(lado, totalados = 4) {
  const argArray = Array.from(arguments)
  argArray.forEach(arg => {
    console.log(arg)
  })
  console.log(argArray)
  return lado * totalados;
}
perimetroForma6(10, 4); // Valor 40
//perimetroForma4(10); // Valor 40
