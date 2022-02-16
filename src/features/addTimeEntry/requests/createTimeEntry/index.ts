import { httpClient } from '../../../../shared/services';
import { TimeEntry } from '../../../../entities/timeEntries';
import { Props } from './types';

export const createTimeEntry = async (props: Props) => {
  const payload = {
    ...props,
    start: props.startDate,
    stop: props.stopDate,
  };

  const newTimeEntry = await httpClient.post<TimeEntry>({
    url: 'time-entries',
    payload,
  });

  return newTimeEntry;
};
