console.log("-----------------------");
console.log(
  "01) Verifique a distância da primeira imagem em relação ao topo da página"
);

const img = document.querySelector("img");
const imgTop = img.offsetTop;
console.log(imgTop);

console.log("-----------------------");
console.log("-----------------------");
console.log(
  "03) Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo, (48px/48px de acordo com o google"
);

const links = document.querySelectorAll('a')
links.forEach((link) => {
  const linkWidth = link.offsetWidth
  const linkHeight = link.offsetHeight
  if(linkWidth >= 48 && linkHeight >= 48){
    console.log(link, "Possui boa acessibilidade")
  }else{
    console.log(link, "Não possui boa acessibilidade")

  }
})
console.log(links)

console.log("-----------------------");
console.log(
  "04) Se o browser for menor que 720px, adicione o clesse menu-mobile ao menu"
);

console.log("-----------------------");
console.log("02) Retorne a soma da largura de todas as imagens");

function somaImagens() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}
window.onload = function () {
  somaImagens();
};


