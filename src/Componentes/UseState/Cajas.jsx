import React, { useState } from "react";

const Cajas = () => {
  const [colorCaja, setColorCaja] = useState('white');

  return (
    <div className="cajas">
      <div className="caja1" style={{ backgroundColor: colorCaja }} />
      <button onClick={() => setColorCaja('blue')}>Cambiar a Azul</button>
      <button onClick={() => setColorCaja('grey')}>Cambiar a Gris</button>
      <button onClick={() => setColorCaja('black')}>Cambiar a Negro</button>
      <button onClick={() => setColorCaja('white')}>Resetear</button>
      
    </div>
  );
};

export default Cajas;
