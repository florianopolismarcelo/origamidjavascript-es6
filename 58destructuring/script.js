const carro1 = {
  marca: "Honda",
  ano: 2018,
};
const marca1 = carro1.marca;
const ano1 = carro1.ano;

console.log(marca1, ano1);

//Abaixo é com destructuring.

const carro2 = {
  marca: "Honda",
  ano: 2018,
};
const { marca, ano } = carro2;

console.log(marca, ano);

//-------------------------------------------------------
const cliente1 = {
  nome: "Marcelo",
  compras: {
    digitais: {
      livros: ["Livros 1", "Livros 2"],
      videos: ["Video JS", "Video CSS"],
    },
    fisicas: {
      cadernos: ["Caderno 1"],
    },
  },
};
console.log(cliente1.compras.digitais.livros);
console.log(cliente1.compras.digitais.videos);

//Abaixo é com destructuring.

const cliente2 = {
  nome: "Marcelo",
  compras: {
    digitais: {
      livros: ["Livros 1", "Livros 2"],
      videos: ["Video JS", "Video CSS"],
    },
    fisicas: {
      cadernos: ["Caderno 1"],
    },
  },
};
const { digitais, fisicas, digitais: {livros, videos}} = cliente2.compras;
console.log(digitais);
//const { digitais, fisicas } = cliente2.compras;
//console.log(digitais);
//const { livros, videos } = cliente2.compras.digitais;
//console.log(livros, videos);

const frutas1 = ['Banana', 'Manga', 'Melância']
console.log(frutas1[0])
console.log(frutas1[1])
console.log(frutas1[2])


//Abaixo é com destructuring.

const frutas2 = ['Banana', 'Manga', 'Melância']
const [primeira2, segunda2, terceira2] = frutas2;
console.log(primeira2, segunda2, terceira2)

// Declarando variáveis

const [primeira3, segunda3, terceiro3] = ['item 1','item 2','item 3']
console.log(primeira3, segunda3, terceiro3)

//-----------------------------------------------------
/*
function handleKeyboard(event) {
  console.log(event.key)
}
  document.addEventListener('keyup', handleKeyboard)
*/

// Abaixo é a função que está em cima porém estrá desistruturada
function handleKeyboard(key, keyCode) {
  console.log(key, keyCode)
}
document.addEventListener('keyup', handleKeyboard)