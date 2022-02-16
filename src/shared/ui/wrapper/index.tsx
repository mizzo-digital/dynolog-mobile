import React, { PropsWithChildren } from 'react';
import { ViewProps, StatusBar } from 'react-native';

import * as S from './styles';

type Props = ViewProps;

export function Wrapper({ children, ...rest }: PropsWithChildren<Props>) {
  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <S.Content {...rest}>{children}</S.Content>
    </S.Container>
  );
}
