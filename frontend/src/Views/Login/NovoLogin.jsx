import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
// import styles from "./NovoLogin.module.css";

// MUI
import {
  Grid,
  TextField,
  Button,
  InputLabel,
  InputAdornment,
  IconButton,
  FormControl,
  Input,
  Box,
} from "@mui/material";

import { SpaRounded, Visibility, VisibilityOff } from "@mui/icons-material";
import api from "../../services/api";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function NovoLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [valuesInput, setValuesInput] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    type: false,
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (Cookies.get("id") && Cookies.get("token")) {
      navigate("/banners");
    }
  }, []);

  function handleClickShowPassword() {
    setValuesInput({
      ...valuesInput,
      type: !valuesInput.type,
    });
  }

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
          navigate("/banners");
        }
      });
  }
  return (
    <form onSubmit={(e) => buscar(e)}>
      <Grid>
        <Grid container justifyContent="center">
          <img src="./logo.png" alt="" />
        </Grid>
        <Box>
          <TextField
            sx={{ mb: 3 }}
            margin="normal"
            variant="standard"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="emai"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <FormControl fullWidth variant="standard">
          <Box>
            <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
            <Input
              fullWidth
              id="standard-adornment-password"
              type={valuesInput.type ? "text" : "password"}
              onChange={(e) => setSenha(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {valuesInput.type ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>
        </FormControl>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        size="large"
        color="primary"
        sx={{ mt: 3, mb: 3 }}
      >
        Entrar
      </Button>
      <Grid sx={{ textAlign: "center" }}>
      <span>Ainda não possui uma conta?{" "}</span><Link to="/signup">Cadastrar</Link>
      </Grid>
    </form>
  );
}

export default NovoLogin;
