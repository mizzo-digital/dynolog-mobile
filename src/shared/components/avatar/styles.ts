import styled, { css } from 'styled-components/native';

import { Text } from '..';

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;

    align-items: center;
    justify-content: center;

    background: ${theme.colors.shapes.primary};
    border-radius: ${theme.radius.full};
  `}
`;

export const AvatarImage = styled.Image`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    border-radius: ${theme.radius.full}px;
  `}
`;

export const InitialsName = styled(Text).attrs(() => ({
  font: 'body-semibold',
}))``;
