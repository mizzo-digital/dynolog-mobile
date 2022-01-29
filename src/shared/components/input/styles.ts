import styled, { css } from 'styled-components/native';
import { Text } from '..';

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 56px;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 0 ${theme.spacing[4]};
    margin-bottom: ${theme.spacing[3]};

    background: ${theme.colors.shapes.primary};
    border: 1px solid ${theme.colors.borders.primary};
    border-radius: ${theme.radius.md};
  `}
`;

export const TextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.texts.complementary.placeholder,
}))`
  ${({ theme }) => css`
    flex: 1;
    height: 100%;

    color: ${theme.colors.texts.complementary.body};
    font-family: ${theme.typography.complementary.fonts['input-regular']};
    font-size: ${theme.typography.complementary.fontSizes.sm};
  `}
`;

export const ShowPassword = styled.TouchableOpacity`
  ${({ theme }) => css`
    margin-left: ${theme.spacing[2]};
    padding: ${theme.spacing[1]} ${theme.spacing['1.5']};

    background: ${theme.colors.shapes.secondary};
    border-radius: ${theme.radius.sm};
  `}
`;

export const ShowPasswordLabel = styled(Text).attrs(() => ({
  font: 'input-medium',
  size: 'xs',
  color: 'details',
}))``;
