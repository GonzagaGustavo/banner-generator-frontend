import React from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";
import { useState } from "react";
import Input from "../../components/Inputs/styles";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  let navigate = useNavigate();
  function buscar() {
    api
      .post("/login", {
        email: email,
        senha: senha,
      })
      .then((res) => {
        if (res.data === true) {
          navigate("/painel");
        } else {
          toast.warning("E-mail/Senha incorreta");
        }
      });
  }

  return (
    <div className="container-login">
      <form className="form-login">
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
        <button onClick={buscar}>Logar</button>
      </form>
    </div>
  );
}

export default Login;
