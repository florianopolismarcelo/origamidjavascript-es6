//fetch('https://pokeapi.co/api/v2/pokemon/1/')
//.then(resonse => resonse.json())
//.then(pokemon => {
// console.log(pokemon)
//})

const url1 = "https://jsonplaceholder.typicode.com/posts";
const options1 = {
  method: "POST",
  body: '{"title": "JavaScript"}',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

fetch(url1, options1)
  .then((response) => response.json())
  .then((json) => console.log(json));

const url2 = "https://jsonplaceholder.typicode.com/posts/2";
const options2 = {
  method: "PUT",
  body: '{"title": "JavaScript"}',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

fetch(url1, options1)
  .then((response) => response.json())
  .then((json) => console.log(json));

const url3 = "https://jsonplaceholder.typicode.com/posts/2";
const options3 = {
  method: "HEAD",
};

fetch(url1, options3).then((response) => {
  console.log(response.headers.forEach(console.log));
});
