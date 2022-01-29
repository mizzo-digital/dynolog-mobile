import styled, { css } from 'styled-components/native';
import {
  Wrapper,
  Button as ButtonComponent,
  Heading,
} from '../../../../../../../shared/components';
import { Link } from '../../../../../../../shared/components/link';

export const Container = styled(Wrapper)`
  justify-content: center;
`;

export const Button = styled(ButtonComponent)`
  ${({ theme }) => css`
    margin-top: ${theme.spacing[3]};
  `}
`;

export const Subheading = styled(Heading).attrs(() => ({
  font: 'primary-regular',
  size: 'md',
}))`
  ${({ theme }) => css`
    margin: ${theme.spacing[1]} 0 ${theme.spacing[6]} 0;
  `}
`;

export const CreateAccountLink = styled(Link)`
  ${({ theme }) => css`
    align-self: flex-end;

    margin-bottom: ${theme.spacing[4]};
  `}
`;

export const ForgotPasswordLink = styled(Link)`
  width: 100%;
  align-items: center;

  position: absolute;
  bottom: 0;
`;
