import React, { useState } from "react";
import api from "../services/api";
import "./BuscaInfo.css";
import NewBanner from "./NewBanner";

function BuscaInfo() {
  const [text, setText] = useState("");
  const [dados, setDados] = useState([]);
  const [e, setE] = useState(false);
  function buscar() {
    api.post("/", { id: text }).then((res) => {
      console.log(res.data);
      setDados(res.data);
      setE(true);
    });
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="logo">
            <input
              type="number"
              placeholder="Digite o SKU"
              value={text}
              className="input--busca"
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={buscar}>Buscar</button>
          </div>
          <NewBanner />
        </div>

        <div className="main">
          {e ? (
            <div className="text--content">
              {dados.map((i) => (
                <div key={i}>
                  <h1>Produto: {i.name}</h1>
                  <h2>Preço: {i.price}</h2>
                  <p>Parcelas: {i.p_value}</p>
                  <p>Quantidade de Parcelas: {i.p_mounth}</p>
                  <div className="image-content">
                    <img src={i.img} alt="" />
                  </div>
                  <div className="buttons-slide">
                    <button type="submit">Aplicar</button>
                    <button type="submit">Limpar</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>Faça sua busca</div>
          )}
        </div>
      </div>
    </>
  );
}
export default BuscaInfo;
