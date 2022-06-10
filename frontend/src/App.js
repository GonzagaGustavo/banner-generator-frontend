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
console.log(text)
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

  function buscar() {
    api.post("/", { id: text }).then((res) => {
      console.log(res.data);
      setDados(res.data);
      setE(true);
    });
  }

  return (
    <div className="App">
      <Header setSelectedFile={setSelectedFile} buscar={buscar} setText={setText} text={text} />
      <Main dados={dados} e={e} />
      <Banner selectedFile={selectedFile} />
    </div>
  );
}

export default App;
