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

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React components

//import MDTypography from "../../../../../../components/MDTypography/index";

// NewUser page components
import FormField from "../FormField/index";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import api from "../../../../../services/api";

function UserInfo({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { firstName, lastName, status, email, password, repeatPassword } =
    formField;
  const {
    firstName: firstNameV,
    lastName: lastNameV,
    status: statusV,
    email: emailV,
    password: passwordV,
    repeatPassword: repeatPasswordV,
  } = values;

  useEffect(() => {
    api.get("/users").then((res) => {
      firstNameV = res.data.name;
    });
  }, []);

  return (
    <Box>
      <Box lineHeight={0}>
        <Typography variant="h5">Sobre o usuário: </Typography>
      </Box>
      <Box mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={firstName.type}
              label={firstName.label}
              name={firstName.name}
              value={firstName.value}
              placeholder={firstName.placeholder}
              error={errors.firstName && touched.firstName}
              onChange={(event) =>
                formData.set(firstName.name, event.target.value)
              }
              //success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={lastName.type}
              label={lastName.label}
              name={lastName.name}
              value={lastName.value}
              placeholder={lastName.placeholder}
              error={errors.lastName && touched.lastName}
              onChange={(event) =>
                formData.set(lastName.name, event.target.value)
              }
              //success={lastNameV.length > 0 && !errors.lastName}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Status
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="admin"
                  control={<Radio />}
                  label="Admin"
                />
                <FormControlLabel
                  value="free"
                  control={<Radio />}
                  label="Free"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={email.type}
              label={email.label}
              name={email.name}
              value={email.value}
              placeholder={email.placeholder}
              error={errors.email && touched.email}
              onChange={(event) => formData.set(email.name, event.target.value)}
              //success={emailV.length > 0 && !errors.email}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={password.type}
              label={password.label}
              name={password.name}
              value={password.value}
              placeholder={password.placeholder}
              error={errors.password && touched.password}
              //success={passwordV.length > 0 && !errors.password}
              inputProps={{ autoComplete: "" }}
              onChange={(event) =>
                formData.set(password.name, event.target.value)
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={repeatPassword.type}
              label={repeatPassword.label}
              name={repeatPassword.name}
              value={repeatPassword.value}
              placeholder={repeatPassword.placeholder}
              error={errors.repeatPassword && touched.repeatPassword}
              //success={repeatPasswordV.length > 0 && !errors.repeatPassword}
              inputProps={{ autoComplete: "" }}
              onChange={(event) =>
                formData.set(repeatPassword.name, event.target.value)
              }
            />
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
