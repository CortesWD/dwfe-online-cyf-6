/**
 * Dependencies
 */
import React from 'react';

/**
 * Components
 */
import Gallery from './components/gallery/Gallery';
import Card from './components/gallery/components/Card';
import CustomGallery from './components/gallery/CustomGallery/CustomGallery';

/**
 * Styles
 */
import './App.css';

/**
 * Others
 */
import { imagesGallery } from './bd/bd';

function App() {

  return (
    <>
      <Gallery
        images={imagesGallery}
        />
      <CustomGallery>
        <h2>nombres de las obras</h2>
        {imagesGallery.map((item) => {
          return (<p>{item.title}</p>)
        })}
      </CustomGallery>

      <CustomGallery>
        <h3>Imagenes </h3>
        {imagesGallery.map((item) => {
          return (<img src={item.url} />)
        })}
      </CustomGallery> 
    </>
  );
}

export default App;
