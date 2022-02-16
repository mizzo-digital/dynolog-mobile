import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

const WIDTH_SCREEN = Dimensions.get('screen').width;

export const Container = styled.View`
  ${({ theme }) => css`
    height: 80px;
    width: ${WIDTH_SCREEN}px;

    justify-content: center;

    margin-left: -${theme.spacing[6]};
    padding: 0 ${theme.spacing[8]};

    background: ${theme.colors.shapes.quaternary};
  `}
`;

export const AddTimeEntry = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PlayButton = styled.TouchableOpacity``;
