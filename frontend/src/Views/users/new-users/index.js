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

import { useEffect, useState } from "react";

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
import { Box, Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import api from "../../../services/api";

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

function NewUser() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const { formId, formField } = form;
  const currentValidation = validations[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const { id } = useParams();

  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  const handleBack = () => setActiveStep(activeStep - 1);

  const submitForm = async (values, actions) => {
    await sleep(1000);
    const { firstName } = values;
    console.log(values);

    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values, null, 2));

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

  useEffect(() => {
    if (id) {
      api.get("/users").then((res) => {});
    }
  }, []);

  return (
    <Box py={3} mb={20} sx={{ background: "#ddd", minHeight: "100vh" }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100%", mt: 8 }}
      >
        <Grid item xs={12} lg={8}>
          <Formik
            initialValues={initialValues}
            validationSchema={currentValidation}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, isSubmitting }) => (
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
                          disabled={isSubmitting}
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
        </Grid>
      </Grid>
    </Box>
  );
}

export default NewUser;
