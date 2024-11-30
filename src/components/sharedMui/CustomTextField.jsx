import { TextField } from "@mui/material";
import { Field, ErrorMessage } from "formik";

const CustomTextField = ({ id, error, name, label, type }) => {
  return (
    <Field
      error={error}
      id={id}
      type={type}
      name={name}
      as={TextField}
      fullWidth
      label={label}
      variant="outlined"
      margin="normal"
      helperText={<ErrorMessage name={name} component="span" />}
      InputLabelProps={{
        sx: {
          color: "var(--accent-color)",
          "&.Mui-focused": {
            color: "var(--second-color)",
          },
        },
      }}
      FormHelperTextProps={{
        sx: {
          color: "red",
        },
      }}
      InputProps={{
        sx: {
          "&.MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "var(--accent-color)",
            },
            "&:hover fieldset": {
              borderColor: "var(--second-color)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--second-color)",
            },
          },
        },
      }}
    />
  );
};
export default CustomTextField;
