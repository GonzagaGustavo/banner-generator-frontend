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
  const { formField, values, errors, touched, setFieldValue } = formData;
  const { nome, role, email, can_create } =
    formField;
  const {
    nome: nomeV,
    role: roleV,
    email: emailV,
    can_create: can_createV,
  } = values;

const handleRole = (e) => {
  setFieldValue(role.name, e.target.value)
}

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
              type={can_create.type}
              label={can_create.label}
              name={can_create.name}
              value={can_createV}
              placeholder={can_create.placeholder}
              error={errors.can_create && touched.can_create}
              //success={lastNameV.length > 0 && !errors.lastName}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Nivel da conta
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={handleRole}
              >
                <FormControlLabel
                  value={2}
                  control={<Radio />}
                  label="Membro"
                />
                <FormControlLabel
                  value={1}
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
              value={emailV}
              placeholder={email.placeholder}
              error={errors.email && touched.email}
              //success={emailV.length > 0 && !errors.email}
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
