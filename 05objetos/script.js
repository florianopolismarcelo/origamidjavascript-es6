var pessoa = {
  nome: "Marcelo",
  idade: 47,
};
console.log(pessoa);

//---------------------------

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
};
console.log(quadrado.area(5));

//---------------------------

var quadrado2 = {
  lados2: 4,
  areas(lados) {
    return lados * lados;
  },
  perimetro(lados) {
    return this.lados2 * lados;
  },
};
console.log(quadrado2.areas(5));
console.log(quadrado2.perimetro(5));
console.table(quadrado2)

//---------------------------

console.log(Math.random());
console.log(Math.PI);


//---------------------------
