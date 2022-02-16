import React, { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { darkTheme } from '../../../shared/styles/themes';

type Props = {
  children: ReactNode;
};

export function ThemeProvider({ children }: Props) {
  return (
    <StyledThemeProvider theme={darkTheme}>{children}</StyledThemeProvider>
  );
}
