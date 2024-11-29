import * as Yup from "yup";
const validNumber = /^\d{3}-\d{3}-\d{4}$/;
const createContactSchema = (options = {}) => {
  const {
    isEmailRequired = false,
    isNameRequired = false,
    isNumberRequired = false,
    isPasswordRequired = false,
  } = options;
  const schema = {
    ...(isNameRequired && {
      name: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    }),
    ...(isNumberRequired && {
      number: Yup.string()
        .matches(
          validNumber,
          `The phone number must consist only of integer numbers and be in the following format: XXX-XXX-XXXX`
        )
        .required("Required"),
    }),
    ...(isEmailRequired && {
      email: Yup.string().email("Invalid email").required("Required"),
    }),
    ...(isPasswordRequired && {
      password: Yup.string()
        .min(7, "Too Short! At least 6 symbols are recommended")
        .max(20, "Too Long! Maximum 20 symbols are recommended")
        .matches(/[A-Z]/, "Password must contain at least one capital letter")
        .required("Required"),
    }),
  };

  return Yup.object().shape(schema);
};
export default createContactSchema;
