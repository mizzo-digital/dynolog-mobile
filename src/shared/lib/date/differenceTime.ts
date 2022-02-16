import { differenceInMilliseconds, millisecondsToTime } from '.';

export const differenceTime = (dateLeft: Date, dateRight: Date) => {
  const milliseconds = differenceInMilliseconds(dateLeft, dateRight);

  return millisecondsToTime(milliseconds);
};
