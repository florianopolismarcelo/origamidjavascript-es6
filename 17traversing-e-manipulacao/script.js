const h1 = document.querySelector("h1");
const animaisLista = document.querySelector(".animais-lista");

h1.innerHTML = "<p>Novo Titulo</p>";
console.log(animaisLista.innerHTML);

console.log("-------------------------");

const animaisDescricao = document.querySelector(".animais-descricao");
console.log(animaisDescricao.innerHTML);

const lista = document.querySelector(".animais-lista");
console.log(lista.nextElementSibling);
console.log(lista.children);
console.log(lista.children[0]); // primeiro item da lista
console.log(lista.children[lista.children.length - 1]); // último item da lista
console.log(lista.children[--lista.children.length]); // também o último item da lista
console.log(lista.querySelector("li:last-child" )); // também o último item da lista


const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato')
const titulo = contato.querySelector('.titulo')
const mapa = document.querySelector('.mapa')

contato.removeChild(lista, titulo)
//contato.insertBefore(animais, mapa)

const novoh1 =document.createElement('h1')
novoh1.innerText = 'Novo Titulo'

mapa.appendChild(novoh1)
console.log(novoh1)


