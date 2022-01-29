import React, { PropsWithChildren } from 'react';
import { TextProps } from 'react-native';

import { Theme } from '../../styles/themes';

import * as S from './styles';

export type Sizes = keyof Theme['typography']['heading']['fontSizes'];
export type Colors = keyof Theme['colors']['texts']['heading'];
export type Fonts = keyof Theme['typography']['heading']['fonts'];

type Props = TextProps & {
  size?: Sizes;
  font?: Fonts;
  color?: Colors;
};

export function Heading({
  size = 'md',
  color = 'primary',
  font = 'primary-medium',
  children,
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <S.Container font={font} color={color} size={size} {...rest}>
      {children}
    </S.Container>
  );
}
