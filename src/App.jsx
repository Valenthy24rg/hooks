import React, { useState } from "react";
import Contador from "./Componentes/UseState/Contador";
import Bombilla from "./Componentes/UseState/Bombilla";
import Colores from "./Componentes/UseState/Colores";
import Cajas from "./Componentes/UseState/Cajas";
import "./App.css";
import SegundoContador from "./Componentes/UseState/SegundoContador";
import TercerContador from "./Componentes/UseState/TercerContador";

const App = () => {
  // const [numero, setNumero] = useState(2)
  
  // const sumar = () => {
  //   setNumero(numero + 2)
  // };

  // const restar = () => {
  //   setNumero(numero - 2)
  // }


  // const [bombilla, setBombiila] = useState(false);

  // const manejarBombilla = () => {
  //   if (bombilla) setBombiila(false)
  //   else setBombiila(true)
  // }

  // return (
  //   <div>
  //     <h2>{bombilla ? "ESTOY ENCENDIDA" : "ESTOY APAGADA"}</h2>
  //     <button onClick={manejarBombilla}>{bombilla ? "APAGAR" : "ENCENDER"}</button>
  //   </div>
  // );

  return (
    <div className="container">
      {/* <Contador/> */}
      {/* <Bombilla/> */}
      {/* <Colores/> */}
      {/* <Cajas/> */}
      {/* <SegundoContador/> */}
      <TercerContador/>


      {/* <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button> */}
    </div>
  );
};

export default App;
