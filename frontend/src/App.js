import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import api from "./services/api";

function App() {
  //Estados
  const [index, setIndex] = useState(null);
  const [selectedXML, setSelectedXML] = useState(null);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [text, setText] = useState("");
  const [dados, setDados] = useState([]);
  const [e, setE] = useState(false);
  const [download, setDownload] = React.useState(null);
  const [linkXML, setLinkXML] = useState(null);
  console.log(text);
  //Funções
  function a(p) {
    document.querySelector(".preview").src = p;
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
        a(res.data);
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
    if (index) {
      if (selectedXML) {
        api.post("/buscarAqv", { file: index, id: text }).then(res => {
          setDados(res.data)
          setE(true)
          console.log(res.data)
        })
      } else {
        console.log(index);
        api.post("/", { id: text, link: linkXML }).then((res) => {
          console.log(res.data);
          setDados(res.data);
          setE(true);
        });
      }
    } else {
      alert("Adicione um XML");
    }
  }
  function apagar() {
    api.get("/apagar").then((res) => {
      alert(res.data);
    });
  }
  async function sendXML() {
    if (selectedXML) {
      const formXml = new FormData();
      formXml.append("XML", selectedXML);
      const headers = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await api.post("/baixarXML", formXml, headers).then((res) => {
        console.log(res.data)
        setIndex(res.data);
      });
    } else {
      if (linkXML) {
        setIndex(linkXML);
      } else {
        alert("Adicione um XML");
      }
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/painel"
          element={
            <Home
              sendXML={sendXML}
              buscar={buscar}
              setText={setText}
              text={text}
              setSelectedFile={setSelectedFile}
              dados={dados}
              e={e}
              aplicar={aplicar}
              apagar={apagar}
              download={download}
              downloadImage={downloadImage}
              selectedFile={selectedFile}
              selectedXML={selectedXML}
              setSelectedXML={setSelectedXML}
              linkXML={linkXML}
              setLinkXML={setLinkXML}
            />
          }
        ></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
