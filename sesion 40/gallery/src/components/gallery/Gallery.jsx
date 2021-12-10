/**
 * Dependencies
 */
import React, { useState } from "react";
import Button from '../button/Button';

/**
 * Components
 */
import Card from './components/Card';

function Gallery({ images }) {
  const [show, setShow] = useState(false);

  return (
    <div className="gallery-container">
      <Button
        onClick={() => setShow(!show)}
      >
        {`${show ? "ocultar " : "mostrar "} imagenes`}
      </Button>
      {show ? images.map((item, i) => {
        return (
          <Card
            key={`gallery-image-${i + 1}`}
            title={item.title}
            url={item.url}
          />
        )
      }) : (<p>No hay imagenes para mostrar</p>)}
    </div>
  );
}

export default Gallery;