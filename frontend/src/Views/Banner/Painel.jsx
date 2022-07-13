import { Box, Button, Card, Grid, Step, StepConnector, stepConnectorClasses, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useState } from 'react'
import { styled } from "@mui/material/styles";
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import Main from '../../components/Main';
import PropTypes from "prop-types";
import { AiOutlineCheck } from 'react-icons/ai'

function getSteps() {
  return ["1. Pesquisa XML", "2. Editando conteudos", "3. Personalizando texto", "4. Pronto!"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Header />;
    case 1:
      return <h1>Olá</h1>;
    case 2:
      return <Main />;
    case 3:
      return <Banner />;
    default:
      return null;
  }
}

function Painel() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const isLastStep = activeStep === steps.length - 1;

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);
  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#784af4',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#784af4',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : 'blue',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));
  const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color: "#784af4"
    }),
    "& .QontoStepIcon-completedIcon": {
      color: "#784af4",
      zIndex: 1,
      fontSize: 18
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor"
    }
  }));
  function QontoStepIcon(props) {
    const { active, completed, className } = props;
  
    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <AiOutlineCheck className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  }
  
  QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool
  };
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
              <Box mt={-3} mb={3} mx={2}>
                <Stepper activeStep={activeStep} alternativeLabel connector={<QontoConnector />}>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
              <Box p={2}>
                <Box>
                  {getStepContent(activeStep)}
                  <Box mt={3} width="100%" display="flex" justifyContent="space-between">
                    {activeStep === 0 ? (
                      <Box />
                    ) : (
                      <Button variant="outlined" color="warning" onClick={handleBack}>
                        back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={!isLastStep ? handleNext : undefined}
                    >
                      {isLastStep ? "send" : "next"}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
  )
}

export default Painel