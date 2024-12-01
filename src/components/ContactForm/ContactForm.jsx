import { Form, Formik } from "formik";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import { useId } from "react";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
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
      validateOnBlur={false}
    >
      {({ errors, touched, values }) => (
        <Form className={s.form}>
          <CustomTextField
            id={nameFieldId}
            name="name"
            label="Enter new name"
            type="name"
            error={Boolean(errors.name && touched.name)}
            valid={touched.email && !errors.email && values.email}
          />

          <CustomTextField
            id={numberFieldId}
            name="number"
            label="Enter new number"
            type="tel"
            error={Boolean(errors.name && touched.name)}
            valid={touched.email && !errors.email && values.email}
          />
          <Button
            className={s.button}
            startIcon={<AddReactionIcon fontSize="large" />}
            type="submit"
            variant="outlined"
            color="secondary"
          >
            Add contact
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
