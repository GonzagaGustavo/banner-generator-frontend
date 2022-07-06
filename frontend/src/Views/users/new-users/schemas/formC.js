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

const formC = {
    formId: "new-form",
    formField: {
      nome: {
        name: "nome",
        label: "Nome",
        type: "text",
        errorMsg: "Nome é obrigatório!",
      },
      email: {
        name: "email",
        label: "Email",
        type: "email",
        errorMsg: "Email é obrigatório!",
        invalidMsg: "Seu email é invalido!",
      },
      password: {
        name: "password",
        label: "Senha",
        type: "password",
        errorMsg: "Senha é obrigatória!",
        invalidMsg: "Sua senha deve conter mais de 6 caracteres",
      },
      repeatPassword: {
        name: "repeatPassword",
        label: "Repeat Password",
        type: "password",
        errorMsg: "Senha é obrigatória!",
        invalidMsg: "As senhas não são iguais",
      }
    },
  };
  
  export default formC;