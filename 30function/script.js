const perimetro = new Function("lado", "return lado * 4"); // Esse tipo de função não iremos usar
perimetro(5);

function somar(n1, n2) {
  return n1 + n2;
}
console.log(somar(3, 3)); // Faz a soma
console.log(somar.length); // Da o total de argumentos n1 n2 = 2 argumentos
console.log(somar.name); // Retorna o nome da função
console.log(somar.name.toLocaleUpperCase()); // Retorna o nome da função com a letra maiúscula


const carros = ['ford', 'Fiat', 'VW']
carros.forEach((item) => {
  console.log(item) // log de cada carro
})

console.log("-----------------------------------")

carros.forEach.call(carros, (item) => {
  console.log(item) // log de cada carro
})

console.log("-----------------------------------")


const frutas = ['Banana', 'Pêra', 'Uva']
carros.forEach.call(frutas, (item) => {
  console.log(item) // log de cada fruta mesmo tendo carros na frente do forEach o que iporta é frutas dentro do parenteses
})

console.log("-----------------------------------")

const frutas1 = ['Banana', 'Pêra', 'Uva']
//Array.prototype.pop.call(frutas1) // Pop retira o último item do array
frutas1.pop() // esse comando faz a mesma função que o comando acima
console.log(frutas1)


const carro = { 
  marca: 'Ford', 
  ano: 2018, 
  acelerar: function(aceleracao, tempo) { 
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`; 
  } 
} 
//carro.acelerar(100, 20); 
console.log(carro)
//Ford acelerou 100 em 20 

const honda = { 
  marca: 'Honda', 
}; 
const acelerarHonda = carro.acelerar.bind(honda); 
console.log(acelerarHonda(200, 10)); 
// Honda acelerou 200 em 10