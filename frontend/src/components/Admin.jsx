import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { MdDelete } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'
import api from "../services/api";
import { toast } from "react-toastify";

function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/users").then((res) => {
      setData(res.data);
    });
  }, []);
function delet(id) {
  const c = window.confirm("Tem certeza que deseja excluir este usuário?")
  if(c) {
    api.post("/users/delete", { id: id }).then(res => {
      toast.success(res.data)
    })
  } else {

  }
}

  return (
    <>
      <header>
        <h1>ADM</h1>
        <a href="/admin/create"><button>Criar uma conta</button></a>
      </header>
      <h1 className="counts">Contas</h1>
      <div className="flex-wrap">
        {data.map((info) => (
          <div className="users-container">
          <div>
            <h2>{info.nome}</h2>
            <p>{info.email}</p>
          </div>
          <div className="btn-div">
            <a href={`/admin/edit/${info.id}`} style={{width: '10%' , height: '100%'}}><FiEdit style={{height: '100%', width: '100%'}}  /></a>
            <MdDelete style={{color: 'red',width: '10%' , height: '100%'}} onClick={() => delet(info.id)} />
          </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Admin;
