import * as Yup from "yup";
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

  const validationsC = [
    Yup.object().shape({
      [nome.name]: Yup.string().max(60, "Maximo 60 digitos").required(nome.errorMsg),
      [email.name]: Yup.string().max(60, "Maximo 60 digitos").required(email.errorMsg).email(email.invalidMsg),
      [password.name]: Yup.string().max(60).required(password.errorMsg).min(6, password.invalidMsg),
      [password.name]: Yup.string().max(60).required(password.errorMsg).min(6, password.invalidMsg),
      [repeatPassword.name]: Yup.string()
        .required(repeatPassword.errorMsg)
        .oneOf([Yup.ref("password"), null], repeatPassword.invalidMsg),
        [checked.name]: Yup.boolean().required(checked.errorMsg).isTrue(checked.invalidMsg)
    })
  ];
  
  export default validationsC;