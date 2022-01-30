import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { ToastProvider, ThemeProvider } from '../../shared/providers';

type Props = {
  children: ReactNode;
};

export function AppProviders({ children }: Props) {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <ToastProvider>{children}</ToastProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
