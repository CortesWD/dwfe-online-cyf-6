const app = document.getElementById('root');

/**
 * @description manejador de request
 * @param {String} term - query de busqueda
 * @return {Promise} Pending promise
 */
const request = (term) => fetch(`https://api.giphy.com/v1/gifs/search?api_key=0Cg9Dw1etb3muvtWJ0QVulp1iW7iRPnE&q=${term}&limit=12&offset=0&rating=g&lang=en`);

/**
 * @description creador dinámico de etiquetas <img />
 * @param {String} src - atributo src
 * @return {HTMLElement} elemento <img /> con un src
 */
const Img = (src) => {
  const element = document.createElement('img');
  element.setAttribute('src', src);
  return element;
};

/**
 * @description manejador/get de promesa
 * @param {String} query
 */
async function getGifs(query) {
  const response = await request(query);

  //Validacion para ejecutar script si API responde OK
  if(response.status === 200) {
    const json = await response.json();
    json.data.forEach(element => {
      const { images } = element;
      const { fixed_height } = images;
      app.appendChild(Img(fixed_height.url));
    });

  } else {
    console.log(response);
    app.innerHTML = `<p> Ocurrio un error al traer gifs</p>`;
  }
}

getGifs('cat');