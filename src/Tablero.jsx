import React from "react";

function Tablero({ puntajeIA, puntajeJugador}) {
  return (
    <div>
      <h2>Puntaje Jugador: {puntajeJugador} </h2>
      <h2>Puntaje IA: {puntajeIA}</h2>
    </div>
  );
}

export default Tablero;
