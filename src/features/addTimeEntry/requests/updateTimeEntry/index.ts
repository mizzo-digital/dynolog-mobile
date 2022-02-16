import { httpClient } from '../../../../shared/services';
import { TimeEntry } from '../../../../entities/timeEntries';
import { Props } from './types';

export const updateTimeEntry = async (props: Props) => {
  const payload = {
    ...props,
    start: props.startDate,
    stop: props.stopDate,
  };

  const updatedTimeEntry = await httpClient.put<TimeEntry>({
    url: `time-entries/${props.id}`,
    payload,
  });

  return updatedTimeEntry;
};
