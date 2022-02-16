import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Heading } from '../../../../../shared/ui';
import { useAddTimeEntry } from '../../../hooks';
import {
  differenceInMilliseconds,
  millisecondsToTime,
  TIME_IN_MILLISECONDS,
} from '../../../../../shared/lib/date';
import { PlayButton, StopButton } from '..';

import * as S from './styles';

export function ModalAddTimeEntry() {
  const [timer, setTimer] = useState(0);

  const { timeEntryRunning, handleAddTimeEntry, handleEndOfTimeEntry } =
    useAddTimeEntry();

  const intervalId = useRef<NodeJS.Timeout>();

  const handleStartTimer = useCallback(() => {
    if (!timeEntryRunning) return;

    intervalId.current = setInterval(
      () => setTimer(prevTimer => prevTimer + TIME_IN_MILLISECONDS.SECOND),
      TIME_IN_MILLISECONDS.SECOND,
    );
  }, [timeEntryRunning]);

  const loadElapsedTimerFromTimeEntry = useCallback(() => {
    if (!timeEntryRunning) return;

    const nowDate = new Date();
    const startDate = new Date(timeEntryRunning.start);

    const elapsedMilliseconds = differenceInMilliseconds(nowDate, startDate);

    setTimer(elapsedMilliseconds);
  }, [timeEntryRunning]);

  useEffect(() => {
    loadElapsedTimerFromTimeEntry();

    handleStartTimer();

    return () => intervalId.current && clearInterval(intervalId.current);
  }, [handleStartTimer, loadElapsedTimerFromTimeEntry, timeEntryRunning]);

  return (
    <S.Container>
      {!timeEntryRunning ? (
        <S.AddTimeEntry>
          <Heading>Iniciar um novo timer?</Heading>

          <PlayButton onPlay={handleAddTimeEntry} />
        </S.AddTimeEntry>
      ) : (
        <S.AddTimeEntry>
          <Heading size="lg" font="heading-primary-bold">
            {millisecondsToTime(timer)}
          </Heading>

          <StopButton onStop={handleEndOfTimeEntry} />
        </S.AddTimeEntry>
      )}
    </S.Container>
  );
}
