import { httpClient } from '../../../../shared/services';
import { TimeEntry } from '../../../../entities/timeEntries';
import { Props } from './types';

export const getTimeEntryRunning = async (props: Props) => {
  const timeEntryRunning = await httpClient.get<TimeEntry>({
    url: 'time-entries/running',
    params: props,
  });

  return timeEntryRunning;
};
