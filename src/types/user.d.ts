export interface User {
  _id: string;
  email: string;
}

export interface UserWithTokens {
  user: User;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface UserCredentials {
  email: string;
  password: string;
  adminKey?: string;
}
