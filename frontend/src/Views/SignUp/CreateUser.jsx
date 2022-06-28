import React from "react";
import "./CreateUser.css";
import Buttons from "../../components/Buttons/Buttons";
import Inputs from "../../components/Inputs/Inputs";

function CreateUser() {
  return (
    <div className="container">
      <div className="contentText">
        <h1>Crie banners em alguns cliques!</h1>
      </div>
      <form>
        <Inputs />
        <Buttons />
      </form>
    </div>
  );
}

export default CreateUser;
