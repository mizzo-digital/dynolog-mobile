import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import * as S from './styles';

type Props = {
  style?: StyleProp<ViewStyle>;
};

export function Divider({ style }: Props) {
  return <S.Container style={style} />;
}
