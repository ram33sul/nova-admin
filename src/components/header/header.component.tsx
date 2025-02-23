import { useDispatch, useSelector } from "react-redux";
import Logo from "../logo/logo.component";
import { RootState } from "../../store/store";
import Button from "../button/button.component";
import { ButtonStyleType } from "../button/button.d";
import { useMemo, useState } from "react";
import { Utils } from "./header.util";

export default function Header() {
  const [buttonLoading, setButtonLoading] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  const utils = useMemo(() => new Utils(setButtonLoading, dispatch), []);

  return (
    <header className="p-4 flex justify-between border-b-[1px] border-gray-500/25">
      <Logo />
      {user ? (
        <Button
          loading={buttonLoading}
          styletype={ButtonStyleType.NORMAL}
          onClick={utils.handleLogout}
        >
          Logout
        </Button>
      ) : null}
    </header>
  );
}
