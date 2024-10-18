const comida = "Pizza"; // Retorna uma string
const agua = new String("Água "); // Retorna um objeto

console.log(agua.length);

const frase = "A melhor comida";
console.log(frase[frase.length - 1]); // Ele mostra o último caracter
console.log(frase.charAt(frase.length - 1)) // Ele mostra o último caracter como no código acima

console.log(frase.charAt(0)); // Ele mostra o primeiro caracter


const frase1 = 'A melhor liguagem é ' // Concaternar
const linguagem = 'JavaScript.'
const fraseFinal = frase1 + linguagem
console.log(fraseFinal)

const frase2 = 'A melhor liguagem é ' // Concaternar
const linguagem2 = 'JavaScript.'
const fraseFinal2 = frase2.concat(linguagem2, "!!! ", "fafafaj ", "posso sempre cocatenar")
console.log(fraseFinal2)

const fruta = 'Banana'
const listaFrutas = 'Melancia, Banana, Laranja';
console.log(listaFrutas.includes(fruta, 14))

console.log(fruta.endsWith('na'))
console.log(fruta)
