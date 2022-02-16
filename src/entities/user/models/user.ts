export type User = {
  id: string;
  name: string;
  email: string;
  roles: string[];
  session: {
    access_token: string;
    expires_in: string;
    refresh_token: string;
    token_type: string;
  };
};
