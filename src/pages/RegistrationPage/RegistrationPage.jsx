import { Box } from "@mui/material";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import FormWrap from "../../components/sharedMui/FormWrap/FormWrap";

const RegistrationPage = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100vw",
        height: "100%",
        p: 2,
        border: "1px dashed grey",
        backgroundColor: "var(--main--bg-color)",
      }}
    >
      <div className="container">
        <FormWrap type="register" title="Sign Up">
          <RegistrationForm />
        </FormWrap>
      </div>
    </Box>
  );
};

export default RegistrationPage;
