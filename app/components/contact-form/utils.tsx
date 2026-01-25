import { FormState, FormErrors } from "./ContactForm.types";

export const validate = (values: FormState): FormErrors => {
  const errors: FormErrors = {};
  if (!values.name.trim()) {
    errors.name = "Name is required";
  }
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.message.trim()) {
    errors.message = "Message is required";
  }
  return errors;
};