import React from "react";
import Button from "./Button";
import "./Header.css";
import { FiDownloadCloud } from "react-icons/fi";

function Header({ setSelectedFile, buscar, setText, text, setSelectedXML, sendXML, linkXML, selectedXML, setLinkXML }) {
  return (
    <>
      <div>
        {selectedXML ? (
          <input
            type="text"
            placeholder="Link do seu xml"
            className="inputInfo"
            style={{ marginBottom: "5%" }}
            disabled
          />
        ) : (
          <input
            type="text"
            placeholder="Link do seu xml"
            className="inputInfo"
            style={{ marginBottom: "5%", height: "60px" }}
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
        <button className="modelo-xml">
          <a className="baixar-modelo" href="../../modelo.xml" download>
            Baixar Modelo XML
            <FiDownloadCloud />
          </a>
        </button>
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
        <div className="ib">
          <input
            type="number"
            className="inputSku"
            placeholder="Digite o SKU"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          {/* <Button onclick={buscar}>Buscar</Button> */}
        </div>
      </div>
    </>
  );
}

export default Header;
