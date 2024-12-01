import { Box } from "@mui/material";
import LoginForm from "../../components/LoginForm/LoginForm";
import s from "./LoginPage.module.css";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import FormWrap from "../../components/sharedMui/FormWrap/FormWrap";

const LoginPage = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100vw",
        height: "100vh",
        p: 2,
        border: "1px dashed grey",
        backgroundColor: "var(--main--bg-color)",
      }}
    >
      <div className="container">
        <FormWrap type="login" title="Sign In">
          <LoginForm />
          <p className={s.invite}>Don't have an account yet?</p>
          <Link className={s.link} to="/register">
            Go to Sign up
          </Link>
        </FormWrap>
      </div>
    </Box>
  );
};

export default LoginPage;
