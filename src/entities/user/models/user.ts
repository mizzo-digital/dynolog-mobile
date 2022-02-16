export type User = {
  id: string;
  name: string;
  email: string;
  roles: string[];
  session: {
    accessToken: string;
    expiresIn: string;
    refreshToken: string;
    tokenType: string;
  };
};
