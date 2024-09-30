const animais = document.getElementById("animais");
console.log(animais);

const gridSelection = document.getElementsByClassName("grid-section");
console.log(gridSelection[1]);

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const likInterno = document.querySelector('[href^="#]');
console.log(likInterno);

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg);
console.log(animaisImg[0]); // Seleciona imagem na possição especifica 

const gridSelectionHTML = document.getElementsByClassName('grid-section')
const gridSelectionNode = document.querySelectorAll('.grid-section')

primeiraUl.classList.add('grid-section')

console.log(gridSelectionHTML);
console.log(gridSelectionNode);
console.log(gridSelectionHTML[0]); // Seleciona na possição especifica, porém HTML foi adicionado grid-section
console.log(gridSelectionNode[0]);

gridSelectionNode.forEach(function(item, index){
  console.log(item)
})
const arrayGrid = Array.from(gridSelectionHTML)
console.log(arrayGrid)

arrayGrid.forEach(function(item) {
  console.log(item)
})