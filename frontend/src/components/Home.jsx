import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import Main from "./Main";

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
  sendXML
}) {
  return (
    <div className="App app-container">
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
            style={{ marginBottom: "5%" }}
            value={linkXML}
            onChange={e => setLinkXML(e.target.value)}
          />
        )}
        <span style={{ margin: "1%" }}>ou</span>
        {selectedXML ? (
          <label htmlFor="xml">{selectedXML.name}</label>
        ) : (
          <label htmlFor="xml">Carregar XML</label>
        )}
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
        <button style={{marginLeft: '2%', backgroundColor: 'rgb(76, 139, 100)'}} onClick={sendXML}>Adicionar</button>
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
      />
      <Banner selectedFile={selectedFile} />
    </div>
  );
}

export default Home;
