import React from "react";
import Button from "./Button";

function Header({ handleFileSelect, buscar, setText, text }) {
  return (
    <div className="header">
      <div className="ib">
        <input type="number" className="input" onChange={e => setText(e.target.value)} value={text} />
        <Button onclick={buscar}>Buscar</Button>
      </div>
      <input type="file" onChange={handleFileSelect} className="end" />
    </div>
  );
}

export default Header;
