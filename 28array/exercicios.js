console.log("01)  Retorne um número aleatório entre 1050 e 2000");
console.log("-----------------------");

const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
console.log(comidas);

//Remova o primeiro valor de comida e coloque em uma variável
const primeiroValor = comidas.shift();
console.log(primeiroValor);
console.log(comidas);

//Remova o último valor de comida e coloque em uma variável
const ultimoValor = comidas.pop();
console.log(ultimoValor);
console.log(comidas);

//Adicione 'Arroz' ao final do array
comidas.push("Arroz");
console.log(comidas);

//Adicione 'Peixe' e 'Batata' ao início do array

comidas.unshift("Peixe", "Batata");
console.log(comidas);

console.log("-----------------------");

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];

//Arrume os estudante em ordem alfabética
estudantes.sort();
console.log(estudantes);

//Inverta a ordem dos estudantes
estudantes.reverse();
console.log(estudantes);

//Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes("Joana")); //true

//Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes("Juliana")); //false

console.log(
  "02)  Subistitue section por ul e div com li, utilizando split e join"
);
console.log("-----------------------");

let html =
  "<section> <div>Sobre</div> <div>Produtos</div> <div>Contato</div> </section>";

html = html.split("section").join("ul").split("div").join("li");
console.log(html);

console.log(
  "02)  Remova o último carro, mas antes de remover salve o array original em outra variável"
);
console.log("-----------------------");

const carros = ["Ford", "Fiat", "VW", "Hond"];
const carrosCopia = carros.slice(); //Cópia

carros.pop(); //remove o último
console.log(carros); //Removido
console.log(carrosCopia); //Cópia
