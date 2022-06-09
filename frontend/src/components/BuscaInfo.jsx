import React, { useState } from "react";
import api from "../services/api";
import "./BuscaInfo.css";
import NewBanner from "./NewBanner";

function BuscaInfo() {
  const [text, setText] = useState("");
  const [dados, setDados] = useState([]);
  function buscar() {
    api.post("/", { id: text }).then((res) => {
      console.log(res.data);
      setDados([res.data]);
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
          <div className="text--content">
            <h2>{dados.map((i) => `Preço: ${i.price}`)}</h2>
            <h3>{dados.map((i) => `Parcelas: ${i.installment.months}`)}</h3>
            <h3>
              {dados.map((i) => `Valor das Parcelas: ${i.installment.amount}`)}
            </h3>
          </div>
          <div className="image-content">
            <img src={dados.map((i) => i.image_link)} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default BuscaInfo;
