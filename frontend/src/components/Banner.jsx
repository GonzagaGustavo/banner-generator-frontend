import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <React.Fragment>
      <div className="container-slide">
        <div className="slide">{/* <img src={} alt="" /> */}</div>
        <button className="baixar--banner">Baixar banner</button>
      </div>
    </React.Fragment>
  );
}

export default Banner;
