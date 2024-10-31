
function espera(texto) {
  console.log(texto)
}
setTimeout(espera, 1000, 'Passou 1s')


setTimeout(function(){
  console.log('Testando1')
}, 1000)


setTimeout(function(){
  console.log('Testando2')
}, 1000)


setTimeout(() => {
  console.log("Testando3");
}, 0);



for (let i = 0; i <= 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 300 * i);
}


let i = 0;
const meuLoop = setInterval(() => {
  console.log(i++)
  if(i > 10) {
    clearInterval(meuLoop)
  }
})