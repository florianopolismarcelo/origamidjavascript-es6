fetch("./dados.json")
  .then((r) => r.json())
  .then((json) => {
    json.forEach((materia) => {
      console.log(materia);
      //console.log(materia.aula);
      //console.log(materia.id);
      //console.log(materia.tempo);
    });
  });

fetch("./dados.json")
  .then((r) => r.text())
  .then((jsonText) => {
    const jsonFinal = JSON.parse(jsonText);
    console.log(jsonFinal);
  });

const configuracoes1 = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 JavaScript",
};

const stringConfig1 = JSON.stringify(configuracoes1);
console.log(stringConfig1);

const configuracoes2 = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 JavaScript",
};

localStorage.config = JSON.stringify(configuracoes2);
console.log(JSON.parse(localStorage.config));
