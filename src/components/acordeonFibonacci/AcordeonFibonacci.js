import React, { useState } from "react";
import "./acordeonFibonacci.css"

const AcordeonFibonacci = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const data =[
    {
        titulo: 'Análisis Inicial',
        contenido: "Evaluamos tu negocio y tu mercado para identificar oportunidades y áreas de mejora.",
        px:'10'
        
    },{
        titulo: 'Estudio de Mercado',
        contenido: "Realizamos un estudio detallado para entender tendencias, audiencia y competencia.",
        px:'8'
        
    },{
        titulo: 'Definición de Objetivos',
        contenido: "Establecemos metas claras y alcanzables en colaboración contigo.",
        px:'6'
        
    },{
        titulo: 'Desarrollo de Estrategia',
        contenido: "Creamos una estrategia de marketing digital personalizada basada en nuestros hallazgos.",
        px:'5'
        
    },{
        titulo: 'Ejecución y Monitoreo',
        contenido: "Implementamos la estrategia y supervisamos el desempeño continuamente.",
        px:'4'
        
    },{
        titulo: 'Optimización Continua',
        contenido: "Ajustamos y optimizamos las tácticas según los resultados y datos obtenidos.",
        px:'3'
        
    },{
        titulo: 'Informe y Revisión',
        contenido: "Proporcionamos informes detallados y revisamos los resultados para planificar futuros pasos.",
        px:'2'
        
    }
    ,{
        titulo: 'Estrategia a Largo Plazo',
        contenido: "Desarrollamos una estrategia sostenible para asegurar el crecimiento continuo.",
        px:'1'
        
    }
]

  const positions = calculateFibonacciPositions(data.length);

  return (
    <div style={{ position: "relative", width: "500px", height: "500px" }}>
      <div className="acordeonFibonacci">
        {data.map((item, i) => (
          <Element key={i} position={positions[i]} toggle={() => toggle(i)} selected={selected === i}>
            <div className="titulo__item__acordeonFibonacci" style={{fontSize:`${item.px*2.5}px`}}>
              
              <h3>{item.titulo}</h3>
            
            </div>
            
              
              <div className="contenido__acordeonFibonacci">
                <p>{item.contenido}</p>
              </div>
           
          </Element>
        ))}
      </div>
    </div>
  );
};

const Element = ({ position, children }) => {
  const style = {
    position: "absolute",
    left: `${position.x}px`,
    top: `${position.y}px`,
    zIndex: 1,
  };

  return <div style={style}>{children}</div>;
};

function calculateFibonacciPositions(n) {
  let positions = [];
  let x = 250,
    y = 250; // Centro del canvas
  let a = 0,
    b = 1;
  let angle = 0;
  let scaleFactor = 30; // Aumentar el factor de escala para separar más los elementos

  for (let i = 0; i < n; i++) {
    const radius = scaleFactor * b;
    x += radius * Math.cos(angle);
    y += radius * Math.sin(angle);
    angle += Math.PI / 2;

    positions.push({ x, y });

    let temp = a;
    a = b;
    b = temp + b;
  }

  return positions.reverse(); // Para que el primer elemento esté afuera
}

export default AcordeonFibonacci;