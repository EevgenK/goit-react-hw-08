import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { ErrorMessage, Field } from "formik";

const CustomPasswordField = ({ id, error, name, label, valid }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  return (
    <Field name={name}>
      {({ field }) => (
        <FormControl
          color="secondary"
          error={error}
          fullWidth
          sx={{ m: 1 }}
          variant="outlined"
        >
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <OutlinedInput
            {...field}
            id={id}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  sx={{
                    color: valid ? "green" : "var(--second-text-color)",
                    "&:hover": {
                      color: "var(--second-color)",
                    },
                    // "&.Mui-focused": {
                    //   color: "var(--second-color)",
                    // },
                  }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={label}
            sx={{
              "& .MuiInputBase-input": {
                color: "var(--second-text-color)",
              },

              "&.MuiOutlinedInput-root": {
                backgroundColor: valid
                  ? "var(--complete-input-color)"
                  : "var(--main-color)",

                "& fieldset": {
                  borderColor: "var(--input-color)",
                },
                "&:hover fieldset": {
                  borderColor: "var(--second-color)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var(--second-color)",
                },
                "&:focus-within .MuiIconButton-root": {
                  color: "var(--second-color)",
                },
              },
            }}
          />
          <FormHelperText sx={{ color: "red" }}>
            <ErrorMessage name={name} />
          </FormHelperText>
        </FormControl>
      )}
    </Field>
  );
};

export default CustomPasswordField;
