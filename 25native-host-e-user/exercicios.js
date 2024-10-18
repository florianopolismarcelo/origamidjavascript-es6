console.log("01) liste 5 objetos nativos");

Object;
String;
Array;
Function;
Number;

console.log("-----------------------");
console.log("02) liste 5 objetos browser");

Window;
history;
Document;
HTMLCollection;
NodeList;

console.log("-----------------------");
console.log(
  "03) liste 1 método, propriedades ou objetos presentes no chrome que não existem no firefox"
);

if (typeof document.webkitVisibilityState !== "undefined") {
  console.log("Existe");
} else {
  console.log("Não existe");
}
