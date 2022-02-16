import React from 'react';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { useAuth } from '../../features/auth';

export function Routes() {
  const { isLogged } = useAuth();

  return isLogged ? <AppRoutes /> : <AuthRoutes />;
}
