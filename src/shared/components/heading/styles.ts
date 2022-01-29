import styled, { css } from 'styled-components/native';

import { Sizes, Colors, Weights } from '.';

type TextProps = {
  size: Sizes;
  color: Colors;
  weight: Weights;
};

export const Container = styled.Text<TextProps>`
  ${({ size, color, weight, theme }) => css`
    font-family: ${theme.typography.fonts.heading};
    font-size: ${theme.typography.fontSizes[size]};
    font-weight: ${theme.typography.fontWeights[weight]};
    line-height: ${theme.typography.lineHeights[size]};

    color: ${theme.colors.texts.headings[color]};
  `}
`;
