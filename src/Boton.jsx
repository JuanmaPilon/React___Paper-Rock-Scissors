import React, {useState} from "react";

function Boton({sumarUnPuntitoDePrueba, reiniciarPuntaje}) {
    
  return (
    <div>
      <button onClick={reiniciarPuntaje}>Jugar de nuevo!</button>
      <button onClick={sumarUnPuntitoDePrueba}>+1!</button>
    </div>
  );


}

export default Boton;
