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

export const endOf = (date: Date, unit: Unit) => {
  const newDate = DateTime.fromJSDate(date).endOf(unit).toJSDate();

  return newDate;
};
