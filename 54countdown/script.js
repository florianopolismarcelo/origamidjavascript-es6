import Countdown from "./countdown.js";
const tempoParaONatal = new Countdown("24 December 2024 23:59:59 GMT-0300");
const tempoParaAnoNovo = new Countdown("31 December 2024 23:59:59 GMT-0300");
const tempoParaMeuAniversario = new Countdown("16 july 2025 23:59:59 GMT-0300");

console.log(tempoParaONatal.total);
console.log(tempoParaAnoNovo.total);
setInterval(() => {
  console.log(tempoParaMeuAniversario.total);
}, 100000); // coloquei um número maior para não disparar continuadamente

//console.log(tempoParaONatal.days);
//console.log(tempoParaONatal.hours);
//console.log(tempoParaONatal.minutes);
//console.log(tempoParaONatal.seconds);
