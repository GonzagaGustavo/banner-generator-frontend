import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import Login from "./Views/Login/Login";
import api from "./services/api";
import CreateUser from "./Views/Registro/CreateUser";
import EditUser from "./components/EditUser";
import Header from "./Views/Painel/Header/index";
import { FaBars } from "react-icons/fa";
import Template from "./Views/SuperAdmin/Template";
import MenuDefault from "./Layout/MenuDefault";
import NewUser from "./Views/users/new-users";
import Sidebar from "./Views/Painel/Sidebar/Sidebar";
import Cookies from "js-cookie";

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
  console.log(text);
  const [sidebar, setSidebar] = useState(false);

  //Funções
  const [isOpen, setIsOpen] = React.useState(false);

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
        toast.success(res.data);
      });

      api.post("/createBanner", dados).then((res) => {
        a(res.data);
        setDownload(res.data);
      });
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
          console.log(res.data);
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
      <div className="container-painel">
        {location.pathname !== "/" && location.pathname !== "/admin/create" ? (
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        ) : null}
        <span
          style={{
            padding: "20px",
            width: "100%",
            marginLeft: isOpen ? "20vw" : "5vw",
            transition: "all 0.5s",
          }}
        >
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/admin/create" element={<CreateUser />}></Route>
          </Routes>
          {token && (
            <Routes>
              <Route path="/admin/edit/:id" element={<EditUser />}></Route>
              <Route path="/painel/usuario" element={<Header />}></Route>
              <Route path="/admin/criacao" element={<NewUser />}></Route>
              <Route path="/admin" element={<Template />}></Route>
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
            </Routes>
          )}
        </span>
      </div>
    </>
  );
}

export default App;
