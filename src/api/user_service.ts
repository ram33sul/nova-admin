import { User, UserCredentials, UserWithTokens } from "../types/user";
import { doApi } from "./do_api";

export const postLogin = async (data: UserCredentials) => {
  const url = "/unauthorized/user/login";
  const method = "POST";
  return await doApi<UserWithTokens>({
    method,
    url,
    data,
  });
};

export const postRegister = async (data: UserCredentials) => {
  const url = "/unauthorized/user/register";
  const method = "POST";
  return await doApi<UserWithTokens>({
    method,
    url,
    data,
  });
};

export const postLogout = async () => {
  const url = "/authorized/user/logout";
  const method = "POST";
  return await doApi<{ isLoggedOut: boolean }>({
    method,
    url,
  });
};

export const getMe = async () => {
  const url = "/authorized/user/me?role=ADMIN";
  const method = "GET";
  return await doApi<User>({
    method,
    url,
  });
};
