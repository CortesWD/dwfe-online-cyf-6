const app = document.getElementById('root');

/**
 * @description manejador de request
 * @param {string} term - query de busqueda
 * @returns {Promise} Pending promise
 */
const request = (term) => fetch(`https://api.giphy.com/v1/gifs/search?api_key=0Cg9Dw1etb3muvtWJ0QVulp1iW7iRPnE&q=${term}&limit=12&offset=0&rating=g&lang=en`);

/**
 * @description creador de etiquetas <img />
 * @param {string} src - atributo src
 * @returns {HTMLElement} elemento <img /> con un src
 */
const Img = (src) => {
  const element = document.createElement('img');
  element.setAttribute('src', src);
  return element;
};

async function getGifs(query) {
  const response = await request(query);

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