import { Action } from "redux";
import { SET_USER } from "./types";
import { User } from "../../types/user";

const initialState: {
  user: User | null;
  loading: boolean;
} = {
  user: null,
  loading: true,
};

interface UserAction extends Action {
  payload: User;
}

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
