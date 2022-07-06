import * as Yup from "yup";
import checkout from "./formC";

const {
    formField: {
      nome,
      email,
      password,
      repeatPassword
    },
  } = checkout;

  const validationsC = [
    Yup.object().shape({
      [nome.name]: Yup.string().required(nome.errorMsg),
      [email.name]: Yup.string().required(email.errorMsg).email(email.invalidMsg),
      [password.name]: Yup.string().required(password.errorMsg).min(6, password.invalidMsg),
      [password.name]: Yup.string().required(password.errorMsg).min(6, password.invalidMsg),
      [repeatPassword.name]: Yup.string()
        .required(repeatPassword.errorMsg)
        .oneOf([Yup.ref("password"), null], repeatPassword.invalidMsg),
    })
  ];
  
  export default validationsC;