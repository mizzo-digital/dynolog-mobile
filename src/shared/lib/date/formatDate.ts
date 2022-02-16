import { DateTime } from 'luxon';

type Format = keyof typeof formatMap;

const formatMap = {
  time: DateTime.TIME_WITH_SECONDS,
  dateWithWeekDay: { ...DateTime.DATE_MED_WITH_WEEKDAY },
};

export const formatDate = (date: Date, format: Format) => {
  const parsedDate = DateTime.fromJSDate(date);

  if (format === 'dateWithWeekDay') {
    const { days: diffDays } = parsedDate.diffNow('days');

    if (diffDays >= -2) {
      return parsedDate.toRelativeCalendar()?.toUpperCase() || '';
    }
  }

  return parsedDate.toLocaleString(formatMap[format]).replace(/\./g, '');
};
