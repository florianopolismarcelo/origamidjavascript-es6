/*
const doc = fetch("./doc.txt");
doc.then(resolucao => {
  resolucao.text().then((body) => {
    console.log(body);
    })
    })
    */

/*
    const doc = fetch("./doc.txt");
    
    doc
    .then((resolucao) => {
      return resolucao.text();
    })
    .then((body) => {
      const conteudo = document.querySelector(".conteudo");
      conteudo.innerText = body;
      console.log(body);
    });
     */
const cep = fetch("https://viacep.com.br/ws/01001000/json/");

cep.then(r  => r.json()
.then((body) => {
    console.log(body);
    const conteudo = document.querySelector(".conteudo");
  })
);
