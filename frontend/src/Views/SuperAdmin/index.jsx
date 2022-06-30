import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./style.css";

function SuperAdmin() {
  const [data, setData] = useState([]);
  const [permition, setPermition] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      api.post("/users/", { token: token }).then((res) => {
        if(res.data === false) {
            setPermition(false)
        } else {
            setPermition(true)
            setData(res.data)
        }
      });
    } else {
      setPermition(false);
    }
  }, []);

  return (
    <>
      {permition ? (
        <>
          <h1 id="adm-title">Adiministrador</h1>
          <div className="users-center">
            <div id="users-content">
              <div id="text-margin">
                <h2>Usuários</h2>
                <p style={{ color: "#999" }}>Uma lista com todos os usuários</p>
              </div>
              <div id="infos-user">
                <div>Name</div>
                <div>Email</div>
                <div>Cargo</div>
              </div>
              <hr id="hr" />
              <div id="users">
                {data.map((user) => (
                    <p>{user.nome}</p>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>Você não tem permição para acessar esta pagina!</div>
      )}
    </>
  );
}

export default SuperAdmin;
