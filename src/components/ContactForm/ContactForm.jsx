import { Field, Form, Formik, ErrorMessage } from "formik";

import { useId } from "react";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contacts/operations";
import createContactSchema from "../../utils/validationSchema";
import { CustomTextField } from "../sharedMui";

const initialValues = {
  name: "",
  number: "",
};
const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();
  const handleSubmit = ({ name, number }, actions) => {
    dispatch(addContact({ name, number }));

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={createContactSchema({
        isNameRequired: true,
        isNumberRequired: true,
      })}
    >
      {({ errors, touched }) => (
        <Form className={s.form}>
          <CustomTextField
            id={nameFieldId}
            name="name"
            label="Name"
            type="name"
            error={Boolean(errors.name && touched.name)}
          />

          <label className={s.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={s.field}
            id={numberFieldId}
            type="tel"
            name="number"
          />
          <ErrorMessage className={s.error} name="number" component="span" />
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
