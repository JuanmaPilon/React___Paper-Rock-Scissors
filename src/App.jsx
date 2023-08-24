import { React, useState } from "react";
import Boton from "./Boton";
import Tablero from "./Tablero";
import Selector from "./Selector";

function App() {
  
  const [puntajeIA, setPuntajeIA] = useState(0);
  const [puntajeJugador, setPuntajeJugador] = useState(0);

  const CambiarPuntajeJugador = () => {
    setPuntajeJugador(0);
    setPuntajeIA(0);
  };

  const sumarUnPuntitoDePrueba = () => {
    setPuntajeIA(puntajeIA + 1);
    setPuntajeJugador(puntajeJugador + 1);
  }

  return (
    <>
      <h1>ROCK PAPER OR SCIRSSORS</h1>
      <Boton sumarUnPuntitoDePrueba={sumarUnPuntitoDePrueba} CambiarPuntajeJugador={CambiarPuntajeJugador}/>
      <Tablero puntajeJugador={puntajeJugador} puntajeIA={puntajeIA} />
      <Selector />
    </>
  );
}

export default App;
