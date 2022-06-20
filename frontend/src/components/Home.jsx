import React from 'react'
import Banner from "./components/Banner";
import Header from "./components/Header";
import Main from "./components/Main";

function Home() {
  return (
    <div className="App app-container">
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
  )
}

export default Home