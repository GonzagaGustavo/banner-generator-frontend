import { Box, Card, IconButton, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./style.css";
import MUIDataTable from "mui-datatables";
import api from "../../services/api";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { MdDelete, MdEdit } from "react-icons/md";

function Template() {
  const [data, setData] = useState([]);
  const [permition, setPermition] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      api.post("/users/", { token: token }).then((res) => {
        if (res.data === false) {
          setPermition(false);
        } else {
          setPermition(true);
          setData(res.data);
        }
      });
    } else {
      setPermition(false);
    }
  }, []);
function edit(dataIndex, rowIndex) {
  const id = data[dataIndex].id
  window.location.href = `/admin/edit/${id}`
}

  const collouns = [
    {
      name: "nome",
      label: "Nome",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "email",
      label: "Email",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "role",
      label: "Nivel da conta",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "can_create",
      label: "Pode criar",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "Editar",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <IconButton
          className="iconButton"
          onClick={() => edit(dataIndex, rowIndex)}
        >
          <MdEdit />
        </IconButton>
          );
        }
      }
    },
  ];
  const options = {
    filterType: "checkbox",
    onRowsDelete: (rowsDeleted, dataRows) => {
      const ids = rowsDeleted.data.map(d => data[d.dataIndex].id)
      api.post("/users/delete", {ids: ids}).then(res => {
        toast.success(res.data)
      })
    }
  };

  return (
    <>
      {permition ? (
        <div id="users-content">
          <Box pt={3} pb={3}>
            <Box mb={3}>
              <Card>
                <Box p={3} lineHeight={1}>
                  <Typography variant="h5" fontWeight="medium">
                    Adiministrador
                  </Typography>
                  <Typography variant="button" color="text">
                    Uma lista com todos os usuários.
                  </Typography>
                </Box>
                <MUIDataTable
                  title={"Usuários"}
                  data={data}
                  columns={collouns}
                  options={options}
                />
              </Card>
            </Box>
          </Box>
        </div>
      ) : (
        <div>Você não tem permição para acessar esta pagina!</div>
      )}
    </>
  );
}

export default Template;
