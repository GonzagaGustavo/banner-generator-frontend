import React from "react";
import "./NewBanner.css";

function NewBanner() {
  return (
    <>
      <div className="files">
        <input type="file" />
        <button style={{ width: "210px", marginLeft: "10px" }}>
          Novo Banner
        </button>
      </div>
    </>
  );
}

export default NewBanner;
