import React, { useEffect, useRef, useState } from 'react';
import './particleCircle.css';
import img from '../../assets/img/espiralfinal.png';

const ParticleCircle = () => {
  const canvasRef = useRef(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const isMobile = windowSize < 768;
  
    if (!isMobile) {
      const cant = 300;
      const offset = 2 / cant;
      const increment = Math.PI * (3 - Math.sqrt(5));
      const canvas = canvasRef.current;
  
      const createCircles = () => {
        while (canvas.firstChild) {
          canvas.removeChild(canvas.firstChild);
        }
  
        const radius = windowSize < 1400 ? 150 : 200;
  
        for (let i = 0; i < cant; i++) {
          const circle = document.createElement("div");
          circle.className = "point";
          circle.setAttribute("data-index", i);
          canvas.appendChild(circle);
        }
  
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
            if (point) {
              point.style.transform = style;
              point.style.opacity = opacity;
            }
          }
        };
  
        document.addEventListener('mousemove', updatePoints);
  
        // Cleanup function
        return () => {
          document.removeEventListener('mousemove', updatePoints);
        };
      };
  
      createCircles();
    }
  }, [windowSize]);
  const isMobile = windowSize < 768; // Umbral para detectar dispositivos móviles

  return (
    <div id="canvas" ref={canvasRef}>
      {isMobile ? (
        <img src={img} alt="Imagen alternativa para dispositivos móviles" />
      ) : null}
    </div>
  );
};

export default ParticleCircle;