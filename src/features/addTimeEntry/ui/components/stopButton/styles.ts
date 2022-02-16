import styled, { css } from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  position: relative;
`;

export const StopButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;

    align-items: center;
    justify-content: center;

    position: absolute;

    border-radius: ${theme.radius.full};
    background-color: rgba(255, 255, 255, 0.22);
  `}
`;

export const PulseWrap = styled(Animated.View)`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;

    border-radius: ${theme.radius.full};
    background-color: rgba(255, 255, 255, 0.22);
  `}
`;
