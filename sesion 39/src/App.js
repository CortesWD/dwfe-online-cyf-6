/**
 * Dependencies
 */
import React from 'react';

/**
 * Components
 */
import Gallery from './components/gallery/Gallery';
import Card from './components/gallery/components/Card';

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
    </>
  );
}

export default App;
