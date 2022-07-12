// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// formik components
import { ErrorMessage, Field } from "formik";

// Material Dashboard 2 PRO React components
// import MDBox from "../../../../../../components/MDBox/index";
// import MDTypography from "../../../../../../components/MDTypography/index";
// import MDInput from "../../../../../../components/MDInput/index";
import {
  Box,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function FormField({
  valuesInput,
  handleClickShowPassword,
  handleMouseDownPassword,
  label,
  name,
  endadornment,
  ...rest
}) {
  return (
    <Box mb={1.5} style={{ position: "relative" }}>
      {endadornment ? (
        <InputAdornment position="end">
          <IconButton
            style={{
              position: "absolute",
              zIndex: 5,
              right: "0",
              marginTop: "60px",
            }}
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {valuesInput.type ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      ) : (
        <></>
      )}
      <Field
        {...rest}
        name={name}
        as={TextField}
        variant="standard"
        label={label}
        fullWidth
      />

      <Box mt={0.75}>
        <Typography
          component="div"
          variant="caption"
          color="error"
          fontWeight="regular"
        >
          <ErrorMessage name={name} />
        </Typography>
      </Box>
    </Box>
  );
}

// typechecking props for FormField
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormField;
