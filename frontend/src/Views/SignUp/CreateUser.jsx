import React from "react";
import "./CreateUser.css";
import Buttons from "../../components/Buttons/Buttons";
import Input from "../../components/Inputs/styles";
import { useState } from "react";

function CreateUser() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div className="container">
      <div className="contentText">
        <h1>Crie banners em alguns cliques!</h1>
      </div>
      <form>
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
        <Buttons />
      </form>
    </div>
  );
}

export default CreateUser;
