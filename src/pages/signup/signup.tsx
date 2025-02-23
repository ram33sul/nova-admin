import { ButtonStyleType } from "../../components/button/button.d";
import Button from "../../components/button/button.component";
import Input from "../../components/input/input.component";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { Utils } from "./signup.util";
import { InputErrors } from "../../types/general.d";
import { useDispatch } from "react-redux";
import { routePaths } from "../../Routes";

export default function Signup() {
  const [submitLoading, setSubmitLoading] = useState(false);
  const [errors, setErrors] = useState<InputErrors>({});

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate(routePaths.LOGIN);
  };

  const utils = useMemo(
    () => new Utils(setErrors, dispatch, setSubmitLoading),
    []
  );

  return (
    <div className="p-8 shadow-[0px_0px_30px_rgba(128,128,128,0.5)] max-w-[500px] m-auto mt-8 rounded-3xl">
      <div className="text-center">SIGNUP</div>
      <form onSubmit={utils.handleSubmit} className="flex flex-col gap-4 mt-4">
        <Input
          name="email"
          label="Email"
          error={errors.email}
          onChange={utils.onInputChange}
        />
        <Input
          name="password"
          label="Password"
          type="password"
          error={errors.password}
          onChange={utils.onInputChange}
        />
        <Input
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          error={errors.confirmPassword}
          onChange={utils.onInputChange}
        />
        <Button loading={submitLoading} className="w-full p-2">
          Submit
        </Button>
        <div className="text-center">or</div>
        <Button
          onClick={navigateToLogin}
          styletype={ButtonStyleType.NORMAL}
          className="w-full p-2"
        >
          Login To Account
        </Button>
      </form>
    </div>
  );
}
