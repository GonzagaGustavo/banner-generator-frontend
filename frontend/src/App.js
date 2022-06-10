import React, { useState } from "react";
import "./App.css";
import BuscaInfo from "./components/BuscaInfo";
import Banner from "./components/Banner";
import NewBanner from "./NewBanner";
import api from "./services/api";

function App() {
//Estados
const [selectedFile, setSelectedFile] = React.useState(null);
const [text, setText] = useState("");
  const [dados, setDados] = useState([]);
  const [e, setE] = useState(false);

//Funções
function upload() {
  const formData = new FormData()
  formData.append("image", selectedFile)
  console.log(selectedFile)

  const headers = {
    'headers': {
      'Content-Type': 'application/json'
    }
  }
  api.post("/upload", formData, headers)
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
    <div className="App">
      <NewBanner />
      <BuscaInfo />
      <Banner />
    </div>
  );
}

export default App;
