import React, { useState } from "react";

function Tablero ({ puntajeJugadorProp, puntajeIAProp }) {
   const [puntajeIA,setPuntajeIA] = useState(0);
   const [puntajeJugador,setPuntajeJugador] = useState(0);

  const CambiarPuntajeIA = () => {
    setPuntajeIA(puntajeIA + 1);
  };

  const CambiarPuntajeJugador = () => {
    setPuntajeJugador(puntajeJugador + 1)
  }


  return (
  <div>
    <h2>Puntaje Jugador: {puntajeJugador} </h2>
    <h2>Puntaje IA: {puntajeIA}</h2>
  </div>
  );
}

export default Tablero;