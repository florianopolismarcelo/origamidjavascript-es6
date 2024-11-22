console.log("-----------------------");
console.log(
  "02)  Crie 4 li's na página Utilizando o for...of dicione uma classe a cada li"
);

const itens = document.querySelectorAll("li");

for (const item of itens) {
  item.classList.add("ativo");
}

console.log("-----------------------");
console.log(
  "02) Utilize o for...in para listar todos as propriedades e valores do objeto window"
);

for (const windowKey in window) {
  console.log(windowKey + ": " + window[windowKey]);
}
