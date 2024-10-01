console.log("-----------------------");
console.log("01) Retorne no console todas as imagens do site");

const animaisImg = document.querySelectorAll("img");
console.log(animaisImg);

console.log("-----------------------");
console.log(
  "02) Retorne no console apenas as imagens que começam com a palavra imagem"
);

const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

console.log("-----------------------");
console.log("03) Selecione todos os links internos (onde o href começa com #)");

const likInterno = document.querySelectorAll('[href^="#"]');
console.log(likInterno);

console.log("-----------------------");
console.log("04) Selecione o primeiro h2 dentro de .animais-descricao");

const h2Animais = document.querySelector('.animais-descricao h2');
console.log(h2Animais);

//Outra forma abaixo:

const animais = document.querySelector('h2');
console.log(animais);

console.log("-----------------------");
console.log("05) Selecione o último p do site");

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[--paragrafos.length]);