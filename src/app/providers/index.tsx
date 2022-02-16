import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { ToastProvider } from '../../shared/providers';
import { ThemeProvider } from '../../features/theme';

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
