/**
 * Dependencies
 */
import React, { useState } from 'react';

/**
 * Components
 */
import Gallery from './components/gallery/Gallery';

/**
 * Styles
 */
import './App.css';

/**
 * Others
 */
import { imagesGallery } from './bd/bd';
import Button from './components/button/Button';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <main className={`app ${isDark ? 'dark' : 'light'}`}>
      <header>
        <Button
          onClick={() => setIsDark(!isDark)}
        >
          modo dark
        </Button>
      </header>
      <Gallery
        images={imagesGallery}
      />
    </main>
  );
}

export default App;
