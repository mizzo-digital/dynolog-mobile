import styled, { css } from 'styled-components/native';
import { Text } from '../../../../../shared/ui';

type ContainerProps = {
  hasWarning: boolean;
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, hasWarning }) => css`
    width: 100%;

    padding: ${theme.spacing[4]};
    margin-bottom: ${theme.spacing[3]};

    background: ${theme.colors.shapes.primary};
    border-radius: ${theme.radius.lg};

    ${hasWarning &&
    css`
      border-left-width: 2px;
      border-left-color: ${theme.colors.semantic.warning};
    `}
  `}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Project = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

type MarkerProps = {
  color: string;
};

export const Marker = styled.View<MarkerProps>`
  ${({ color, theme }) => css`
    width: 4px;
    height: 4px;

    margin-right: ${theme.spacing[2]};

    background: ${color};
    border-radius: ${theme.radius.full};
  `}
`;

type HoursWrap = {
  isExtended: boolean;
};
export const HoursWrap = styled.View<HoursWrap>`
  ${({ isExtended }) => css`
    flex-direction: row;
    align-items: center;

    ${isExtended &&
    css`
      flex: 1;
      justify-content: space-between;
    `}
  `}
`;

export const RangeHours = styled(Text).attrs(() => ({
  color: 'details',
  size: 'xs',
}))`
  ${({ theme }) => css`
    margin-right: ${theme.spacing[2]};
  `}
`;

export const TotalHours = styled(Text).attrs(() => ({
  font: 'body-primary-semibold',
  size: 'xs',
}))`
  ${({ theme }) => css`
    margin-right: ${theme.spacing[2]};
  `}
`;

type ContentProps = {
  hasLeftSpacing?: boolean;
};

export const Content = styled.View<ContentProps>`
  ${({ theme, hasLeftSpacing }) => css`
    margin-top: ${theme.spacing[6]};

    ${hasLeftSpacing &&
    css`
      padding-left: ${theme.spacing[3]};
    `}
  `}
`;
