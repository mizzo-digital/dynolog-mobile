import styled, { css } from 'styled-components/native';

import { Sizes, Fonts, Colors, Weights } from '.';

type TextProps = {
  size: Sizes;
  font: Fonts;
  color: Colors;
  weight: Weights;
};

export const Container = styled.Text<TextProps>`
  ${({ size, font, color, weight, theme }) => css`
    font-family: ${theme.typography.fonts[font]};
    font-size: ${theme.typography.fontSizes[size]};
    font-weight: ${theme.typography.fontWeights[weight]};
    line-height: ${theme.typography.lineHeights[size]};
    color: ${theme.colors.texts[color]};
  `}
`;
