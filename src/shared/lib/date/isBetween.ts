import { DateTime } from 'luxon';

export const isBetween = (date: Date, from: Date, to: Date) => {
  const betweenDate = DateTime.fromJSDate(date);
  const fromDate = DateTime.fromJSDate(from);
  const toDate = DateTime.fromJSDate(to);

  const isBeforeOrEqual = betweenDate <= toDate;
  const isAfterOrEqual = betweenDate >= fromDate;

  return isBeforeOrEqual && isAfterOrEqual;
};
