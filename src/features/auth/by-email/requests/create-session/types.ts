export type Credentials = {
  email: string;
  password: string;
};

export type Session = {
  user: {
    id: number;
    name: string;
    email: string;
    roles: string[];
  };
  access_token: string;
  expires_in: string;
  refresh_token: string;
  token_type: string;
};
