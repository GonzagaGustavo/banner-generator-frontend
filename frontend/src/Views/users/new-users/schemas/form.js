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
    firstName: {
      name: "firstName",
      label: "Primeiro Nome",
      type: "text",
      errorMsg: "Primeiro nome é obrigatório.",
    },
    lastName: {
      name: "lastName",
      label: "Último Nome",
      type: "text",
      errorMsg: "O último nome é obrigatório.",
    },
    company: {
      name: "company",
      label: "Empresa",
      type: "text",
    },
    email: {
      name: "email",
      label: "Email",
      type: "email",
      errorMsg: "email é obrigatório.",
      invalidMsg: "Seu email está inválido !",
    },
    password: {
      name: "password",
      label: "Senha",
      type: "password",
      errorMsg: "Senha é obrigatória.",
      invalidMsg: "Sua senha tem que ter mais de 6 caracteres !",
    },
    repeatPassword: {
      name: "repeatPassword",
      label: "Repetir Senha",
      type: "password",
      errorMsg: "Senha é obrigatória.",
      invalidMsg: "As duas senhas não são iguais !",
    },
    address1: {
      name: "address1",
      label: "Address 1",
      type: "text",
      errorMsg: "Address is required.",
    },
    address2: {
      name: "address2",
      label: "Address 2",
      type: "text",
    },
    city: {
      name: "city",
      label: "City",
      type: "text",
      errorMsg: "City is required.",
    },
    zip: {
      name: "zip",
      label: "Zip",
      type: "number",
      errorMsg: "Zip is required.",
      invalidMsg: "Zipcode is not valie (e.g. 70000).",
    },
    twitter: {
      name: "twitter",
      label: "Twitter Handle",
      type: "text",
      errorMsg: "Twitter profile is required.",
    },
    facebook: {
      name: "facebook",
      label: "Facebook Account",
      type: "text",
    },
    instagram: {
      name: "instagram",
      label: "Instagram Account",
      type: "text",
    },
    publicEmail: {
      name: "publicEmail",
      label: "Public Email",
      type: "email",
    },
    bio: {
      name: "bio",
      label: "Bio",
    },
  },
};

export default form;
