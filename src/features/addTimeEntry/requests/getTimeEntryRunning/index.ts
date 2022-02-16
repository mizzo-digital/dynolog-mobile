import { httpClient } from '../../../../shared/services';
import { TimeEntry } from '../../../../entities/timeEntries';
import { Props } from './types';

export const getTimeEntryRunning = async (props: Props) => {
  const params = {
    user_id: props.userId,
  };

  const timeEntryRunning = await httpClient.get<TimeEntry>({
    url: 'time-entries/running',
    params,
  });

  return timeEntryRunning;
};
