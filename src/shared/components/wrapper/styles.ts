import styled, { css } from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  useAngle: true,
  angle: 220,
  locations: [0, 0.2255, 0.3409],
  colors: [
    theme.colors.backgrounds.tertiary,
    theme.colors.backgrounds.secondary,
    theme.colors.backgrounds.primary,
  ],
}))`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    padding: 0 ${theme.spacing[6]};
  `}
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
`;
