import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Main.css";

function Main({
  dados,
  e,
  aplicar,
  apagar,
  downloadImage,
  download,
  can_create,
  setCan_create,
  personalization,
  setPersonalization
}) {
const [fonts, setFonts] = useState([])

  useEffect(() => {
    axios.get("https://www.googleapis.com/webfonts/v1/webfonts?sort=POPULARITY&key=AIzaSyD4iU66DIkViOOkDZUejDVfS-Du6sM4fxc").then(res => {
      const font = []
      for (let i = 0; i < 50; i++) {
        font.push(res.data.items[i].family)
      }
      setFonts(font)
    })
  }, []);
  useEffect(() => {
    if (can_create === 0) {
      setCan_create("0");
    }
  }, [can_create, setCan_create]);


  return (
    <div className="main">
      <input type="color" onChange={e => setPersonalization({ color: e.target.value, font: personalization.font})} />
      <Autocomplete
        disablePortal
        options={fonts}
        renderInput={(params) => <TextField {...params} label="Fonte" />}
        onChange={e => console.log(e)}
      />
    </div>
  );
}

export default Main;
