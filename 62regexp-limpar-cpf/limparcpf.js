const cpfsList = document.querySelectorAll(".cpf li");

const elementsInnerText = ([...elements]) => {
  return elements.map((element) => element.innerText);
};
const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, ""); //Limpa tudo que não for digito(número)
};

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
};
const formatarCPFS = (cpfs) => {
  return cpfs.map(limparCPF).map(construirCPF);
};

const substituiCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormatados = formatarCPFS(cpfs);

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  });
  console.log(cpfsFormatados)
};



substituiCPFS(cpfsList);

/*


console.log(limparCPF("121.121.222 33"));
console.log(construirCPF("12112122233"));
//console.log(formatarCPFS(cpfs3));

const resultado = elementsInnerText(cpfs);

console.log(formatarCPFS(resultado));
//console.log(elementsInnerText(cpfs));
*/

