import React from "react";

import "./Main.css";

function Main({ dados, e, aplicar }) {
  return (
    <div className="main">
      <div className="infos">
        {e ? (
          <>
            {dados.map((i) => (
              <>
                <ul>
                  <li id="name">{i.name}</li>
                  <li>Preço: {i.price}</li>
                  <li>Parcela: {i.p_mounth}</li>
                  <li>Valor da parcela: {i.p_value}</li>
                </ul>
                <div>
                  <img src={i.img} alt="" />
                </div>
                <div className="buttons-banner">
                    <button>Baixar Banner</button>
                  <button onClick={aplicar}>Aplicar</button>
                  <button>Apagar</button>
                </div>
              </>
            ))}
          </>
        ) : (
          <>
            
          </>
        )}
      </div>
    </div>
  );
}

export default Main;
