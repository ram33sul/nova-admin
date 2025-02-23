import { InputErrors } from "../types/general";
import { UserCredentials } from "../types/user";
import { emailRegex } from "./regex";

export const validateUserCredentials = ({
  email,
  password,
  confirmPassword,
}: UserCredentials & { confirmPassword?: string }) => {
  const errors: InputErrors = {};
  if (!(email && emailRegex.test(email))) {
    errors.email = "Email is invalid";
  }
  if (password.length < 6) {
    errors.password = "Password must have atleast 6 letters";
  }
  if (confirmPassword !== undefined && password !== confirmPassword) {
    errors.confirmPassword = "Password doesn't match";
  }
  const hasErrors = !!Object.keys(errors).length;
  return {
    hasErrors,
    errors,
  };
};
