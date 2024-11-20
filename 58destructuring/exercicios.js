console.log("01) Extraia o backgroundColor, color e margin do btn");
 //const btn = document.querySelector('button'); 
 //const btnStyles = getComputedStyle(btn); 

 
 const btn = document.querySelector('button'); 
 const btnStyles = window.getComputedStyle(btn); // Se quiser não precisa coloar window na frente do getComputedStyle pois por padrão ele já está lá

const {backgroundColor, margin, color} = btnStyles; // desistruturação

 console.log(backgroundColor)
 console.log(margin)
 console.log(color)

/*
 //Observalção! Comentei o console.log abaixo: pois usei a desistruturação acima
 console.log(btnStyles.backgroundColor)
 console.log(btnStyles.margin)
 console.log(btnStyles.color)
*/
 console.log("-----------------------"); 
  console.log("02)  Troque os valores das variáveis abaixo ");
 //let cursoAtivo = 'JavaScript'; 
 //let cursoInativo = 'HTML'; 

 let cursoAtivo = 'JavaScript'; 
 let cursoInativo = 'HTML'; 

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo]
console.log(`Curso ativo agora é = ${cursoAtivo} \nCurso inativo agora é = ${cursoInativo}`)

 console.log("-----------------------"); 

  console.log("01) Corrija o erro abaixo");
/*
 const cachorro = { 
   nome: 'Bob', 
   raca: 'Labrador', 
   cor: 'Amarelo' 
 } 
 const {bobCor: cor} = cachorro; 
 */
 const cachorro = { 
  nome: 'Bob', 
  raca: 'Labrador', 
  cor: 'Amarelo' 
} 
const {cor: bobCor} = cachorro; // BobCor não existe seria cor e foi criada uma variável bobCor este é o erro
console.log(bobCor) 