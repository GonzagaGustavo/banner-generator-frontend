import React from "react";
import "./Header.css";
import { FiDownloadCloud } from "react-icons/fi";
import { Button, TextField } from "@mui/material";

function Header({ setSelectedFile, buscar, setText, text, setSelectedXML, sendXML, linkXML, selectedXML, setLinkXML }) {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20%', margin: '3%'}}>
        {selectedXML ? (
          <TextField
            variant="outlined"
            type="text"
            label="Link do seu xml"
            value={linkXML}
            onChange={(e) => setLinkXML(e.target.value)}
            disabled
          />
        ) : (
          <TextField
          variant="outlined"
            type="text"
            label="Link do seu xml"
            value={linkXML}
            onChange={(e) => setLinkXML(e.target.value)}
          />
        )}
        <span style={{ margin: "1%" }}>ou</span>
        {selectedXML ? (
          <label className="carregarXml" htmlFor="xml">
            {selectedXML.name}
          </label>
        ) : (
          <label className="carregarXml" htmlFor="xml">
            Carregar XML
          </label>
        )}
        <Button variant="contained" className="modelo-xml">
          <a className="baixar-modelo" href="../../modelo.xml" download>
            Baixar Modelo XML
            <FiDownloadCloud />
          </a>
        </Button>
        {linkXML ? (
          <input
            type="file"
            onChange={(e) => setSelectedXML(e.target.files[0])}
            name="xml"
            id="xml"
            className="input-file"
            disabled
          />
        ) : (
          <input
            type="file"
            onChange={(e) => setSelectedXML(e.target.files[0])}
            name="xml"
            id="xml"
            className="input-file"
          />
        )}
        {/* <button className="button-adicionar" onClick={sendXML}>
          Adicionar
        </button> */}
      </div>

      <div className="header">
          <TextField
          style={{height: '100%', width: '20%', margin: '2%'}}
            type="number"
            variant="standard"
            label="Digite o SKU"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          {/* <Button onclick={buscar}>Buscar</Button> */}
      </div>
    </>
  );
}

export default Header;
