import React from "react";
import axios from "axios";
import "./NewBanner.css";

function NewBanner() {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    try {
      const response = axios({
        method: "post",
        url: "/api/upload/file",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <div className="files">
        <input type="file" onChange={handleFileSelect} />
        <input
          type="submit"
          value="Novo Banner"
          style={{ width: "210px", marginLeft: "10px" }}
        />
      </div>
    </>
  );
}

export default NewBanner;
