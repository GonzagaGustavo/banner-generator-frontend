import React from "react";
import Button from "./Button";
import "./Header.css";

function Header({ setSelectedFile, buscar, setText, text }) {
  return (
    <div className="header">
      <div className="ib">
        <input
          type="number"
          className="inputInfo"
          placeholder="Digite o SKU"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <Button onclick={buscar}>Buscar</Button>
      </div>
      <div className="files">
        <label className="carregarImg" for="file">
          Carregar Imagem
        </label>
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          className="input-file"
          name="file"
          id="file"
        />
      </div>
    </div>
  );
}

export default Header;
