import styled, { css } from 'styled-components/native';

import { Sizes, Colors, Fonts } from '.';

type TextProps = {
  size: Sizes;
  color: Colors;
  font: Fonts;
};

export const Container = styled.Text<TextProps>`
  ${({ font, size, color, theme }) => css`
    font-family: ${theme.typography.heading.fonts[font]};
    font-size: ${theme.typography.heading.fontSizes[size]};
    line-height: ${theme.typography.heading.lineHeights[size]};

    color: ${theme.colors.texts.heading[color]};
  `}
`;
