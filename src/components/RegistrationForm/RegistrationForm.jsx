import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./RegistrationForm.module.css";

import { useId } from "react";
import createContactSchema from "../../utils/validationSchema";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
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
    >
      <Form className={s.form}>
        <label className={s.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field className={s.field} id={nameFieldId} type="text" name="name" />
        <ErrorMessage className={s.error} name="name" component="span" />
        <label className={s.label} htmlFor={emailFieldId}>
          Email
        </label>
        <Field
          className={s.field}
          id={emailFieldId}
          type="email"
          name="email"
        />
        <ErrorMessage className={s.error} name="email" component="span" />
        <label className={s.label} htmlFor={passwordFieldId}>
          Password
        </label>
        <Field
          className={s.field}
          id={passwordFieldId}
          type="password"
          name="password"
        />
        <ErrorMessage className={s.error} name="password" component="span" />
        <button className={s.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
