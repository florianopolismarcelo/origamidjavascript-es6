const frutas1 = ["Banana", "Morango", "Uva"];
const frase1 = "Isso é JavaScript";

fetch("https://pokeapi.co/api/v2/pokemon/").then(({ headers }) =>
  console.log(headers)
);
//.then(response => console.log(response)) Observação! Esse código é o mesmo do de cima
console.log(frutas1);
console.log(frase1);

//for..of
const frutas2 = ["Goiaba", "Manga", "Mamão"];
const frase2 = "I love myself";

for (const frut of frutas2) {
  console.log(frut);
}
for (const char of frase2) {
  console.log(char);
}

//Spread e for...of

const buttons = document.querySelectorAll("button");
for (const btn of buttons) {
  btn.style.color = "blue";
}
console.log(...buttons);

//for in
const carro = {
  marca: "Honda",
  ano: 2024,
};
for (const key in carro) {
  //console.log(key, carro[key]);
  console.log(carro[key]);
}

//------------------------------------------
const carro2 = {
  marca: "Kind",
  ano: 2017,
};

Object.defineProperties(carro2, {
  rodas: {
    value:4,
    enumerable: true,
  }
})
for (const key in carro2) {
  console.log(carro2[key]);
}
for(const f in frutas2) {
  console.log(frutas2[f])
}


//Chave e valor

const btnUnico = document.querySelector("button");
const btnStyles = getComputedStyle(btnUnico)
for(const style in btnStyles) {
  console.log(`${style}: ${btnStyles[style]}`)
}

// Do/While

let i = 0;
do {
  console.log(i++);
} while(i <= 10)