import checkout from "./formC";

const {
    formFieldC: {
      nomeC,
      emailC,
      passwordC,
      repeatPasswordC
    },
  } = checkout;
  
  const initialValuesC = {
    [nomeC.name]: "",
    [emailC.name]: "",
    [passwordC.name]: "",
    [repeatPasswordC.name]: "",
  };
  
  export default initialValuesC;