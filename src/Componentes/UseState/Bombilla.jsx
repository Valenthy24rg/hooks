import React, { useState } from "react";

const Bombilla = () => {
  const [bombilla, setBombilla] = useState(false);

  const manipularBombilla = () => {
    if (bombilla === true){
      setBombilla(false)
    } else setBombilla(true)
  }

  return (
    <div className="bombilla">
      <h1>
        {bombilla ? <img src="img/bombillo-apagado.png" width={300}/> : <img src="img/bombillo-encendido.png" width={300}/>}
      </h1>
      <button onClick={manipularBombilla}>
        {bombilla ? 'Encender' : 'Apagar'}
      </button>
    </div>
  );
};

export default Bombilla;
