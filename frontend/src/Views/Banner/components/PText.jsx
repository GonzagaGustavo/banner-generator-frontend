import { Box, Grid, TextField } from "@mui/material";
import React from "react";

function PText({ dados, setDados, setSelectedFile, selectedFile }) {
  console.log(dados)
  return (
    <Box>
      <Grid container justifyContent="center">
        <TextField
          variant="outlined"
          label="Nome do produto"
          defaultValue={dados.name}
          onChange={(e) =>
            setDados(
              {
                name: e.target.value,
                price: dados.price,
                adiconalText: dados.adiconalText,
                img: dados.img
              },
            )
          }
        />
        <TextField
          variant="outlined"
          label="Preço do produto"
          defaultValue={dados.price}
          onChange={(e) =>
            setDados(
              {
                name: dados.name,
                price: e.target.value,
                adiconalText: dados.adiconalText,
                img: dados.img
              },
            )
          }
        />
        <TextField
          variant="outlined"
          label="Texto adicional"
          defaultValue={dados.adiconalText}
          onChange={(e) =>
            setDados(
              {
                name: dados.name,
                price: dados.price,
                adiconalText: e.target.value,
                img: dados.img
              },
            )
          }
        />
      </Grid>
      <img src={dados.img} alt="" />
      <div className="files" style={{ marginTop: "5%" }}>
        <label
          className="carregarImg"
          htmlFor="file"
          style={{ marginTop: "0px", textAlign: "center" }}
        >
          Carregar Imagem
        </label>
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files)}
          className="input-file"
          name="file"
          id="file"
        />
      </div>
      {selectedFile ? <Box>
        <img src={URL.createObjectURL(selectedFile[0])} alt="" />
      </Box> : <></>}
    </Box>
  );
}

export default PText;
