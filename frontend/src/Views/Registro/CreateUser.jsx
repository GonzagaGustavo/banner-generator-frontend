import React from "react";
import "./CreateUser.css";
import Buttons from "../../components/Buttons/Buttons";
import Input from "../../components/Inputs/styles";
import { useState } from "react";
import api from "../../services/api";

function CreateUser() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

function create(e) {
  e.preventDefault()
  api.post("/users/create", {nome: nome, email: email, senha: senha}).then(res => {
    alert(res.data)
    window.location.href = "/"
  })
}

  return (
    <div className="container">
      <div className="contentText">
        <h1>Crie banners em alguns cliques!</h1>
      </div>
      <form onSubmit={e => create(e)}>
        <div>
        <Input
            type="text"
            placeholder="Nome"
            onChange={(e) => setNome(e.target.value)}
          ></Input>
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
