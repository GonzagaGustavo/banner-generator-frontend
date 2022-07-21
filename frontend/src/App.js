import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";
import Home from "./components/Home";
import Login from "./Views/Login/Login";
import api from "./services/api";
import EditUser from "./components/EditUser";
import Template from "./Views/SuperAdmin/Template";
import NewUser from "./Views/users/new-users";
import Sidebar from "./Views/Painel/Sidebar/Sidebar";
import Cookies from "js-cookie";
import CreateAccount from "./components/CreateAccount";
import Painel from "./Views/Banner/Painel";

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
  const [url, setUrl] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [personalization, setPersonalization] = useState({
    color: 'rgb(0,0,0)',
    font: 'Roboto',
    size1: 40,
    size2: 30,
    size3: 20
  })
  //Funções
  const [isOpen, setIsOpen] = React.useState(false);

  async function aplicar() {
    const token = Cookies.get("token");
    api.post("/users/getCan_Create", { token: token }).then((res) => {
      if (res.data === true) {
        setUrl(null)
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
          api.post("/upload", formData, headers, { onUploadProgress: (e) => {
            let progress = Number = Math.round(
              (e.loaded * 100) / e.total
            )
            console.log(progress)
          }}).then((res) => {
            toast.success(res.data);
            api.post("/createBanner", { dados: dados, personalization: personalization }).then((ress) => {
              //Não executa esse callback!
              console.log(ress.status);
              if (ress.status == 400) {
                toast.warn(ress.data);
              } else {
                setUrl(ress.data);
                setDownload(ress.data);
              }
            });
          });
        } else {
          toast.warn("Formato de imagem não aceito!");
        }
      } else {
        if (res.data[0].can_create > 0) {
          setUrl(null)
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
            api.post("/upload", formData, headers).then((res) => {
              toast.success(res.data);
              api.post("/createBanner", dados).then((ress) => {
                //Não executa esse callback!
                console.log(ress.status);
                if (ress.status == 400) {
                  toast.warn(ress.data);
                } else {
                  api.post("/users/downCan_create", { token: token });
                  setUrl(ress.data);
                  setDownload(ress.data);
                }
              });
            });
          } else {
            toast.warn("Formato de imagem não aceito!");
          }
        } else {
          toast.warn("Você não pode criar mais banners!");
        }
      }
    });
  }

  async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "Banner";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function buscar(xml) {
    if (text) {
      if (selectedXML) {
        api.post("/buscarAqv", { file: xml, id: text }).then((res) => {
          setActiveStep(activeStep + 1)
          setDados({
            name: res.data[0].name,
            price: res.data[0].price,
            adiconalText: `${res.data[0].p_mounth}x de ${res.data[0].p_value}`,
            img: res.data[0].img
          });
          setE(true);
        });
      } else {
        api.post("/", { id: text, link: xml }).then((res) => {
          console.log(res.data);
          setActiveStep(activeStep + 1)
          setDados({
            name: res.data[0].name,
            price: res.data[0].price,
            adiconalText: `${res.data[0].p_mounth}x de ${res.data[0].p_value}`,
            img: res.data[0].img
          });
          setE(true);
        });
      }
    } else {
      toast.warning("Digite um SKU");
    }
  }
  function apagar() {
    api.get("/apagar").then((res) => {
      setSelectedXML(null);
      setIndex(null);
      setUrl(null);
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
            setIndex(res.data);
            toast.success("XML adicionado!");
            buscar(res.data);
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
        buscar(linkXML);
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
                path="/banners"
                element={
                  <Painel
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
                    activeStep={activeStep}
                    setActiveStep={setActiveStep}
                    setDados={setDados}
                    personalization={personalization}
                    setPersonalization={setPersonalization}
                  />
                }
              ></Route>
              {/* <Route
                path="/banners"
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
              Componente para excluir
              */}
            </Routes>
          </span>
        ) : (
          <>
            {location.pathname !== "/" && location.pathname !== "/signup" ? (
              <div>Você não tem permissão para acessar esta pagina!</div>
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
