import { differenceInMilliseconds } from '../../../../shared/lib/date';
import { formatDate } from '../../../../shared/lib/date/formatDate';
import { TimeEntry } from '../../../../entities/timeEntries/models';

type TimeEntryGroupedByDate = {
  title: string;
  totalInMilliseconds: number;
  data: TimeEntry[];
};

export const groupTimeEntriesByDate = (timeEntries: TimeEntry[]) => {
  const groupedTimeEntries = timeEntries.reduce<TimeEntryGroupedByDate[]>(
    (acc, timeEntry) => {
      const startDate = new Date(timeEntry.start);
      const stopDate = new Date(timeEntry.stop);

      const existingGroupIndex = acc.findIndex(
        group => group.title === formatDate(startDate, 'dateWithWeekDay'),
      );

      const groupExists = existingGroupIndex >= 0;

      if (groupExists) {
        const { data, totalInMilliseconds, ...rest } = acc[existingGroupIndex];

        const newGroup = {
          ...rest,
          data: [...data, timeEntry],
          totalInMilliseconds:
            totalInMilliseconds + differenceInMilliseconds(stopDate, startDate),
        };

        acc.fill(newGroup, existingGroupIndex, existingGroupIndex + 1);

        return acc;
      }

      return [
        ...acc,
        {
          title: formatDate(startDate, 'dateWithWeekDay'),
          totalInMilliseconds: differenceInMilliseconds(stopDate, startDate),
          data: [timeEntry],
        },
      ];
    },
    [],
  );

  return groupedTimeEntries;
};
