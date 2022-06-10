import React from "react";
import Button from "./Button";
import "./Header.css";

function Header({ handleFileSelect, buscar, setText, text }) {
  return (
    <div className="header">
      <div className="ib">
        <input
          type="number"
          className="input"
          placeholder="Digite o SKU"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <Button onclick={buscar}>Buscar</Button>
      </div>
      <div className="files">
        <label for="file">Enviar arquivo</label>
        <input type="file" onChange={handleFileSelect} className="input-file" name="file" id="file" />
      </div>
    </div>
  );
}

export default Header;
