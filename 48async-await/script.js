/*
async function puxarDados() {
  const responseDados = await fetch("./dados.json");
  const jsonDados = await responseDados.json();

  document.body.innerText = jsonDados.aula;
  console.log(jsonDados)
}
puxarDados()
*/

/*
async function puxarDados() {
  try {
    const responseDados = await fetch("./dados.json"); // Se estiver errado caminho será catch erro
    const jsonDados = await responseDados.json();
    document.body.innerText = jsonDados.aula;
    console.log(jsonDados)
  } catch {
    console.log(erro);
  }
}
puxarDados();
*/

async function puxarDados() {
  const responseDados = fetch("./dados.json");
  const responseClientes = fetch("./clientes.json");

  const jsonDados = await (await responseDados).json();
  const jsonClientes = await (await responseClientes).json();

  console.log(jsonDados)
  console.log(jsonClientes)
}
puxarDados()
