console.log("-----------------------");
console.log("01) Mostre no console cada parágrafo do site");

const paragrafos = document.querySelectorAll('p')
console.log(paragrafos)

paragrafos.forEach((item) => {
  console.log(item)
})

console.log("-----------------------");
console.log("02) Mostre no console cada parágrafo no console");

paragrafos.forEach((item) => {
  console.log(item.innerText)
})