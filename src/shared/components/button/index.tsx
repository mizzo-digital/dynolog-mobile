import React, { PropsWithChildren } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Spinner } from '../spinner';

import * as S from './styles';

type Props = TouchableOpacityProps & {
  isLoading?: boolean;
};

export function Button({
  isLoading,
  children,
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <S.Container {...rest}>
      {isLoading && <Spinner />}

      {!isLoading && <S.Label>{children}</S.Label>}
    </S.Container>
  );
}
