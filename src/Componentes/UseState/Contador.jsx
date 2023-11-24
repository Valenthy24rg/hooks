import React, { useState } from "react";

const Contador = () => {

  const [numeros, setNumero] = useState(10)
  const suma = () => {
    setNumero (numeros + 10)
  }

  const resta = () => {
    setNumero (numeros - 10)
  }

  const multiplicar = () => {
    setNumero (numeros * 10)
  }

  return (
    <div className="contenido">
      <h1>Contador</h1>
      <p>{numeros}</p>

      <button onClick={suma}>Sumar</button>
      <button onClick={resta}>Restar</button>
      <button onClick={multiplicar}>Multiplicar</button>
    </div>
  )
}

export default Contador;