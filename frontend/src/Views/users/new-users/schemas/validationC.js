import * as Yup from "yup";
import checkout from "./formC";

const {
    formField: {
      nomeC,
      emailC,
      passwordC,
      repeatPasswordC
    },
  } = checkout;

  const validationsC = [
    Yup.object().shape({
      [nomeC.name]: Yup.string().required(nomeC.errorMsg),
      [emailC.name]: Yup.string().required(emailC.errorMsg).email(emailC.invalidMsg),
      [passwordC.name]: Yup.string().required(passwordC.errorMsg).min(6, passwordC.invalidMsg),
      [passwordC.name]: Yup.string().required(passwordC.errorMsg).min(6, passwordC.invalidMsg),
      [repeatPasswordC.name]: Yup.string()
        .required(repeatPasswordC.errorMsg)
        .oneOf([Yup.ref("password"), null], repeatPasswordC.invalidMsg),
    })
  ];
  
  export default validationsC;