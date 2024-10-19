console.log(Number.isNaN("ds"));
console.log(Number.isInteger("10.43434"));

console.log(parseFloat("  32434.343"));
console.log(parseFloat("100.27 reais"));
console.log(parseInt("100.27 reais", 10));
console.log(parseInt("23.49", 10));

const preco = 10.32322;
console.log(preco.toFixed(1)); // 1 é quantidade de casa depois do ponto

let valor1 = 48.49;
let valor2 = 50.01;
valor1 = valor1.toLocaleString("en-US", { style: "currency", currency: "USD" });
valor2 = valor2.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
console.log(valor1);
console.log(valor2);

console.log(Math.PI);
Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4

Math.max(5,3,10,42,2) // Retorna o maior número
Math.min(5,3,10,42,2) // Retorna o menor número


const aleatorio1 = Math.floor(Math.random() * 10)
console.log(aleatorio1)


const aleatorio2 = Math.floor(Math.random() * (72 - 32 + 1)) + 32; // Número random entre 72 e 32
console.log(aleatorio2)

const aleatorio3 = Math.floor(Math.random() * (40 - 20 + 1)) + 20; // Número random entre 72 e 32
console.log(aleatorio3)