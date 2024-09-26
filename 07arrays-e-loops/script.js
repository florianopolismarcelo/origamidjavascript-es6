let videoGames = ["SNES", "MEGADRIVE", "NEOGEO"];
console.log(videoGames.length); // iforma quantas tem dentro do array
videoGames.push("DREAN CAST"); // adiciona último item
console.log(videoGames);
videoGames.pop(); // remove o último ítem
console.log(videoGames);

//---------------------------

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//---------------------------

let i = 0;
while (i <= 50) {
  console.log(i);
  //i++;
  i = i + 5; // Ao ivés de i++ aqui ele incrementa de 5 em 5
}

//---------------------------

let intrumentosMusicais = [
  "Cavaquinho",
  "Violão",
  "Banjo",
  "Repique",
  "Pandeiro",
];

for (i = 0; i < intrumentosMusicais.length; i++) {
  console.log(intrumentosMusicais[i]);
  if (intrumentosMusicais[i] === "Repique") {
    // essa condição break ele para onde solicitado
    break;
  }
}

let frutas = ["Goiaba", "Mamão", "Uva", "Abacate", "Laranja"];
frutas.forEach(function(xxxdd) { // Entre () pode passar qualquer parâmetro no forEach
  console.log(xxxdd);
});
