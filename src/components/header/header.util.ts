import { Dispatch, SetStateAction } from "react";
import { postLogout } from "../../api/user_service";
import toast from "react-hot-toast";
import { UnknownAction } from "redux";
import { setUser } from "../../store/user/actions";

export class Utils {
  constructor(
    public setButtonLoading: Dispatch<SetStateAction<boolean>>,
    public dispatch: Dispatch<UnknownAction>
  ) {}

  handleLogout = async () => {
    try {
      this.setButtonLoading(true);
      const [response, error] = await postLogout();
      if (error || !response?.isLoggedOut) {
        return toast.error(error || "Error while logging out");
      }
      toast.success("Successfully logged out");
      this.dispatch(setUser(null));
    } finally {
      this.setButtonLoading(false);
    }
  };
}
