import checkout from "./formC";

const {
    formField: {
      nome,
      email,
      password,
      repeatPassword
    },
  } = checkout;
  
  const initialValuesC = {
    [nome.name]: "",
    [email.name]: "",
    [password.name]: "",
    [repeatPassword.name]: "",
  };
  
  export default initialValuesC;