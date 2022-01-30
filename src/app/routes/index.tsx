import React from 'react';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { useViewerStore } from '../../entities/viewer';

export function Routes() {
  const isAuthenticated = useViewerStore(store => store.session);

  return !isAuthenticated ? <AuthRoutes /> : <AppRoutes />;
}
