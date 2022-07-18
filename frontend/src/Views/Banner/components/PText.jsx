import { Box, Grid, MenuItem, Select, TextField } from "@mui/material";
import React from "react";

function PText({ dados, setDados, setSelectedFile, selectedFile, setPersonalization, personalization }) {
  console.log(personalization)
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
        <Select defaultValue={personalization.size1} onChange={e => setPersonalization({
          color: personalization.color,
          font: personalization.font,
          size1: e.target.value,
          size2: personalization.size2,
          size3: personalization.size3
        })}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
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
        <Select defaultValue={personalization.size2} onChange={e => setPersonalization({
          color: personalization.color,
          font: personalization.font,
          size1: personalization.size1,
          size2: e.target.value,
          size3: personalization.size3
        })}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
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
        <Select defaultValue={personalization.size3} onChange={e => setPersonalization({
          color: personalization.color,
          font: personalization.font,
          size1: personalization.size1,
          size2: personalization.size2,
          size3: e.target.value
        })}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
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
