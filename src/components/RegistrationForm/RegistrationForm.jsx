import { Form, Formik } from "formik";
import s from "./RegistrationForm.module.css";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { useId } from "react";
import createContactSchema from "../../utils/validationSchema";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { CustomPasswordField, CustomTextField } from "../sharedMui";
import { Button } from "@mui/material";
const initialValues = {
  name: "",
  email: "",
  password: "",
};
const RegistrationForm = () => {
  const nameFieldId = useId();
  const passwordFieldId = useId();
  const emailFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = ({ name, password, email }, actions) => {
    dispatch(
      register({
        name,
        password,
        email,
      })
    );
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={createContactSchema({
        isEmailRequired: true,
        isNameRequired: true,
        isPasswordRequired: true,
      })}
      validateOnBlur={false}
    >
      {({ errors, touched, values }) => (
        <Form className={s.form}>
          <CustomTextField
            id={nameFieldId}
            name="name"
            label="Name"
            type="text"
            error={Boolean(errors.email && touched.email)}
            valid={touched.email && !errors.email && values.email}
          />

          <CustomTextField
            id={emailFieldId}
            name="email"
            label="Email"
            type="email"
            error={Boolean(errors.email && touched.email)}
            valid={touched.email && !errors.email && values.email}
          />

          <CustomPasswordField
            id={passwordFieldId}
            name="password"
            label="Password"
            type="password"
            error={Boolean(errors.password && touched.password)}
            valid={touched.email && !errors.email && values.email}
          />

          <Button
            className={s.btn}
            startIcon={<PersonAddAltOutlinedIcon />}
            type="submit"
            variant="contained"
            color="secondary"
          >
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
