import React from "react";
import "./Banner.css";

function Banner({ selectedFile, url, loading }) {
  return (
    <div className="banner">
      {url ? (
        <img className="preview" src={url} alt="" />
      ) : (
        <div>{loading}%</div>
      )}
    </div>
  );
}

export default Banner;
