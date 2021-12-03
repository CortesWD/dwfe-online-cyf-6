const URL_BASE = 'https://jsonplaceholder.typicode.com';

// Guardamos fetch en una funcion para tener una URL BASE
// asi evitamos escribir siempre toda la dirección web
// el parametro "path" nos va permitir escribir N peticiones
// sin necesidad de escribir lo mismo una y otra vez
const request = (path) => fetch(`${URL_BASE}${path}`);

request('/posts?userId=1')
  .then((response) => {
    //response.json() es una promesa que nos va parsear en
    // datos legibles para JS
    return response.json();
  })
  .then((body) => {
    console.log('b', body);
  })
  .catch((err) => {
    console.error(err);
  });
