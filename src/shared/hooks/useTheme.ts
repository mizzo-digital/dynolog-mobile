import { useTheme as useThemeSyled } from 'styled-components';

export const useTheme = () => {
  const { ...themeProps } = useThemeSyled();
  return { ...themeProps };
};
