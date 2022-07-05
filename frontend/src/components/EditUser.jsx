import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import NewUser from "../Views/users/new-users";

function EditUser() {
  const [permition, setPermition] = useState(false);
  const params = useParams();
  useEffect(() => {
    const token = Cookies.get("token");
    api.post("/users/checkRole", { token: token }).then((res) => {
      if(res.data === 3) {
        
        api.post("/users/editVerify", {token: token}).then(res => {
          const infos = res.data
          infos.forEach(function loop(info) {
            if(info.user_id == params.id) {
              setPermition(3)
              loop.stop = true
            }
          })
          // for (let i = 0; i < info.length; i++) {
          //   if(params.id == info.user_id) {
          //     setPermition(3)
          //     break;
          //   } else {
          //     setPermition(false)
          //     console.log("oi")
          //   }
          // }
        })
      } else if(res.data === 4) {
        setPermition(res.data)
      }
    });
  }, []);
console.log(permition)
  return (
    <>
      {permition ? (
        <div>
          <NewUser id={params.id} roleDB={permition} />
        </div>
      ) : (
        <div>Você não tem permição para acessar esta pagina!</div>
      )}
    </>
  );
}

export default EditUser;
