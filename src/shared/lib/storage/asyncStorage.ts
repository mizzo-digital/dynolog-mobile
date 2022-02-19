import AsyncStorage from '@react-native-async-storage/async-storage';

type LoadStorageProps = {
  key: string;
};

type SetStorageProps<T> = {
  key: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  value: Exclude<T, Function>;
};

type DeleteStorageProps = {
  key: string;
};

export const loadStorage = async <StoragedType>({
  key,
}: LoadStorageProps): Promise<StoragedType | null> => {
  const storagedData = await AsyncStorage.getItem(key);

  if (!storagedData) return null;

  return JSON.parse(storagedData);
};

export const setStorage = async <T>({
  key,
  value,
}: SetStorageProps<T>): Promise<void> => {
  const valueToString = JSON.stringify(value);

  await AsyncStorage.setItem(key, valueToString);
};

export const clearAllStorage = async (): Promise<void> => {
  await AsyncStorage.clear();
};

export const deleteStorage = async ({
  key,
}: DeleteStorageProps): Promise<void> => {
  await AsyncStorage.removeItem(key);
};
