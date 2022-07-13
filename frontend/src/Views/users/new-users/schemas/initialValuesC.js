import checkout from "./formC";

const {
    formField: {
      nome,
      email,
      password,
      repeatPassword,
      checked
    },
  } = checkout;
  
  const initialValuesC = {
    [nome.name]: "",
    [email.name]: "",
    [password.name]: "",
    [repeatPassword.name]: "",
    [checked.name]: false
  };
  
  export default initialValuesC;