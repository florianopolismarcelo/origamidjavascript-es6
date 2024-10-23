console.log(
  "01) Retorne a soma total de caracteres dos parágrafos acima utilizando reduce"
);
console.log("-----------------------");

const paragrafos = document.querySelectorAll("p");

const totalCaracteres = Array.prototype.reduce.call(
  paragrafos,
  (acumulador, item) => {
    return acumulador + item.innerText.length;
  }
);
console.log(totalCaracteres);
console.log(paragrafos);

console.log("-----------------------");
console.log(
  "02) Crie uma função que retorne novos elementos html, com os seguintes parâmetros tag, classe e conteudo."
);

function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement("tag");
  classe ? elemento.classList.add(classe) : null;
  conteudo ? (elemento.innerHTML = conteudo) : null;
  return elemento;
}
console.log(criarElemento("li", "azul", "Esse é o conteudo"));

console.log("-----------------------");
console.log(
  "03) Crie uma nova função utilizando a anterior como base essa nova função deverá sempre criar h1 com a classe titulo. Porém o parâmetro conteudo continuará dinâmico"
);

const h1Titulo = criarElemento.bind(null, "h1", "titulo");
const cursosJS = h1Titulo("Cursos de JavaScript");
const cursosHTML = h1Titulo("Curso de HTML");

console.log(cursosJS, cursosHTML);
