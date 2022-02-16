import { httpClient } from '../../../../shared/services';
import { Page } from '../../../../shared/types/page';
import { TimeEntry } from '../../models';

import { Props } from './types';

export const getTimeEntries = async (props: Props) => {
  const timeEntries = await httpClient.get<Page<TimeEntry>>({
    url: 'time-entries',
    params: props,
  });

  return timeEntries;
};
