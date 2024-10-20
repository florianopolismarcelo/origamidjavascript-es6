const intrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = ["49", "99", "69", "89"];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

console.log(dados);

const carros = new Array("Ford", "Fiat", "Honda");
carros[2] = "Ferrari"; //Substitui Honda por Ferrari
carros[2] = "Ferrari"; // A possição 3 não tem, mais adiciona
console.log(carros.length); //length retorna o tamanho do array

//const li = document.querySelectorAll('li')
//const ArrayLi = Array.from(li)

//onsole.log(li)
//console.log(ArrayLi)

const obj = {
  0: "Andar",
  1: "Rafael",
  2: "Teste",
  length: 4,
};
console.log(obj);

const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];
console.log(frutas.length); //Retorna 3 itens pois o array dentro do outra array conta como um item

const carros2 = ["Ford", "Fiat", "VW"];
carros2.unshift("Kia", "Ferrari"); // adiciona no inicio do array acima
carros2.push("Parati", "Gol"); // adiciona no final do array
console.log(carros2);
console.log(carros2.splice(2, 2)); //Número 4 é a quantidade de item que será removido e o número 2 quer dizer que apartir do segundo item não vai remover nada.

const linguagens = ["java", "ruby", "js", "php", "pyton", "js"];

linguagens.includes("Java"); // true
linguagens.includes("CSS"); // false
linguagens.indexOf("pyton"); // 4
linguagens.indexOf("js"); // 2
linguagens.lastIndexOf("js"); // 5
linguagens.join(); // java,ruby,js,php,pyton,js   ele junta tudo e passa virgula por padrão
linguagens.join(" "); // java ruby js php pyton js   ele junta tudo e separa
linguagens.join("-_-"); // java-_-ruby-_-js-_-php-_-pyton-_-js

let htmlString = "<h2>Titulo Principal</h2>";
htmlString = htmlString.split("h2"); // Ele corta o h2
htmlString = htmlString.join("h1"); // Adiciona o h1
console.log(htmlString);


const linguagens2 = ["java", "ruby", "js", "php", "pyton", "js"];
console.log(linguagens2.slice(2,4)) // Retorna entre o 2 e a quarta posição
console.log(linguagens2.slice()) // Retorna todo array
