import React, { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Main from "./components/Main";
import api from "./services/api";

function App() {
  //Estados
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [text, setText] = useState("");
  const [dados, setDados] = useState([]);
  const [e, setE] = useState(false);
  const [download, setDownload] = React.useState(null);
  console.log(text);
  //Funções
  function a(p) {
    document.querySelector(".preview").src = p
  }
  async function aplicar() {
    const formData = new FormData();
    formData.append("image", selectedFile);
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const extensao = [
      "image/png",
      "image/jpg",
      "image/jpeg",
      "image/webp",
    ].find((formatoAceito) => formatoAceito === selectedFile.type);
    if (extensao) {
      await api.post("/upload", formData, headers).then((res) => {
        alert(res.data);
      });

      api.post("/createBanner", dados).then((res) => {
        a(res.data)
        setDownload(res.data);
        
      });
    } else {
      alert("Formato de imagem não aceito!");
    }
  }

  async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = imageSrc;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function buscar() {
    api.post("/", { id: text }).then((res) => {
      console.log(res.data);
      setDados(res.data);
      setE(true);
    });
  }
  function apagar() {
    api.get("/apagar").then((res) => {
      alert(res.data);
    });
  }

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
  );
}

export default App;
