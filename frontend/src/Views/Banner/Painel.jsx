import {
  Box,
  Button,
  Card,
  Grid,
  Step,
  StepConnector,
  stepConnectorClasses,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Main from "../../components/Main";
import PropTypes from "prop-types";
import { AiOutlineCheck } from "react-icons/ai";
import Cookies from "js-cookie";
import api from "../../services/api";

function getSteps() {
  return [
    "Pesquisa XML",
    "Editando conteudos",
    "Personalizando texto",
    "Pronto!",
  ];
}

function Painel({
  buscar,
  setText,
  text,
  setSelectedFile,
  dados,
  e,
  aplicar,
  apagar,
  download,
  downloadImage,
  selectedFile,
  selectedXML,
  setSelectedXML,
  linkXML,
  setLinkXML,
  sendXML,
  url,
}) {
  const [can_create, setCan_create] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      api.post("/users/getCan_Create", { token: token }).then((res) => {
        setCan_create(res.data[0].can_create);
      });
    }
  }, [aplicar]);

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <Header
            buscar={buscar}
            setText={setText}
            text={text}
            setSelectedFile={setSelectedFile}
            setSelectedXML={setSelectedXML}
            sendXML={sendXML}
            linkXML={linkXML}
            selectedXML={selectedXML}
            setLinkXML={setLinkXML}
          />
        );
      case 1:
        return <h1>Olá</h1>;
      case 2:
        return (
          <Main
            dados={dados}
            e={e}
            aplicar={aplicar}
            apagar={apagar}
            download={download}
            downloadImage={downloadImage}
            can_create={can_create}
            setCan_create={setCan_create}
          />
        );
      case 3:
        return <Banner selectedFile={selectedFile} url={url} />;
      default:
        return null;
    }
  }
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const isLastStep = activeStep === steps.length - 1;

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);

  return (
    <Box mt={5} mb={9}>
      <Grid container justifyContent="center">
        <Grid item xs={12} lg={8}>
          <Box mt={6} mb={8} textAlign="center">
            <Box mb={1}>
              <Typography variant="h3" fontWeight="bold">
                Crie um Banner
              </Typography>
            </Box>
            <Typography variant="h5" fontWeight="regular" color="seagreen">
              Configurando Banner
            </Typography>
          </Box>
          <Card>
            <Box sx={{ width: "100%" }} pt={2}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
            <Box p={2}>
              <Box>
                {getStepContent(activeStep)}
                <Box
                  mt={3}
                  width="100%"
                  display="flex"
                  justifyContent="space-between"
                >
                  {activeStep === 0 ? (
                    <Box />
                  ) : (
                    <Button
                      variant="outlined"
                      color="warning"
                      onClick={handleBack}
                    >
                      Voltar
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={!isLastStep ? handleNext : undefined}
                  >
                    {isLastStep ? "send" : "Próximo"}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Painel;
