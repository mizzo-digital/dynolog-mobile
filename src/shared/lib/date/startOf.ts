import { DateTime } from 'luxon';

export type Unit =
  | 'year'
  | 'quarter'
  | 'month'
  | 'week'
  | 'day'
  | 'hour'
  | 'minute'
  | 'second'
  | 'millisecond';

export const startOf = (date: Date, unit: Unit) => {
  const newDate = DateTime.fromJSDate(date).startOf(unit).toJSDate();

  return newDate;
};
