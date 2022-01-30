import styled, { css } from 'styled-components/native';
import { Heading } from '..';

export const Container = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.spacing[13]};
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: ${theme.spacing[7]};
  `}
`;

export const Greetings = styled.View``;

export const GreetingsText = styled(Heading)`
  margin-bottom: -4px;
`;

export const GreetingsUser = styled(Heading)``;
