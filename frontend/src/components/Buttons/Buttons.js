import React from "react";
import Button from "./styles";

function Buttons({ onclick }) {
  return (
    <div>
      <Button onClick={onclick}>Cadastrar</Button>
    </div>
  );
}

export default Buttons;
