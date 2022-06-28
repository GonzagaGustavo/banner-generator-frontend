import React from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";
import Input from "../../components/Inputs/Inputs";

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
    <div className="container-login">
      <form className="form-login">
        <Input />
        <button onClick={(e) => e.target.value}>Logar</button>
      </form>
    </div>
  );
}

export default Login;
