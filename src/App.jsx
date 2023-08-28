import { React, useState } from "react";
import Boton from "./Boton";
import Tablero from "./Tablero";
import Selector from "./Selector";

function App() {
  
  const [puntajeIA, setPuntajeIA] = useState(0);
  const [puntajeJugador, setPuntajeJugador] = useState(0);

  const actualizarPuntajes = (resultado) => {
    if (resultado === "Jugador") {
      setPuntajeJugador(puntajeJugador + 1);
    } else if (resultado === 'IA') {
      setPuntajeIA(puntajeIA + 1);
    }
  };

  const determinarGanador = (seleccionDeJugador) => {
    const opciones = ["ROCK", "PAPER", "SCISSORS"];
    const seleccionDeIA = opciones[Math.floor(Math.random() * opciones.length)];
    if (seleccionDeJugador === seleccionDeIA) {
      return "Empate";
    } else if (
      (seleccionDeJugador === "ROCK" && seleccionDeIA === "SCISSORS") ||
      (seleccionDeJugador === "SCISSORS" && seleccionDeIA == "PAPER") ||
      (seleccionDeJugador === "PAPER" && seleccionDeIA === "ROCK")
    ) {
      actualizarPuntajes("Jugador");
      return "Jugador";
    } else {
      actualizarPuntajes("IA");
      return "IA";
    }
  };

  const seguirPartida = () => {
    while (puntajeJugador <= 10 && puntajeIA <= 10) {
     const resultado = determinarGanador();
      if (resultado === "IA" & puntajeIA === 10) {
        alert("La IA Gano!");
      } else if (resultado === "Jugador" && puntajeJugador === 10) {
        alert("Ganaste!");
        break;
      }
    }
  }

  const reiniciarPuntaje = () => {
    setPuntajeJugador(0);
    setPuntajeIA(0);
  }

  const sumarUnPuntitoDePrueba = () => {
    setPuntajeIA(puntajeIA + 1);
    setPuntajeJugador(puntajeJugador + 1);
  }

  return (
    <>
      <h1>ROCK PAPER OR SCIRSSORS</h1>
      <Tablero puntajeJugador={puntajeJugador} puntajeIA={puntajeIA} />
      <Selector elegirBoton={determinarGanador} seguirPartida={seguirPartida}/>
      <Boton sumarUnPuntitoDePrueba={sumarUnPuntitoDePrueba} reiniciarPuntaje={reiniciarPuntaje}/>
    </>
  );
}
export default App;
