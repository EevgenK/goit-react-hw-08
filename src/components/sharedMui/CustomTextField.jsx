import { InputAdornment, TextField } from "@mui/material";
import { Field, ErrorMessage } from "formik";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const CustomTextField = ({ id, error, name, label, type, valid }) => {
  return (
    <Field
      autoComplete="off"
      color="secondary"
      error={error}
      id={id}
      type={type}
      name={name}
      label={label}
      as={TextField}
      fullWidth
      variant="outlined"
      margin="normal"
      helperText={<ErrorMessage name={name} component="span" />}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              {valid && <CheckRoundedIcon color="success" />}
            </InputAdornment>
          ),
        },
        // htmlInput: CustomHtmlInputProps,
        // select: CustomSelectProps,
        inputLabel: {
          sx: {
            color: "var(--second-text-color)",
            // "&.Mui-focused": {
            //   color: "var(--second-color)",
            // },
          },
        },
        formHelperText: {
          sx: {
            color: "red",
          },
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          backgroundColor: valid
            ? "var(--complete-input-color)"
            : "var(--main-color)",
          color: "var(--second-text-color)",
          "& fieldset": {
            borderColor: "var(--input-color)",
          },
          "&:hover fieldset": {
            borderColor: "var(--second-color)",
          },
          "&.Mui-focused fieldset": {
            borderColor: "var(--second-color)",
          },
        },
      }}
    />
  );
};
export default CustomTextField;
