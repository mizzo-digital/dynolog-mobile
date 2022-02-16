import { TIME_IN_MILLISECONDS } from './constants/timeInMilliseconds';

export const millisecondsToTime = (milliseconds: number) => {
  const hours = Math.floor(milliseconds / TIME_IN_MILLISECONDS.HOUR);
  const minutes = Math.floor(milliseconds / TIME_IN_MILLISECONDS.MINUTE) % 60;
  const seconds = Math.floor((milliseconds / TIME_IN_MILLISECONDS.SECOND) % 60);

  return [hours, minutes, seconds]
    .map(value => (value < 10 ? `0${value}` : value))
    .join(':');
  // .filter((value, index) => value !== '00' || index > 0)
};
