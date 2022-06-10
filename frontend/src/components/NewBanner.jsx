import React from "react";
import api from '../services/api'
import "./NewBanner.css";

function NewBanner() {
  return (
    <>
      <div className="files">
        <input type="file" onChange={handleFileSelect} />
        <input
          type="submit"
          onClick={upload}
          value="Novo Banner"
          style={{ width: "210px", marginLeft: "10px" }}
        />
      </div>
    </>
  );
}

export default NewBanner;