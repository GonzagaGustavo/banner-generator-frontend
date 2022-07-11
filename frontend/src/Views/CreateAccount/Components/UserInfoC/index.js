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
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
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
              type={password.type}
              label={password.label}
              name={password.name}
              value={passwordV}
              placeholder={password.placeholder}
              error={errors.password && touched.password}
              success={passwordV.length > 0 && !errors.password}
              inputProps={{ autoComplete: "" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={repeatPassword.type}
              label={repeatPassword.label}
              name={repeatPassword.name}
              value={repeatPasswordV}
              placeholder={repeatPassword.placeholder}
              error={errors.repeatPassword && touched.repeatPassword}
              success={repeatPasswordV.length > 0 && !errors.repeatPassword}
              inputProps={{ autoComplete: "" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Checkbox
              onChange={(e) => setFieldValue(checked.name, e.target.checked)}
            />
            <Box mt={0.75}>
              <Typography
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
