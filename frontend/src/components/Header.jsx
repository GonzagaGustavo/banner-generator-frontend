import React from "react";
import Button from "./Button";
import "./Header.css";

function Header({ setSelectedFile, buscar, setText, text }) {
  return (
    <div className="header">
      <div className="ib">
        <input
          type="number"
          className="inputSku"
          placeholder="Digite o SKU"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <Button onclick={buscar}>Buscar</Button>
      </div>
      <div className="files" style={{ marginTop: "5%" }}>
        <label
          className="carregarImg"
          htmlFor="file"
          style={{ marginTop: "0px", textAlign: "center" }}
        >
          Carregar Imagem
        </label>
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files)}
          className="input-file"
          name="file"
          id="file"
        />
      </div>
    </div>
  );
}

export default Header;
