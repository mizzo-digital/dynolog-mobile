export type Credentials = {
  email: string;
  password: string;
};

export type Session = {
  user: {
    id: string;
    name: string;
    email: string;
    roles: string[];
  };
  accessToken: string;
  expiresIn: string;
  refreshToken: string;
  tokenType: string;
};
