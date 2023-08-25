import React, {useState} from "react";
import Tablero from "./Tablero";

function Boton({sumarUnPuntitoDePrueba, reiniciarPuntaje}) {



  const determinarGanador = (seleccionDeJugador) => {
    const opciones = ["ROCK, PAPER, SCISSORS"];
    const seleccionDeIA = opciones.Math.floor(Math.random * opciones.length);
    if (seleccionDeJugador === seleccionDeIA) {
      return 'Empate'
    } else if (
      (seleccionDeJugador === "ROCK" && seleccionDeIA === "SCISSORS") ||
      (seleccionDeJugador === "SCISSORS" && seleccionDeIA == "PAPER") ||
      (seleccionDeJugador === "PAPER" && seleccionDeIA === "ROCK")
    ) {
      return "Jugador"
    } else {
      return "IA";
    }
    }
    
  return (
    <div>
      <button onClick={reiniciarPuntaje}>Jugar de nuevo!</button>
      <button onClick={sumarUnPuntitoDePrueba}>+1!</button>
    </div>
  );


}

export default Boton;
