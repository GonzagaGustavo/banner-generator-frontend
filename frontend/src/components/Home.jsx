import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useState } from "react";
import api from "../services/api";
import Banner from "./Banner";
import Header from "./Header";
import Main from "./Main";
import { FiDownloadCloud } from "react-icons/fi";

function Home({
  buscar,
  setText,
  text,
  setSelectedFile,
  dados,
  e,
  aplicar,
  apagar,
  download,
  downloadImage,
  selectedFile,
  selectedXML,
  setSelectedXML,
  linkXML,
  setLinkXML,
  sendXML,
  url,
}) {
  const [can_create, setCan_create] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      api.post("/users/getCan_Create", { token: token }).then((res) => {
        setCan_create(res.data[0].can_create);
      });
    }
  }, [aplicar]);

  return (
    <div>
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
        <button className="button-adicionar" onClick={sendXML}>
          Adicionar
        </button>
      </div>
      <Header
        buscar={buscar}
        setText={setText}
        text={text}
        setSelectedFile={setSelectedFile}
      />
      <Main
        dados={dados}
        e={e}
        aplicar={aplicar}
        apagar={apagar}
        download={download}
        downloadImage={downloadImage}
        can_create={can_create}
        setCan_create={setCan_create}
      />
      <Banner selectedFile={selectedFile} url={url} />
    </div>
  );
}

export default Home;
