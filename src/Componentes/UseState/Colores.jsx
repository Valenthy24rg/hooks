import React, {useState} from "react";

const Colores = () => {
  const [color, setColor] = useState('blue')

  const cambiarColor = () => {
    if(color === 'blue'){
      setColor('red')
    } else setColor('blue')
  }

  return (
    <div>
       <h1 style={{color: color}}>Hola</h1>
       <button onClick={cambiarColor}>cambiar</button>
    </div>
   
  )
}

export default Colores;