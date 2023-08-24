import React, {useState} from "react";
import Tablero from "./Tablero";

function Boton({sumarUnPuntitoDePrueba, CambiarPuntajeJugador}) {
  return (
    <div>
      <button onClick={CambiarPuntajeJugador}>Jugar de nuevo!</button>
      <button onClick={sumarUnPuntitoDePrueba}>+1!</button>
    </div>
  );


}

export default Boton;
