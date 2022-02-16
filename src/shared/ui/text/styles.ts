import styled, { css } from 'styled-components/native';

import { Sizes, Fonts, Colors } from '.';

type TextProps = {
  size: Sizes;
  font: Fonts;
  color: Colors;
};

export const Container = styled.Text<TextProps>`
  ${({ size, font, color, theme }) => css`
    font-family: ${theme.typography.complementary.fonts[font]};
    font-size: ${theme.typography.complementary.fontSizes[size]};
    line-height: ${theme.typography.complementary.lineHeights[size]};
    color: ${theme.colors.texts.complementary[color]};
  `}
`;
