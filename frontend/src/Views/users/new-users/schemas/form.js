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

const form = {
  formId: "new-user-form",
  formField: {
    nome: {
      name: "nome",
      label: "Nome",
      type: "text",
      errorMsg: "Nome é obrigatório.",
    },
    role: {
      name: "role",
      label: "Nivel da conta",
      type: "text",
      errorMsg: "Status do usuário é obrigatório !",
    },
    email: {
      name: "email",
      label: "Email",
      type: "email",
      errorMsg: "email é obrigatório.",
      invalidMsg: "Seu email está inválido !",
    },
    can_create: {
      name: "can_create",
      label: "Pode criar",
      type: "number",
      errorMsg: "Pode criar é obrigatório",
    }
  },
};

export default form;
