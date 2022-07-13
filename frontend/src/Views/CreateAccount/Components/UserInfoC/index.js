// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import React from "react";
import { Link } from 'react-router-dom'
// Material Dashboard 2 PRO React components

//import MDTypography from "../../../../../../components/MDTypography/index";

// NewUser page components
import FormField from "../FormField/index";
import { Box, Checkbox, Typography } from "@mui/material";

import { ErrorMessage } from "formik";

function UserInfo({ formData }) {
  const { formField, values, errors, touched, setFieldValue } = formData;
  const { nome, email, password, repeatPassword, checked } = formField;
  const {
    nome: nomeV,
    email: emailV,
    password: passwordV,
    repeatPassword: repeatPasswordV,
    checked: checkedV,
  } = values;

  const [valuesInput, setValuesInput] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    type: false,
  });

  const [valuesInputRepeat, setValuesInputRepeat] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    type: false,
  });

  const handleClickShowPassword = () => {
    setValuesInput({
      ...valuesInput,
      type: !valuesInput.type,
    });
  };

  const handleClickShowPasswordRepeat = () => {
    setValuesInputRepeat({
      ...valuesInputRepeat,
      type: !valuesInputRepeat.type,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box>
      <Box lineHeight={0}>
        <Typography variant="h5">Sobre o usuário: </Typography>
      </Box>
      <Box mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={nome.type}
              label={nome.label}
              name={nome.name}
              value={nomeV}
              placeholder={nome.placeholder}
              error={errors.nome && touched.nome}

              //success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={email.type}
              label={email.label}
              name={email.name}
              value={emailV}
              placeholder={email.placeholder}
              error={errors.email && touched.email}
              //success={emailV.length > 0 && !errors.email}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormField
              type={valuesInput.type ? "text" : "password"}
              label={password.label}
              name={password.name}
              value={passwordV}
              placeholder={password.placeholder}
              error={errors.password && touched.password}
              success={passwordV.length > 0 && !errors.password}
              inputProps={{ autoComplete: "" }}
              endadornment={true}
              valuesInput={valuesInput}
              handleClickShowPassword={handleClickShowPassword}
              handleMouseDownPassword={handleMouseDownPassword}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={valuesInputRepeat.type ? "text" : "password"}
              label={repeatPassword.label}
              name={repeatPassword.name}
              value={repeatPasswordV}
              placeholder={repeatPassword.placeholder}
              error={errors.repeatPassword && touched.repeatPassword}
              success={repeatPasswordV.length > 0 && !errors.repeatPassword}
              inputProps={{ autoComplete: "" }}
              endadornment={true}
              valuesInput={valuesInputRepeat}
              handleClickShowPassword={handleClickShowPasswordRepeat}
              handleMouseDownPassword={handleMouseDownPassword}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box style={{display: 'flex', alignItems: 'center'}}>
              <Checkbox
                value={checkedV}
                onChange={(e) => setFieldValue(checked.name, e.target.checked)}
              /><Link to={"/"}>Termos de usuário</Link>
            </Box>
            <Box mt={0.75}>
              <Typography
                width={400}
                component="div"
                variant="caption"
                color="error"
                fontWeight="regular"
              >
                <ErrorMessage name={checked.name} />
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

// typechecking props for UserInfo
UserInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default UserInfo;
