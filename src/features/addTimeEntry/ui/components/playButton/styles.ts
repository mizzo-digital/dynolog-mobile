import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;

    align-items: center;
    justify-content: center;

    border-radius: ${theme.radius.full};
    background-color: rgba(255, 255, 255, 0.2);
  `}
`;
