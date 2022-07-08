import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import Login from "./Views/Login/Login";
import api from "./services/api";
import CreateUser from "./Views/Registro/CreateUser";
import EditUser from "./components/EditUser";
import Header from "./Views/Painel/Header/index";
import Template from "./Views/SuperAdmin/Template";
import NewUser from "./Views/users/new-users";
import Sidebar from "./Views/Painel/Sidebar/Sidebar";
import Cookies from "js-cookie";
import CreateAccount from "./components/CreateAccount";

function App() {
  const location = useLocation();
  //Estados
  const [index, setIndex] = useState(null);
  const [selectedXML, setSelectedXML] = useState(null);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [text, setText] = useState("");
  const [dados, setDados] = useState([]);
  const [e, setE] = useState(false);
  const [download, setDownload] = React.useState(null);
  const [linkXML, setLinkXML] = useState(null);
  const [url, setUrl] = useState(null)
  console.log(text);

  //Funções
  const [isOpen, setIsOpen] = React.useState(false);

  function a(p) {
    document.querySelector(".preview").src = p;
  }
  async function aplicar() {
    const formData = new FormData();
    formData.append("image", selectedFile[0]);
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
    ].find((formatoAceito) => formatoAceito === selectedFile[0].type);
    if (extensao) {
      await api.post("/upload", formData, headers).then((res) => {
        toast.success(res.data);
        api.post("/createBanner", dados).then((ress) => {
          //Não executa esse callback!
          console.log(ress.status);
          if (ress.status == 400) {
            toast.warn(ress.data);
          } else {
            setUrl(ress.data)
            setDownload(ress.data);
          }
        });
      });
      for (const value of formData.values()) {
        console.log(value);
      }
    } else {
      toast.warn("Formato de imagem não aceito!");
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
        api.post("/buscarAqv", { file: index, id: text }).then((res) => {
          setDados(res.data);
          setE(true);
          console.log(res.data);
        });
      } else {
        console.log(index);
        api.post("/", { id: text, link: linkXML }).then((res) => {
          console.log(res.status);
          setDados(res.data);
          setE(true);
        });
      }
    } else {
      toast.info("Adicione um XML");
    }
  }
  function apagar() {
    api.get("/apagar").then((res) => {
      setSelectedXML(null);
      setIndex(null);
      toast.success(res.data);
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
      const extensao = ["text/xml"].find(
        (formatoAceito) => formatoAceito === selectedXML.type
      );
      if (extensao) {
        await api
          .post("/baixarXML", formXml, headers)
          .then((res) => {
            console.log(res.data);
            setIndex(res.data);
            toast.success("XML adicionado!");
          })
          .catch((err) => {
            console.log(err);
            toast.warn("Ocorreu um erro!");
          });
      } else {
        toast.warn("Esse arquivo não é um XML!");
      }
    } else {
      if (linkXML) {
        setIndex(linkXML);
        toast.success("XML adicionado!");
      } else {
        toast.info("Adicione um XML");
      }
    }
  }

  const token = Cookies.get("token");
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div
        className="container-painel"
        style={
          location.pathname === "/signup" ? { justifyContent: "center" } : null
        }
      >
        {location.pathname !== "/" && location.pathname !== "/signup" ? (
          <>
            {token ? <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} /> : <></>}
          </>
        ) : null}
        <Routes>
          <Route path="/" element={<Login />}></Route>
          {/* <Route path="/signup" element={<CreateUser />}></Route> Rota para excluir */}
          <Route path="/signup" element={<CreateAccount />}></Route>
        </Routes>
        {token ? (
          <span
            id="span-container"
            style={{
              padding: "20px",
              width: "100%",
              marginLeft: isOpen ? "20vw" : "5vw",
              transition: "all 0.5s",
            }}
          >
            <Routes>
              <Route path="/admin/edit/:id" element={<EditUser />}></Route>
              {/* <Route path="/painel/usuario" element={<Header />}></Route> Rota para exluir */}
              <Route path="/admin/criacao" element={<NewUser />}></Route>
              <Route path="/admin" element={<Template />}></Route>
              <Route
                path="/Banners"
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
                    url={url}
                  />
                }
              ></Route>
            </Routes>
          </span>
        ) : (
          <>
            {location.pathname !== "/" && location.pathname !== "/signup" ? (
              <div>Você não tem permição para acessar esta pagina!</div>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
