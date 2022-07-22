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

import { useState } from "react";
import { Link } from 'react-router-dom';
// formik components
import { Formik, Form } from "formik";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// NewUser page components

// import Address from "../../../../layouts/pages/users/new-users/components/Address/index";
// import Socials from "../../../../layouts/pages/users/new-users/components/Socials/index";
// import Profile from "../../../../layouts/pages/users/new-users/components/Profile/index";

// NewUser layout schemas for form and form feilds

import { Box, Button, Typography } from "@mui/material";
import initialValuesC from "../users/new-users/schemas/initialValuesC";
import validationsC from "../users/new-users/schemas/validationC";
import formC from "../users/new-users/schemas/formC";
import UserInfo from "./Components/UserInfoC";
import api from "../../services/api";
import { toast } from "react-toastify";

function getSteps() {
  return ["Informações do usuário"];
}

function getStepContent(stepIndex, formData) {
  switch (stepIndex) {
    case 0:
      return <UserInfo formData={formData} />;
    default:
      return null;
  }
}

function CreateAccoun() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const { formId, formField } = formC;
  const currentValidation = validationsC[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  const handleBack = () => setActiveStep(activeStep - 1);

  const submitForm = async (values, actions) => {
    await sleep(1000);
    //Criando usuário
    api
      .post("/users/create", {
        nome: values.nome,
        email: values.email,
        senha: values.password,
      })
      .then((res) => {
        if (res.data === true) {
          window.location.href = "/";
        } else {
          toast.warn(res.data);
        }
      });

    actions.setSubmitting(false);
    actions.resetForm();

    setActiveStep(0);
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <Box py={3} mb={20} height="65vh">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100%", mt: 5 }}
      >
        <Grid item xs={12} lg={8}>
          <Formik
            initialValues={initialValuesC}
            validationSchema={currentValidation}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, isSubmitting, setFieldValue }) => (
              <Form id={formId} autoComplete="off">
                <Box sx={{ height: "100%" }}>
                  <Box mx={2}>
                    <Typography variant="h4" align="center">
                      Criação de Usuários
                    </Typography>
                  </Box>
                  <Box p={3}>
                    <Box>
                      {getStepContent(activeStep, {
                        values,
                        touched,
                        formField,
                        errors,
                        setFieldValue,
                      })}
                      <Box
                        mt={2}
                        width="100%"
                        display="flex"
                        justifyContent="space-between"
                      >
                        {activeStep === 0 ? (
                          <Box />
                        ) : (
                          <Button
                            variant="gradient"
                            color="light"
                            onClick={handleBack}
                          >
                            back
                          </Button>
                        )}
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                        >
                          {isLastStep ? "Enviar" : "Próximo"}
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Grid align="right" sx={{ mt: 3}}>
                <span>Já tem uma conta?{" "}</span><Link to="/">Voltar</Link>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CreateAccoun;
