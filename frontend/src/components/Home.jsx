import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useState } from "react";
import api from "../services/api";
import Banner from "./Banner";
import Header from "./Header";
import Main from "./Main";
import CustomText from "./CustomBanner/CustomText";

function Home({
  buscar,
  setText,
  text,
  setSelectedFile,
  dados,
  e,
  aplicar,
  apagar,
  download,
  downloadImage,
  selectedFile,
  selectedXML,
  setSelectedXML,
  linkXML,
  setLinkXML,
  sendXML,
  url,
}) {
  const [can_create, setCan_create] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      api.post("/users/getCan_Create", { token: token }).then((res) => {
        setCan_create(res.data[0].can_create);
      });
    }
  }, [aplicar]);

  return (
    <div>
      <Header
        buscar={buscar}
        setText={setText}
        text={text}
        setSelectedFile={setSelectedFile}
        setSelectedXML={setSelectedXML}
        sendXML={sendXML}
        linkXML={linkXML}
        selectedXML={selectedXML}
        setLinkXML={setLinkXML}
      />
      <CustomText />
      <Main
        dados={dados}
        e={e}
        aplicar={aplicar}
        apagar={apagar}
        download={download}
        downloadImage={downloadImage}
        can_create={can_create}
        setCan_create={setCan_create}
      />
      <Banner selectedFile={selectedFile} url={url} />
    </div>
  );
}

export default Home;
