import React, { PropsWithChildren } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Spinner } from '../spinner';

import * as S from './styles';

type Props = TouchableOpacityProps & {
  isLoading?: boolean;
  disabled?: boolean;
};

export function Button({
  isLoading,
  children,
  disabled = false,
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <S.Container disabled={isLoading || disabled} {...rest}>
      {isLoading && <Spinner />}

      {!isLoading && <S.Label>{children}</S.Label>}
    </S.Container>
  );
}
