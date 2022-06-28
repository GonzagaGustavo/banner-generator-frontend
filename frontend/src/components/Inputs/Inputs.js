import React from "react";
import Input from "./styles";
import { useState } from "react";

function Inputs() {
  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");

  return (
    <div>
      <Input
        type="email"
        placeholder="E-mail"
        onChange={(e) => setEmail(e.target.value)}
      ></Input>
      <Input
        type="password"
        placeholder="Senha"
        onChange={(e) => setSenha(e.target.value)}
      ></Input>
    </div>
  );
}

export default Inputs;
