import React from "react";
import { useParams } from "react-router-dom";
import NewUser from "../Views/users/new-users";

function EditUser() {
  const params = useParams();

  return (
    <div>
      <NewUser id={params.id} />
    </div>
  );
}

export default EditUser;
