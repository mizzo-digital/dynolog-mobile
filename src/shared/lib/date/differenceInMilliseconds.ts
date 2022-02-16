import { DateTime } from 'luxon';

export const differenceInMilliseconds = (dateLeft: Date, dateRight: Date) => {
  const date = DateTime.fromJSDate(dateLeft);
  const dateToCompare = DateTime.fromJSDate(dateRight);

  const { milliseconds } = date.diff(dateToCompare, 'milliseconds');

  return milliseconds;
};
