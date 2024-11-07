const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuário Logado");
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados Carregados");
  }, 1500);
});

//const carregouTudo = Promise.all([login, dados]);
const carregouTudo = Promise.race([login, dados]); // race mostra o primeiro a carregar all carrega todos
carregouTudo.then((resolucao) => {
  console.log(resolucao);
});
