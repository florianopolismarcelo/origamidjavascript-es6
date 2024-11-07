const promessa = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    setTimeout(() => {
      resolve({ nome: "Marcelo", idade: 47 });
    }, 1000);
  } else {
    reject(Error("Um erro ocorreu na promise"));
  }
});

//promessa.then((resolucao) => { console.log(resolucao)});

const retorno = promessa.
then((resolucao) => {
  console.log(resolucao);
  resolucao.profissao = "Programador";
  return resolucao;
})
.then(resolucao => {
  console.log(resolucao);
}, rejeitada => {
  console.log(rejeitada);
}).finally(() =>{
  console.log("Acabouuuuu!")
})
console.log(retorno);


//Observação mude a variável condicao para true e verifica o código.