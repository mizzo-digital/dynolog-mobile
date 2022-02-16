import { User } from '../models';

export type UserStore = {
  user: User | null;
  updateUser(newUser: User): void;
  removeUser(): void;
};
