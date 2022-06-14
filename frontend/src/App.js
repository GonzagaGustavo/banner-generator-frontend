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
    await api.post("/upload", formData, headers).then(res => {
      alert(res.data)
    })

    api.post("/createBanner", dados)
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  function buscar() {
    api.post("/", { id: text }).then((res) => {
      console.log(res.data);
      setDados(res.data);
      setE(true);
    });
  }

  return (
    <div className="App app-container">
      <Header
        handleFileSelect={handleFileSelect}
        buscar={buscar}
        setText={setText}
        text={text}
      />
      <Main dados={dados} e={e} aplicar={aplicar} />
      <Banner selectedFile={selectedFile} />
    </div>
  );
}

export default App;
