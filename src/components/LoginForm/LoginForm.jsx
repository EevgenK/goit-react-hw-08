import { Form, Formik, useFormik } from "formik";
import { useId } from "react";
import createContactSchema from "../../utils/validationSchema";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Button } from "@mui/material";
import { CustomPasswordField, CustomTextField } from "../sharedMui/index.js";
import { TextField } from "@mui/material";
import s from "./LoginForm.module.css";
const initialValues = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();
  const handleSubmit = ({ email, password }, actions) => {
    console.log(email, password);
    dispatch(
      login({
        email,
        password,
      })
    );
    actions.resetForm();
  };
  // const formik = useFormik({
  //   initialValues,
  //   validationSchema: createContactSchema({
  //     isEmailRequired: true,
  //     isPasswordRequired: true,
  //   }),
  //   onSubmit: (values, actions) => handleSubmit(values, actions),
  // });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
      validationSchema={createContactSchema({
        isEmailRequired: true,
        isPasswordRequired: true,
      })}
    >
      {({ errors, touched }) => (
        <Form className={s.form}>
          <CustomTextField
            id={emailFieldId}
            name="email"
            label="Email"
            type="email"
            error={Boolean(errors.email && touched.email)}
          />
          <CustomPasswordField
            id={passwordFieldId}
            name="password"
            label="Password"
            type="password"
            error={Boolean(errors.password && touched.password)}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "var(--accent-color)",
              color: "white",
              "&:hover": { backgroundColor: "var(--second-color)" },
            }}
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
