const frase1 = "Marculo Aluxandru";
const fraseNova1 = frase1.replace(/u/, "e");
console.log(fraseNova1); // Marcelo  Aluxandru

console.log("-----------------------------------------")

const frase2 = "Aletandre";
const regexp1 = /t/;
const fraseNova2 = frase2.replace(regexp1, "x");
console.log(fraseNova2); // Marcelo

console.log("-----------------------------------------")

const frase3 = "Marculo Aluxandru";
const fraseNova3 = frase3.replace(/u/g, "e"); //g significa global muda todas as ocorrencias da frase
console.log(fraseNova3); // Marcelo Alexandre

console.log("-----------------------------------------")

const regexp2 = /\w+/gi;

const frase4 = 'JavaScript Linguagem 101'
console.log(frase4.replace(regexp2, 'X'))

console.log("-----------------------------------------")

// Abaixo  mesmo do de cima mas com construtor

const regexp3 = new RegExp('\\w+', 'gi')

const frase5 = 'JavaScript Linguagem 101'
console.log(frase5.replace(regexp3, 'X')) 

console.log("-----------------------------------------")

//Quantas palavras Java tem na frase
const regexp4 = /Java/g 
const frase6 = 'JavaScript e Java Linguagem, Java';
let i = 1;
while(regexp4.test(frase6)) {
  console.log(i++)
}

console.log("-----------------------------------------")

//Quantas palavras Java tem na frase + last index
const regexp5 = /Java/g 
const frase7 = 'JavaScript e Java Linguagem, Java';
let a = 1;
while(regexp5.test(frase7)) {
  console.log(a++, regexp5.lastIndex)
}

console.log("-----------------------------------------")

//Pegar todas as palavras que tiverem Script

const frase8 = 'JavaScript, TypeScript, CoffeScript, Java' // Se tirar palavra Java vai entrar em loop infinito
const regexp6 = /\w+/g;
let b = 1;
while(regexp6.exec(frase8)) {
  console.log(b++)
}

console.log("-----------------------------------------")

const frase9 = 'JavaScript, TypeScript, CoffeScript, Java' 
const regexp7 = /\w+/g;
let regexpResult;
while((regexpResult = regexp7.exec(frase9)) !== null) {
  //console.log(regexpResultado)
  console.log(regexpResult[0])
}

console.log("-----------------------------------------")

const frase10 = 'JavaScript, TypeScript, CoffeScript, Java, 222' 

const regexp8 = /[A-Za-z]+/g;
//const regexp8 = /[0-9]+/g;
//const regexp8 = /\w+/g;

const resultado1 = frase10.match(regexp8)
console.log(resultado1)

console.log("-----------------------------------------")

const frase11 = 'JavaScript, TypeScript, CoffeScript, Java, 222' 

const regexp9 = /[A-Za-z]+/g; 
//const regexp9 = /Script/g;
//const regexp9 = ', ';

const resultado2 = frase11.split(regexp9) //Remove
console.log(resultado2)
 
console.log("-----------------------------------------")

const tags1 = `
<ul>
<li>item 1</li>
<li>item 2</li>
</ul>
`;

const resultado3 = tags1.replace(/ul/g, 'div') //Aqui ele só substitui todas ul's
//const resultado = tags.replace('ul', 'div') //aqui ele só substitui a primeira ul
console.log(resultado3)

console.log("-----------------------------------------")

//Abaixo está dentro da regexp

const tags2 = `
<ul>
<li>item 1</li>
<li>item 2</li>
</ul>
`;

const regexp10 = /(?<=<\/?)\w+/g  //Substitui tudo que tiver entre < >
//const regexp10 = /ul/g

const resultado4 = tags2.replace(regexp10, 'div') 
console.log(resultado4)

console.log("-----------------------------------------")

const emails1 = `
empresa@email.com
contato@email.com
suporte@email.com
empresa@email.com
`
const regexp11 = /(\w+@)[\w.]+/g;  //Altera para gmail.com
const reaultado5 = emails1.replace(regexp11, '$1gmail.com')
console.log(reaultado5)

console.log("-----------------------------------------")

const emails2 = `joao@hotmail.com.br
marta@ggmail.com.br
bruma@oulook.com.br
marcelo@origamid.com`;

const regexp12 = /(\w+@)([\w.]+)/g; //Altera para gmail.com
const resultado6 = emails2.replace(regexp12, function (...args) {
  if (args[2] === "homail.con.br") {
    return args[1] + "hotmail.com.br";
  } else if (args[2] === "ggmail.com.br") {
    return args[1] + "gmail.com.br";
  } else if (args[2] === "oulook.com.br") {
    return args[1] + "outlook.com.br";
  } else {
    return args[0];
  }
});
console.log(resultado6);
