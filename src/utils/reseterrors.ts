import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { InputErrors } from "../types/general";

export const resetErrors =
  (setErrors: Dispatch<SetStateAction<InputErrors>>) =>
  (e: ChangeEvent<HTMLInputElement>) => {
    setErrors((prev) => {
      return { ...prev, [e.target.name]: "" };
    });
  };
