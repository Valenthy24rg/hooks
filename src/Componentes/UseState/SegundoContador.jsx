import React, { useState } from "react";

const SegundoContador = () => {

  const [numeroIterador, setNumeroIterador] = useState(1)
  const [numeroContador, setNumeroContador] = useState(0)

  const aumentar = () => {
    setNumeroIterador(numeroIterador + 1)
  }

  const disminuir = () => {
    setNumeroIterador(numeroIterador - 1)
  }

  const sumar = () => {
    setNumeroContador(numeroContador + numeroIterador)
  }

  const restar = () => {
    setNumeroContador(numeroContador - numeroIterador)
  }



  return (
    <div className="contenido">
      <div className="iterar">
        <button onClick={disminuir}>-</button>
        <h1>{numeroIterador}</h1>
        <button onClick={aumentar}>+</button>
      </div>

      <div className="contar">
        <button onClick={restar}>-</button>
        <h1>{numeroContador}</h1>
        <button onClick={sumar}>+</button>
      </div>
    </div>
  );
};

export default SegundoContador;
