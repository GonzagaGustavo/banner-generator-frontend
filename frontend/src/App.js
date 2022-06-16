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
  async function aplicar() {
    const formData = new FormData();
    formData.append("image", selectedFile);
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await api.post("/upload", formData, headers).then((res) => {
      alert(res.data);
    });

    api.post("/createBanner", dados).then((res) => {
      console.log(res.data);
      document.querySelector(".preview").src = res.data;
      setDownload(res.data);
    });
  }

  async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = document.querySelector(".preview").getAttribute("src");
    console.log(link.download);
    console.log(link.click());
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
