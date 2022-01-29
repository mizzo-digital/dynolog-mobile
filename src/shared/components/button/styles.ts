import styled, { css, DefaultTheme } from 'styled-components/native';
import { Text } from '..';

const makeBackgroundButton = (
  theme: DefaultTheme,
  isLoading: boolean,
  disabled: boolean,
) => {
  if (isLoading) {
    return theme.colors.buttons.solid.primary.loading;
  }

  if (disabled) {
    return theme.colors.buttons.solid.primary.disabled;
  }

  return theme.colors.buttons.solid.primary.enabled;
};

type ContainerProps = {
  disabled: boolean;
  isLoading: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ theme, disabled, isLoading }) => css`
    width: 100%;
    height: 56px;

    justify-content: center;
    align-items: center;

    background: ${makeBackgroundButton(theme, isLoading, disabled)};
    border-radius: ${theme.radius.md};
  `}
`;

export const Label = styled(Text).attrs(() => ({
  size: 'sm',
  font: 'button',
  weight: 'semibold',
}))``;
