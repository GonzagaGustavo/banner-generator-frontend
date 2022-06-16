import React from "react";
import "./Main.css";

function Main({ dados, e, aplicar, apagar }) {
  return (
    <div className="main">
      <div className="infos">
        {e ? (
          <>
            {dados.map((i) => (
              <>
                <ul>
                  <li id="name">{i.name}</li>
                  <li>
                    <span>Preço:</span> {i.price}
                  </li>
                  <li>
                    <span>Parcela:</span> {i.p_mounth}
                  </li>
                  <li>
                    <span>Valor da parcela:</span> {i.p_value}
                  </li>
                </ul>
                <div className="imgProduto">
                  <img src={i.img} alt="" />
                </div>
                <div className="buttons-banner">
                  <button onClick={aplicar} style={{ background: "#4c8b64" }}>
                    Aplicar
                  </button>
                  <button onClick={apagar} style={{ background: "#d41c1d" }}>
                    Apagar
                  </button>
                </div>
              </>
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Main;
