import React, { PropsWithChildren } from 'react';
import { TextProps } from 'react-native';

import { Theme } from '../../styles/themes/types';

import * as S from './styles';

export type Sizes = keyof Theme['typography']['fontSizes'];
export type Colors = keyof Theme['colors']['texts']['headings'];
export type Weights = keyof Theme['typography']['fontWeights'];

type Props = TextProps & {
  size: Sizes;
  color?: Colors;
  weight?: Weights;
};

export function Heading({
  size,
  color = 'primary',
  weight = 'medium',
  children,
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <S.Container color={color} size={size} weight={weight} {...rest}>
      {children}
    </S.Container>
  );
}
