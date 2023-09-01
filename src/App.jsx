import { React, useState } from "react";
import Boton from "./Boton";
import Tablero from "./Tablero";
import Selector from "./Selector";

function App() {
  
  const [puntajeIA, setPuntajeIA] = useState(0);
  const [puntajeJugador, setPuntajeJugador] = useState(0);
  const [empate, setEmpate] = useState(false);

  const actualizarPuntajes = (resultado) => {
    if (puntajeIA <= 9 && puntajeJugador <= 9) {
      if (resultado === "Jugador") {
        setPuntajeJugador(puntajeJugador + 1);
      } else if (resultado === 'IA') {
        setPuntajeIA(puntajeIA + 1);
      } else if (resultado === "Empate"){
        console.log("Funciona por favor");
       setEmpate(true);
      }
    }
  };

  const determinarGanador = (seleccionDeJugador) => {
    const opciones = ["ROCK", "PAPER", "SCISSORS"];
    const seleccionDeIA = opciones[Math.floor(Math.random() * opciones.length)];
    if (seleccionDeJugador === seleccionDeIA) {
      console.log("funcxionaasaa");
      return "Empate";
    } else if (
      (seleccionDeJugador === "ROCK" && seleccionDeIA === "SCISSORS") ||
      (seleccionDeJugador === "SCISSORS" && seleccionDeIA === "PAPER") ||
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
    if (puntajeIA >= 9) {
      alert("La IA Gano!");
    } else if (puntajeJugador >= 9 ) {
      alert("Tu Ganaste!");
    }
  };
  
  const reiniciarPuntaje = () => {
    setPuntajeJugador(0);
    setPuntajeIA(0);
  }

  const sumarUnPuntitoDePrueba = () => {
    if (puntajeJugador < 10 && puntajeIA < 10) {
      setPuntajeIA(puntajeIA + 1);
      setPuntajeJugador(puntajeJugador + 1);
    }
  }

  return (
    <>
      <h1>ROCK PAPER OR SCISSORS</h1>
      <Tablero puntajeJugador={puntajeJugador} puntajeIA={puntajeIA} />
      {empate && <h1>Hubo empate!</h1>}
      {empate && console.log("Alo")}
      <Selector elegirBoton={determinarGanador} continuarJuego={seguirPartida} />
      <Boton sumarUnPuntitoDePrueba={sumarUnPuntitoDePrueba} reiniciarPuntaje={reiniciarPuntaje} />
    </>
  );
}

export default App;
