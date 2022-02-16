import React, { PropsWithChildren } from 'react';
import { TextProps } from 'react-native';

import { Theme } from '../../styles/themes/types';

import * as S from './styles';

export type Sizes = keyof Theme['typography']['complementary']['fontSizes'];
export type Fonts = keyof Theme['typography']['complementary']['fonts'];
export type Colors = keyof Theme['colors']['texts']['complementary'];

type Props = TextProps & {
  size?: Sizes;
  font?: Fonts;
  color?: Colors;
};

export function Text({
  size = 'sm',
  font = 'body-primary-regular',
  color = 'body',
  children,
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <S.Container color={color} size={size} font={font} {...rest}>
      {children}
    </S.Container>
  );
}
