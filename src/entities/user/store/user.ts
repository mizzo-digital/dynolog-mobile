import create from 'zustand';

import { UserStore } from './types';

export const useUserStore = create<UserStore>(setStore => ({
  user: null,

  updateUser: newUser => {
    setStore(prevStore => ({
      ...prevStore,
      user: newUser,
    }));
  },

  removeUser: () => {
    setStore(prevStore => ({
      ...prevStore,
      user: null,
    }));
  },
}));
