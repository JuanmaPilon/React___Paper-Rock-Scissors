import React from "react";

function Selector({ elegirBoton, continuarJuego }) {
  const handleSeleccion = (opcion) => {
    const resultado = elegirBoton(opcion);
    if (resultado === "IA" || resultado === "Jugador" || resultado === "Empate") {
      continuarJuego();
    }
  }


  return (
    <div>
      <button className="boton-piedra" onClick={() => handleSeleccion("ROCK")}>
         ROCK
         </button>
      <button onClick={() => handleSeleccion("PAPER")}>PAPER</button>
      <button onClick={() => handleSeleccion("SCISSORS")}>SCISSORS</button>
    </div>
  );
}

export default Selector;
