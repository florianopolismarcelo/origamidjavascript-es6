 console.log("-----------------------");
console.log(
  "01) Quando o usuário clicar nos linkes internos dio site, adicione a classe ativo ao item clicando e remova dos demais itens caso eles possuem o mesmo. Previna o comportamento padrão desses links"
);
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo');
}
linksInternos.forEach((link) => {
  link.addEventListener("click", handleLink);
});

console.log("-----------------------");
console.log(
  "02) Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados"
);

const todosElementos = document.querySelectorAll('body *');
console.log(todosElementos)

function handleElemento(event){
  console.log(event.currentTarget)
}
todosElementos.forEach((elemeto) => {
  elemeto.addEventListener('click', handleElemento)
})


/*    Irei comentar o póximo exercício para não dar conflito no código anterior


console.log("-----------------------");
console.log(
  "03) Utilizando o código anterior, ao ivés de mostrar no console, remova o elemento que está sendo clicado, a método remove() remove um elemento"
);

const todosElementos = document.querySelectorAll("body *");
console.log(todosElementos);

function handleElemento(event) {
  event.currentTarget.remove();
}
todosElementos.forEach((elemeto) => {
  elemeto.addEventListener("click", handleElemento);
});
*/


console.log("-----------------------");
console.log("04) Se o usuário clicar na tecla (t), aumente o texto do site");

function handleClickT(event) {
  console.log(event.key)
  if(event.key === 't') {
    document.documentElement.classList.toggle('textomaior')
  }
}
window.addEventListener('keydown', handleClickT)

