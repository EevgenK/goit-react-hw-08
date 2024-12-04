import { Form, Formik } from "formik";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import { useId } from "react";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { addContact, editContact } from "../../redux/contacts/operations";
import createContactSchema from "../../utils/validationSchema";
import { CustomTextField } from "../sharedMui";
import { isObjectsChanged } from "../../utils/checkObjects";
import { closeModal } from "../../redux/modal/slice";

const initialValues = {
  name: "",
  number: "",
};
const ContactForm = ({ type, change }) => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();
  const handleSubmit = ({ name, number }, actions) => {
    if (type === "edit") {
      const editData = { ...change, name, number };
      dispatch(editContact(editData));
      dispatch(closeModal());
      return;
    }
    dispatch(addContact({ name, number }));

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={change ?? initialValues}
      onSubmit={handleSubmit}
      validationSchema={createContactSchema({
        isNameRequired: true,
        isNumberRequired: true,
      })}
      validateOnBlur={false}
    >
      {({ errors, touched, values, initialValues }) => (
        <Form className={s.form}>
          <CustomTextField
            id={nameFieldId}
            name="name"
            label={change ? "Edit name" : "Enter new name"}
            type="name"
            error={Boolean(errors.name && touched.name)}
            valid={touched.name && !errors.name && values.name}
          />

          <CustomTextField
            id={numberFieldId}
            name="number"
            label={change ? "Edit number" : "Enter new number"}
            type="tel"
            error={Boolean(errors.name && touched.name)}
            valid={touched.number && !errors.number && values.number}
          />
          <Button
            className={s.button}
            startIcon={<AddReactionIcon fontSize="large" />}
            type="submit"
            variant="outlined"
            color="secondary"
            disabled={change ? isObjectsChanged(initialValues, values) : false}
          >
            {type === "edit" ? "Edit contact" : "Add contact"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
