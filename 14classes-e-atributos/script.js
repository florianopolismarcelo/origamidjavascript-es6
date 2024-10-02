const menu = document.querySelector(".menu");

menu.classList.add("ativo", "teste", 'cavaquinho');
console.log(menu.classList);
//console.log(menu.classList[1])
console.log(menu.classList);
menu.classList.remove("cavaquinho");
//menu.classList.toggle("cavaquinho"); // adicionou cavaquinho novamente, caso der outro toggle ele vai remover
console.log(menu.classList);

if (menu.classList.contains("teste")) {
  menu.classList.add("possui-teste");
} else {
  menu.classList.add("nao-possui-teste");
}
console.log(menu.classList);


//Abaixo são outras formas de adicionar classes

//menu.className = 'repique pandeiro violao'
//menu.className += " tanta"
//menu.className = 22
//console.log(menu.className)


//Abaixo são atributos

const animais = document.querySelector('.animais')
console.log(animais.attributes.class)
//console.log(animais.attributes['data-texto'])
//console.log(animais.attributes.id)
//console.log(animais.attributes[0])
//console.log(animais.attributes.class)


const img = document.querySelector('img')
//console.log(img.getAttribute('src'))
//console.log(img.getAttribute('alt'))

img.setAttribute('alt', 'mudei-o-atributo-alt')
console.log(img)

const srcImg = img.getAttribute('alt')
console.log(srcImg)

const possuiAlt = img.hasAttribute('alt')
console.log(possuiAlt)

//img.removeAttribute('alt')