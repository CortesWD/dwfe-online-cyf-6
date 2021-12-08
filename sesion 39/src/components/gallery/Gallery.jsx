/**
 * Dependencies
 */
import React, { useState } from "react";

/**
 * Components
 */
import Card from './components/Card';

function Gallery({ images }) {
  const [show, setShow] = useState(false);

  return (
    <div className="gallery-container">
      <button
        type="button"
        className="btn"
        onClick={() => setShow(!show)}
      >
        {`${show ? "ocultar " : "mostrar "} imagenes`}
      </button>
      {show ? images.map((item, i) => {
        return (
          <Card
            key={`gallery-image-${i+1}`}
            title={item.title}
            url={item.url}
          />
        )
      }) : (<p>No hay imagenes para mostrar</p>) }
    </div>
  );
}

export default Gallery;