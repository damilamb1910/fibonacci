import React, { useEffect, useRef, useState } from 'react';
import './particleCircle.css';


const ParticleCircle = () => {
  const canvasRef = useRef(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    const cant = 300;
    const offset = 2 / cant;
    const increment = Math.PI * (3 - Math.sqrt(5));
    const canvas = canvasRef.current;
  
    const createCircles = () => {
      // Limpiar los elementos antiguos
      canvas.innerHTML = '';

      const radius = windowSize < 1260 ? 100 : 200;  // Ajustar el radio según el tamaño de la ventana

      // Crear los elementos
      for (let i = 0; i < cant; i++) {
        const circle = document.createElement("div");
        circle.className = "point";
        circle.setAttribute("data-index", i);
        canvas.appendChild(circle);
      }

      // Aplicar transformaciones a los puntos
      const updatePoints = (evt) => {
        let x, y, z, r, a, scale, opacity, point, style;
        const angle = evt ? (-evt.pageX / 4) * Math.PI / 180 : 0;

        for (let i = 0; i < cant; i++) {
          y = (i * offset - 1) + (offset / 2);
          r = Math.sqrt(1 - Math.pow(y, 2));
          a = ((i + 1) % cant) * increment + angle;
          x = Math.cos(a) * r;
          z = Math.sin(a) * r;

          scale = Math.round(z * 20000) / 100;
          opacity = (1 + z) / 1.5;

          style = `translate3d(${250 + x * radius}px, ${250 + y * radius}px, ${scale}px)`;

          point = canvas.querySelector(`[data-index='${i}']`);
          point.style.transform = style;
          point.style.opacity = opacity;
        }
      };

      // Actualizar los puntos al inicio
      updatePoints();

      // Actualizar los puntos con el movimiento del mouse
      document.addEventListener('mousemove', updatePoints);

      // Cleanup event listener on unmount
      return () => {
        document.removeEventListener('mousemove', updatePoints);
      };
    };

    createCircles();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize]);

  return <div id="canvas" ref={canvasRef}></div>;
};

export default ParticleCircle;