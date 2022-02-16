import { useCallback, useEffect, useState } from 'react';

import { useUserStore } from '../../../entities/user';
import { useToast, useAsync } from '../../../shared/hooks';
import { TimeEntry, useTimeEntriesStore } from '../../../entities/timeEntries';
import { createTimeEntry } from '../requests/createTimeEntry';
import { updateTimeEntry } from '../requests/updateTimeEntry';
import { getTimeEntryRunning } from '../requests/getTimeEntryRunning';

export function useAddTimeEntry() {
  const [timeEntryRunning, setTimeEntryRunning] = useState<TimeEntry | null>(
    null,
  );

  const userId = useUserStore(store => store.user?.id);
  const addNewTimeEntryInStore = useTimeEntriesStore(
    store => store.addNewTimeEntryInStore,
  );

  const { addToast } = useToast();
  const { runAsync } = useAsync();

  const handleEndOfTimeEntry = useCallback(async () => {
    if (!userId || !timeEntryRunning) return;

    const timeEntry = {
      ...timeEntryRunning,
      startDate: timeEntryRunning.start,
      stopDate: new Date().toISOString(),
      projectId: timeEntryRunning.project?.id,
    };

    const { body: updatedTimeEntry } = await updateTimeEntry(timeEntry);

    setTimeEntryRunning(null);

    addNewTimeEntryInStore(updatedTimeEntry);

    addToast({
      type: 'success',
      message: 'Cadastrado com sucesso.',
    });
  }, [addNewTimeEntryInStore, addToast, timeEntryRunning, userId]);

  const handleAddTimeEntry = useCallback(async () => {
    if (!userId) return;

    const { body: newTimeEntry } = await createTimeEntry({
      userId,
      startDate: new Date().toISOString(),
    });

    setTimeEntryRunning(newTimeEntry);
  }, [userId]);

  const loadTimeEntryRunning = useCallback(async () => {
    if (!userId) return;

    const { data, error } = await runAsync(
      'getTimeEntryRunning',
      getTimeEntryRunning({ userId }),
    );

    if (!data || error) return;

    setTimeEntryRunning(data.body);
  }, [runAsync, userId]);

  useEffect(() => {
    loadTimeEntryRunning();
  }, [loadTimeEntryRunning]);

  return {
    handleAddTimeEntry,
    handleEndOfTimeEntry,
    timeEntryRunning,
  };
}
