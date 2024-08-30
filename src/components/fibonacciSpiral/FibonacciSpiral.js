import React, { useEffect, useRef } from "react";

const FibonacciSpiral = () => {
  const positions = calculateFibonacciPositions(8);

  return (
    <div style={{ position: "relative", width: "500px", height: "500px" }}>
      {positions.map((position, index) => (
        <Element key={index} position={position}>
          <h3 style={{ color: "white" }}>hola</h3>
        </Element>
      ))}
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
  let x = 250, y = 250; // Centro del canvas
  let a = 0, b = 1;
  let angle = 0;
  let scaleFactor = 25; // Aumentar el factor de escala para separar más los elementos

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

export default FibonacciSpiral;