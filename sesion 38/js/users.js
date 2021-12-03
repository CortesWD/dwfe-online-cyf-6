const peticiones = (get) =>
  fetch(`https://jsonplaceholder.typicode.com${get} `);

peticiones("/posts")
  .then((response) => {
    return response.json();
  })
  .then((body) => {
    console.log(body);
  })
  .catch((error) => {
    console.log(error);
  });

// const newURL = "https://jsonplaceholder.typicode.com/comments";

peticiones("/comments")
  .then((response) => {
    return response.json();
  })
  .then((body) => {
    for (let i = 0; i <= 10; i++) {
      const element = body[i];
      console.log(element.email);
    }
  })
  .catch((error) => {
    console.log(error);
  });



// function postByuserId(X) {
//   if (X > 10 || X < 1) {
//     console.log("ID invalido");
//     return;
//   } else {
//     peticiones(`/posts?userId=${X}`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((body) => {
//         console.log(body);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// }

// postByuserId(5);

/**
 * postByUser as promise
 */
const postByUserId = (id) => {
  return new Promise((resolve, reject) => {
    if (id < 10 || id < 1) {
      reject("ID inválido");
    } else {
      // resolve() puede recibir otras promesas (como fetch)
      // esto nos permite dejar en un solo nivel de encadenamiento (then, catch)
      // la resolucion de las mismas
      resolve(peticiones(`/posts?userId=${id}`))
    }
  });
}


postByUserId(1)
  .then((response) => {
    return response.json();
  })
  .then((body) => {
    console.log(body);
  })
  .catch((error) => {
    console.error(error);
  });