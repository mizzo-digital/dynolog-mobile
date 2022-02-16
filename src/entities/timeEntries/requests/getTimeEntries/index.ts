import { httpClient } from '../../../../shared/services';
import { Page } from '../../../../shared/types/page';
import { TimeEntry } from '../../models';

import { Props } from './types';

export const getTimeEntries = async (props: Props) => {
  const params = {
    user_id: props.userId,
  };

  const timeEntries = await httpClient.get<Page<TimeEntry>>({
    url: 'time-entries',
    params,
  });

  return timeEntries;
};
