import styled, { css } from 'styled-components/native';

import { Heading } from '../../../../../shared/ui';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const HeaderList = styled(Heading)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing[4]};
  `}
`;

export const SectionHeader = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: ${theme.spacing[4]};
  `}
`;

export const DividerTimeEntryCard = styled.View`
  ${({ theme }) => css`
    height: ${theme.spacing[3]};
  `}
`;
