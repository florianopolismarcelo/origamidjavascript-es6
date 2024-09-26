//window.alert('Oi estou aprendendo DOM');

const ma = window.location.href;
console.log(ma);

const h1Selecionado = document.querySelector("h1");
const h1Classes = h1Selecionado.classList;
console.log(h1Classes);

function teste() {
  console.log("Clicou em ", h1Selecionado.innerText);
}
h1Selecionado.addEventListener("click", teste);
