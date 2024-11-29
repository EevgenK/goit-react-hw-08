import { Field, Form, Formik, ErrorMessage } from "formik";

import { useId } from "react";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contacts/operations";
import createContactSchema from "../../utils/validationSchema";

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
      <Form className={s.form}>
        <label className={s.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field className={s.field} id={nameFieldId} type="text" name="name" />
        <ErrorMessage className={s.error} name="name" component="span" />
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
    </Formik>
  );
};

export default ContactForm;
