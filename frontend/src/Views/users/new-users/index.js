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

import { useDebugValue, useEffect, useState } from "react";
// formik components
import { Formik, Form } from "formik";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// NewUser page components
import UserInfo from "./components/UserInfo";
// import Address from "../../../../layouts/pages/users/new-users/components/Address/index";
// import Socials from "../../../../layouts/pages/users/new-users/components/Socials/index";
// import Profile from "../../../../layouts/pages/users/new-users/components/Profile/index";

// NewUser layout schemas for form and form feilds
import validations from "./schemas/validations";
import form from "./schemas/form";
import initialValues from "./schemas/initialValues";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import api from "../../../services/api";
import { toast } from 'react-toastify'

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

function NewUser({ id }) {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const { formId, formField } = form;
  const currentValidation = validations[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const a = async () => {
      if (id) {
        const { nome, role, email, can_create } = formField;
        await api.post("/users/getUser", { id: id }).then((res) => {
          setUserData({
            [nome.name]: `${res.data.nome}`,
            [role.name]: `${res.data.role}`,
            [email.name]: `${res.data.email}`,
            [can_create.name]: `${res.data.can_create}`,
          });
        });
      }
    };
    a();
  }, []);
  console.log(userData);
  console.log(initialValues);
  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  const handleBack = () => setActiveStep(activeStep - 1);

  const submitForm = async (values, actions) => {
    await sleep(1000);
    console.log(values, {id: id});

    // eslint-disable-next-line no-alert
    api.post("/users/edit", {values: values, id: id}).then(res => {
      toast.success(res.data)
    })

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
    <Box py={3} mb={20} sx={{ background: "#ddd", minHeight: "100vh" }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100%", mt: 8 }}
      >
        <Grid item xs={12} lg={8}>
          {userData ? (
            <Formik
              initialValues={userData ? userData : initialValues}
              validationSchema={currentValidation}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, isSubmitting, setFieldValue }) => (
                <Form id={formId} autoComplete="off">
                  <Card sx={{ height: "100%" }}>
                    <Box mx={2}>
                      <Typography variant="h4" align="center">
                        {id ? "Edição de usuários" : "Criação de Usuários"}
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
                  </Card>
                </Form>
              )}
            </Formik>
          ) : (
            <CircularProgress color="inherit" />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default NewUser;
