import React, { useEffect, useRef } from 'react';
import './particleCircle.css';


const ParticleCircle = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cant = 300;
    const offset = 2 / cant;
    const increment = Math.PI * (3 - Math.sqrt(5));
    const canvas = canvasRef.current;
  
    let i;
    let circle;
    const radius = 200;  // Aumentar el radio del círculo
  
    // Crear los elementos
    for (i = 0; i < cant; i++) {
      circle = document.createElement("div");
      circle.className = "point";
      circle.setAttribute("data-index", i);
      canvas.appendChild(circle);
    }
  
    // Aplicar transformaciones a los puntos
    const updatePoints = (evt) => {
      let x, y, z, r, a, scale, opacity, point, style;
      const angle = evt ? (-evt.pageX / 4) * Math.PI / 180 : 0;
  
      for (i = 0; i < cant; i++) {
        y = (i * offset - 1) + (offset / 2);
        r = Math.sqrt(1 - Math.pow(y, 2));
        a = ((i + 1) % cant) * increment + angle;
        x = Math.cos(a) * r;
        z = Math.sin(a) * r;
  
        scale = Math.round(z * 20000) / 100;
        opacity = (1 + z) / 1.5;
  
        style = `translate3d(${250 + x * radius}px, ${250 + y * radius}px, ${scale}px)`;
  
        point = canvas.querySelectorAll(`[data-index='${i}']`);
        point[0].style.transform = style;
        point[0].style.opacity = opacity;
      }
    };
  
    // Actualizar los puntos al inicio
    updatePoints();
  
    // Actualizar los puntos con el movimiento del mouse
    document.addEventListener('mousemove', updatePoints);
  
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updatePoints);
      canvas.innerHTML = ''; // Limpia el canvas al desmontar el componente
    };
  }, []);

  return <div id="canvas" ref={canvasRef}></div>;
};

export default ParticleCircle;