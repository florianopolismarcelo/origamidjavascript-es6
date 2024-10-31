console.log(
  "01) Mude a cor da tela para azul e depois para vermelho a cada 2s"
);
console.log("-----------------------");

/*
function mudarClasse() {
  document.body.classList.toggle("active");
}
*/

console.log(
  "02) Crie um cronometro utilizando o setInterval. Deve ser possível iniciar, pausar e resetar (duplo clique no pusar)."
);
console.log("-----------------------");

const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const tempo = document.querySelector(".tempo");

iniciar.addEventListener("click", iniciarTempo);
pausar.addEventListener("click", pausarTempo);
pausar.addEventListener("dblclick", resetarTempo);

let i = 0;
let timer;

function iniciarTempo() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 100);
  iniciar.setAttribute("disabled", "");
}

function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute("disabled");
  //console.log("pausar");
}

function resetarTempo() {
  tempo.innerText = 0;
  i = 0;
  //console.log("resetar");
}
