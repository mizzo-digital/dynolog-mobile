import React from 'react';
import { ActivityIndicator } from 'react-native';

import * as S from './styles';

export function Spinner() {
  return (
    <S.Container>
      <ActivityIndicator size="small" color="#fff" />
    </S.Container>
  );
}
