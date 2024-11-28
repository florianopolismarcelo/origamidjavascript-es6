export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}

/*

const agora = new Date();
console.log(agora.getDate()); // Dia
console.log(agora.getDay()); // Dia da semana ex: 5 = Fri
console.log(agora.getMonth()); // Número dia mês
console.log(agora.getFullYear()); // Ano
console.log(agora.getHours()); // Hora
console.log(agora.getMinutes()); // Minutos
console.log(agora.getTime()); // ms desde 1970
console.log(agora.getHours()) - 3; // Brasília



const futuro = new Date('Dec 24 2018 23:59')
console.log(futuro)

*/
