import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import createContactSchema from "../../utils/validationSchema";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const initialValues = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();
  const handleSubmit = ({ email, password }, actions) => {
    dispatch(
      login({
        email,
        password,
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
        isPasswordRequired: true,
      })}
    >
      <Form>
        <label htmlFor="emailFieldId">Email</label>
        <Field id={emailFieldId} type="email" name="email" />
        <ErrorMessage name="email" component="span" />
        <label htmlFor={passwordFieldId}>Password</label>
        <Field id={passwordFieldId} type="password" name="password" />
        <ErrorMessage name="password" component="span" />
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
