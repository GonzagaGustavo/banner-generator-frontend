import React from "react";
import "./styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Search = () => {
  return (
    <Box m={2} ml="auto" mt={3}>
      <TextField
        sx={{ background: "#f0f2f5" }}
        label="Pesquisar"
        variant="standard"
      />
    </Box>
  );
};

export default Search;
