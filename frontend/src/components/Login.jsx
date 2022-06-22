import React from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";

function Login() {
  const [userNameReg, setUserNameReg] = React.useState("");
  const [passReg, setPassReg] = React.useState("");
  let navigate = useNavigate();
  function buscar() {
    api
      .post("/login", {
        email: userNameReg,
        senha: passReg,
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
    <div className="form">
      <div style={{ padding: "20px" }}>
        <h1>Faça seu Login</h1>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          required
          onChange={(e) => setUserNameReg(e.target.value)}
        />
        <label htmlFor="">Senha</label>
        <input
          type="password"
          id="senha"
          onChange={(e) => setPassReg(e.target.value)}
        />
        <button type="submit" onClick={() => buscar()}>
          Entrar
        </button>
      </div>
    </div>
  );
}

export default Login;
