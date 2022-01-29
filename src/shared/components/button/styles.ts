import styled, { css, DefaultTheme } from 'styled-components/native';
import { Text } from '..';

const makeBackgroundButton = (theme: DefaultTheme, disabled: boolean) => {
  if (disabled) {
    return theme.colors.buttons.solid.primary.disabled;
  }

  return theme.colors.buttons.solid.primary.enabled;
};

type ContainerProps = {
  disabled: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ theme, disabled }) => css`
    width: 100%;
    height: 56px;

    justify-content: center;
    align-items: center;

    background: ${makeBackgroundButton(theme, disabled)};
    border-radius: ${theme.radius.md};
  `}
`;

export const Label = styled(Text).attrs(() => ({
  size: 'sm',
  font: 'button',
  weight: 'semibold',
}))``;
