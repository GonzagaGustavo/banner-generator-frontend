/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import * as Yup from "yup";
import checkout from "./form";

const {
  formField: {
    nome,
    role,
    email,
    can_create
  },
} = checkout;

const validations = [
  Yup.object().shape({
    [nome.name]: Yup.string().required(nome.errorMsg),
    [role.name]: Yup.string().required(role.errorMsg),
    [email.name]: Yup.string().required(email.errorMsg).email(email.invalidMsg),
    [can_create.name]: Yup.number().min(0, "Este usuário vai ficar devendo banners? Pera quê?").max(1000, "Maximo é 1000 de banners").required(can_create.errorMsg),
  }),
];

export default validations;
