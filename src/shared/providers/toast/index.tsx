import React, { ReactNode } from 'react';
import { ToastProvider as ToastProviderLib } from 'react-native-toast-notifications';

type Props = {
  children: ReactNode;
};

export function ToastProvider({ children }: Props) {
  return <ToastProviderLib>{children}</ToastProviderLib>;
}
