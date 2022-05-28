import * as yup from "yup";

const passwordRules = /^[a-zA-Z0-9_-]{6,12}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is a required field"),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: "Please enter a correct password" })
    .required("Password is a required field"),
});
