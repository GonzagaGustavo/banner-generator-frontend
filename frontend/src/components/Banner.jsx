import React from "react";
import "./Banner.css";

function Banner({ selectedFile, url, loading }) {
  return (
    <div className="banner">
      {url ? (
        <img className="preview" src={url} alt="" />
      ) : (
        <div>{loading}</div>
      )}
      {/* {selectedFile ? (
        <>
          {url ? (
            <img className="preview" src={url} alt="" />
          ) : (
            <img
              className="preview"
              src={URL.createObjectURL(selectedFile[0])}
              alt=""
            />
          )}
        </>
      ) : (
        <p style={{ fontSize: "35px", color: "white", fontWeight: "bold" }}>
          Carrega a imagem de fundo
        </p>
      )} */}
    </div>
  );
}

export default Banner;
