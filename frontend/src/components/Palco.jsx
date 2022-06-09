import React from "react";
import "./Palco.css";

function Palco() {
  return (
    <React.Fragment>
      <div className="container-slide">
        <div className="buttons-slide">
          <button type="submit">Aplicar</button>
          <button type="submit">Limpar</button>
        </div>
        <div className="slide">
          <p>slide</p>
        </div>
        <button className="baixar--banner">Baixar banner</button>
      </div>
    </React.Fragment>
  );
}

export default Palco;
