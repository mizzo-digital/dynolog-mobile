import React from 'react';

export type ButtonProps = React.PropsWithChildren<{
  onPress?(): void;
  isLoading?: boolean;
  disabled?: boolean;
}>;
