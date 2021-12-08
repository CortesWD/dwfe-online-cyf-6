/**
 * Dependencies
 */
import React, { useState } from "react";

function CustomGallery({ children }) {
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
      {show && children}
    </div>
  );
}

export default CustomGallery;