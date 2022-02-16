/* eslint-disable @typescript-eslint/no-explicit-any */
import create from 'zustand';

type ReturnType<Store, ActionsType> = [Store, ActionsType];
type Actions = { [key: string]: (...args: any[]) => any };

export const createStore = <
  StoreDataType extends object,
  ActionsType extends Actions,
>(
  storeData: StoreDataType,
  actions: ActionsType,
) => {
  const store = create(() => storeData);

  const storeActions = () => actions;

  return [store, storeActions] as ReturnType<typeof store, typeof storeActions>;
};
