import React from "react";
import "./Banner.css";

function Banner({ selectedFile }) {
  return (
    <div className="banner">
      {selectedFile ? (
        <img className="preview" src={URL.createObjectURL(selectedFile)} alt="" />
      ) : (
        <p>Faça o upload de uma Imagem</p>
      )}
    </div>
  );
}

export default Banner;
