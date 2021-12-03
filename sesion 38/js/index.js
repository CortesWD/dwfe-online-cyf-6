const URL_BASE = 'https://jsonplaceholder.typicode.com';

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
