import React, { PropsWithChildren } from 'react';
import { ViewProps, StatusBar, SafeAreaView } from 'react-native';

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

      <SafeAreaView>
        <S.Content {...rest}>{children}</S.Content>
      </SafeAreaView>
    </S.Container>
  );
}
