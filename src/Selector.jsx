import React from "react";

function Selector({ elegirBoton }) {

  return (
    <div>
      <button onClick={() => elegirBoton("ROCK")}>ROCK</button>
      <button onClick={() => elegirBoton("PAPER")}>PAPER</button>
      <button onClick={() => elegirBoton("SCISSORS")}>SCISSORS</button>
    </div>
  );
}

export default Selector;
