import styled, { css } from 'styled-components/native';

import { Text } from '..';

export const BUTTON_WIDTH = '100%';
export const BUTTON_RADIUS = 12;

export const Container = styled.View`
  width: ${BUTTON_WIDTH};
  height: 56px;

  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: ${BUTTON_WIDTH};
    height: 100%;

    justify-content: center;
    align-items: center;

    border-radius: ${BUTTON_RADIUS}px;
    background-color: ${theme.colors.buttons.solid.primary.enabled};
  `}
`;

export const Label = styled(Text).attrs(() => ({
  size: 'sm',
  font: 'button-primary-semibold',
}))``;
