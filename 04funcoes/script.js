function area() {
  console.log("Função ativa");
}
area();

//---------------------------
function areaQuadrada(lado) {
  return lado;
}
console.log(areaQuadrada(2));

//---------------------------

function somaArea(lado) {
  return lado * lado;
}
console.log(somaArea(5));

//---------------------------

function pi() {
  return 3.14;
}
var total = 5 * pi();
console.log(total);

//---------------------------

function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta do mato";
  } else if (cor === "amarelo") {
    return "Você gosta do sol";
  } else {
    return "Essa cor não existe na base!";
  }
}
var cor = "azul";
console.log(corFavorita(cor));

//---------------------------

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}
console.log(imc(69, 1.75));

//---------------------------

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}
imc2(20, 1.8); //undefined
console.log(imc(1000, 1.8)); //retorna o imc e indefined

//---------------------------

imc3(69, 1.75) // imc aparece no console

function imc3(peso, altura) {
  const imc = peso / (altura ** 2)
  console.log("Seu IMC: " + imc)
}

//---------------------------

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Por favor preencha um número";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade("oi"));

//---------------------------

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} paises`;
}
console.log(faltaVisitar(20));

//---------------------------
var profissao = "Programador";
function dados() {
  var nome = "Marcelo";
  var idade = 47;
  function outrosDados() {
    var endereco = "Florianópolis";
    var idade = 29;
    return `Nome: ${nome} \nIdade: ${idade} \nEndereço: ${endereco} \nProfissão: ${profissao}`;
  }
  return outrosDados();
}
console.log(dados());

