import styled, { css } from 'styled-components/native';
import { Text } from '..';

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: 56px;

    justify-content: center;
    align-items: center;

    background: ${theme.colors.buttons.solid.primary.enabled};
    border-radius: ${theme.radius.md};
  `}
`;

export const Label = styled(Text).attrs(() => ({
  size: 'sm',
  font: 'button',
  weight: 'semibold',
}))``;
