import { Box } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import s from "./FormWrap.module.css";
const FormWrap = ({ children, title, type }) => {
  return (
    <Box className={s.login} component="div">
      <Box className={s.wrap} component="div">
        {type === "login" && <LoginIcon fontSize="large" color="secondary" />}
        {type === "register" && (
          <AppRegistrationIcon fontSize="large" color="secondary" />
        )}
        <h1 className={s.title}>{title}</h1>
      </Box>
      {children}
    </Box>
  );
};

export default FormWrap;
