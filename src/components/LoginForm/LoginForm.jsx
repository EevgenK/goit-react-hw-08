import { Form, Formik } from "formik";
import { useId, useRef } from "react";
import createContactSchema from "../../utils/validationSchema";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Button } from "@mui/material";
import { CustomPasswordField, CustomTextField } from "../sharedMui/index.js";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

import s from "./LoginForm.module.css";

import { useResetForm } from "../../utils/hooks/useResetForm.js";
const initialValues = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  const actionsRef = useRef(null);
  const handleSubmit = ({ email, password }, actions) => {
    actionsRef.current = actions;
    dispatch(
      login({
        email,
        password,
      })
    );
  };

  useResetForm(actionsRef);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
      validationSchema={createContactSchema({
        isEmailRequired: true,
        isPasswordRequired: true,
      })}
      validateOnBlur={false}
    >
      {({ errors, touched, values }) => (
        <Form className={s.form}>
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
            className={s.button}
            startIcon={<VpnKeyIcon />}
            type="submit"
            variant="contained"
            color="secondary"
          >
            Log in
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
/*

*/

/*
<div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          error={formik.touched.email && Boolean(formik.errors.email)}
          id={error ? "email" : "outlined-error"}
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          error={formik.touched.password && Boolean(formik.errors.password)}
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
*/
