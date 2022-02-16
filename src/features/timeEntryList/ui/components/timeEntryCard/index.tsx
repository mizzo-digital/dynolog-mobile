import React from 'react';

import { Text } from '../../../../../shared/ui';
import { differenceTime } from '../../../../../shared/lib/date';
import { formatDate } from '../../../../../shared/lib/date/formatDate';

import { Props } from './types';

import * as S from './styles';

export function TimeEntryCard({
  startDate,
  endDate,
  description,
  project,
}: Props) {
  return (
    <S.Container hasWarning={!project}>
      <S.Header>
        {project && (
          <S.Project>
            {project.color && <S.Marker color={project.color} />}

            <Text>{project.name}</Text>
          </S.Project>
        )}

        <S.HoursWrap isExtended={!project}>
          <S.RangeHours>
            {formatDate(startDate, 'time')} - {formatDate(endDate, 'time')}
          </S.RangeHours>

          <S.TotalHours>{differenceTime(endDate, startDate)}</S.TotalHours>
        </S.HoursWrap>
      </S.Header>

      {!!description && (
        <S.Content hasLeftSpacing={!!project}>
          <Text>{description}</Text>
        </S.Content>
      )}
    </S.Container>
  );
}
