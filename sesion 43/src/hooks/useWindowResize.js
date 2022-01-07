import { useEffect, useState } from 'react';

/**
 * @description crea un event listener al resize
 * @returns {Number} – window.innerWidth
 */
export function useWindowResize() {
  const [width, setWidth] = useState(undefined)

  useEffect(() => {

    function handleResize() {
      setWidth(window.innerWidth);
    }
    
    window.addEventListener('resize', handleResize);
    handleResize();
    // al destruir el componente
    // debemos quitar listeners y scripts para evitar
    // leaks de memoria y que la app crashee
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return width;
}