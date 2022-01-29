/* eslint-disable @typescript-eslint/no-explicit-any */
import create from 'zustand';
import { persist } from 'zustand/middleware';

import {
  deleteStorage,
  loadStorage,
  setStorage,
} from '../storage/async-storage';

type ReturnType<Store, ActionsType> = [Store, ActionsType];
type Actions = { [key: string]: (...args: any[]) => any };

export const createStoreWithPersist = <
  StoreDataType extends object,
  ActionsType extends Actions,
>(
  key: string,
  storeData: StoreDataType,
  actions: ActionsType,
) => {
  const store = create(
    persist(() => storeData, {
      name: key,
      getStorage: () => ({
        getItem: name => loadStorage({ key: name }),
        setItem: (name, value) => setStorage({ key: name, value }),
        removeItem: name => deleteStorage({ key: name }),
      }),
    }),
  );

  const storeActions = () => actions;

  return [store, storeActions] as ReturnType<typeof store, typeof storeActions>;
};
