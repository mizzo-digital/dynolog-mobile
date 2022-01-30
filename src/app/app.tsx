import React from 'react';

import { AppProviders } from './providers';
import { Routes } from './routes';

export function App() {
  return (
    <AppProviders>
      <Routes />
    </AppProviders>
  );
}
