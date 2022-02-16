import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 1px;

    background: ${theme.colors.shapes.tertiary};
  `}
`;
