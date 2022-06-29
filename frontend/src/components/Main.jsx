import React from "react";
import "./Main.css";

function Main({ dados, e, aplicar, apagar, downloadImage, download }) {
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
                  {download ? (
                    <button
                      onClick={() => downloadImage(download)}
                      className="button-baixar"
                    >
                      Baixar
                    </button>
                  ) : (
                    <button
                      disabled
                      onClick={() => downloadImage(download)}
                      className="button-baixar"
                    >
                      Baixar
                    </button>
                  )}

                  <button onClick={aplicar} className="button-aplicar">
                    Aplicar
                  </button>
                  <button onClick={apagar} className="button-apagar">
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
