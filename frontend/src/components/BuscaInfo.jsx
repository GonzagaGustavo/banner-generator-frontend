import React, { useState } from "react";
import api from "../services/api";

function BuscaInfo() {
  const [text, setText] = useState("");
  const [dados, setDados] = useState([])
  function buscar() {
    api.post("/", { id: text }).then((res) => {
      console.log(res.data)
      setDados(res.data)
    });
  }

  return (
    <div>
      <input
        type="number"
        placeholder="Digite o SKU"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={buscar}>Buscar</button>
    </div>
  );
}

export default BuscaInfo;
