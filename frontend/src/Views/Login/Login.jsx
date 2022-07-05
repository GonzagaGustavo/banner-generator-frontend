import React from "react";
import api from "../../services/api";
import "./Login.css";
import { toast } from "react-toastify";
import { useState } from "react";
import Input from "../../components/Inputs/styles";
import Cookies from "js-cookie";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate()

  function buscar(e) {
    e.preventDefault();
    api
      .post("/users/login", {
        email: email,
        senha: senha,
      })
      .then((res) => {
        if (res.data === false) {
          toast.warn("Email ou Senha Incorretos!");
        } else {
          Cookies.set("token", res.data.token);
          Cookies.set("id", res.data.id);
          navigate("/painel")
        }
      });
  }

  // SVG Olhos
  const [olhos, setOlhos] = React.useState(true);

  function toogleButton() {
    setOlhos((prevState) => !prevState);
  }

  return (
    <div className="container-login">
      <form className="form-login" onSubmit={(e) => buscar(e)}>
        <div>
          <Input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <div className="input-senha">
            <Input
              id="input-pass"
              type={olhos ? "password" : "text"}
              placeholder="Senha"
              onChange={(e) => setSenha(e.target.value)}
            ></Input>
            <div id="btnRegistro" onClick={toogleButton}>
              {olhos ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </div>
          </div>
        </div>
        <button className="button" type="submit">
          Logar
        </button>
        <span className="criar-conta">
          Ainda não possui uma conta?{" "}
          <a href="/admin/create" clas>
            Cadastrar
          </a>
        </span>
      </form>
    </div>
  );
}

export default Login;
