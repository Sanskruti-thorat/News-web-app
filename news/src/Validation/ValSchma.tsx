import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}/;

export const validationSchema = Yup.object().shape({
  username: Yup.string().required("Please enter your username."),
  name: Yup.string().required("Please enter your name."),
  email: Yup.string()
    .trim()
    .required("Email address is required.")
    .matches(
      emailRegex,
      "Please enter a valid email."
    ),
  password: Yup.string()
    .min(5, "Password should be more than 5 characters.")
    .matches(
      passwordRules,
      "Please create a stronger password."
    )
    .required("Please enter password."),
  role: Yup.string().required("Please enter a role."),
});

