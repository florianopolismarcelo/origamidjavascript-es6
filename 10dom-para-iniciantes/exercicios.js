console.log("-----------------------");
console.log("01) Retorne o url da página atual utilizando o objeto window");
console.log("-----------------------");

const sa = window.location.href;
console.log(sa);

console.log("-----------------------");
console.log(
  "02) Seleciona o primeiro elemento da página que possua a classe ativo"
);
console.log("-----------------------");

const elementoAtivo = document.querySelector('.ativo');
console.log(elementoAtivo);

console.log("-----------------------");
console.log("03) Retorne a liguagem do navegador");
console.log("-----------------------");

const liguagem = window.navigator.language;
console.log(liguagem);

console.log("-----------------------");
console.log("04) Retorne a largura da janela");
console.log("-----------------------");

const windowWidth = window.innerWidth;
console.log(windowWidth);
