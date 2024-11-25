const cpfs1 = document.querySelectorAll(".cpf li");

function elementsInnerText(elements1) {
  const arrayElements1 = Array.from(elements1);
  return arrayElements1.map((element1) => {
    return element1.innerText;
  });
}
console.log(elementsInnerText(cpfs1));

console.log("---------------------------------");
//Abaixo é a mesma acima porem simplificada
const cpfs2 = document.querySelectorAll(".cpf li");

const elementsInnerText1 = ([...elements2]) => {
  return elements2.map((element3) => element3.innerText);
};
console.log(elementsInnerText1(cpfs2));

console.log("---------------------------------");
//Abaixo limpa CPF completo
const cpfs3 = document.querySelectorAll(".cpf li");

const elementsInnerText2 = ([...elements3]) => {
  return elements3.map((element4) => element4.innerText);
};
const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, ""); //Limpa tudo que não for digito(número)
};