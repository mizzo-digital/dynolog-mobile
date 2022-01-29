import React, { PropsWithChildren } from 'react';
import { TextProps } from 'react-native';

import { Theme } from '../../styles/themes/types';

import * as S from './styles';

export type Sizes = keyof Theme['typography']['fontSizes'];
export type Fonts = keyof Theme['typography']['fonts'];
export type Colors = Exclude<keyof Theme['colors']['texts'], 'headings'>;
export type Weights = keyof Theme['typography']['fontWeights'];

type Props = TextProps & {
  size: Sizes;
  font: Fonts;
  color?: Colors;
  weight?: Weights;
};

export function Text({
  size,
  font,
  color = 'body',
  weight = 'regular',
  children,
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <S.Container
      color={color}
      size={size}
      font={font}
      weight={weight}
      {...rest}>
      {children}
    </S.Container>
  );
}
