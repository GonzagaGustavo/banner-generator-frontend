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

import checkout from "./form";

const {
  formField: {
    nome,
    role,
    email,
    can_create
  },
} = checkout;

const initialValues = {
  [nome.name]: "",
  [role.name]: "",
  [email.name]: "",
  [can_create.name]: "",
};

export default initialValues;
