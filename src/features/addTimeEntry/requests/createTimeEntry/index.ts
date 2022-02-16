import { httpClient } from '../../../../shared/services';
import { TimeEntry } from '../../../../entities/timeEntries';
import { Props } from './types';

export const createTimeEntry = async (props: Props) => {
  const payload = {
    description: props.description,
    start: props.startDate,
    stop: props.stopDate,
    userId: props.userId,
    projectId: props.projectId,
  };

  const newTimeEntry = await httpClient.post<TimeEntry>({
    url: 'time-entries',
    payload,
  });

  return newTimeEntry;
};
