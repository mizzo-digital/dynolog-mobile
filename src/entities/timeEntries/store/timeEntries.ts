import create from 'zustand';

import { TimeEntry } from '..';

import { getTimeEntries } from '../requests/getTimeEntries';
import { SyncStoreTimeEntriesProps, TimeEntriesStore } from './types';

export const useTimeEntriesStore = create<TimeEntriesStore>(setStore => ({
  timeEntries: [],

  syncStoreTimeEntries: async ({ userId }: SyncStoreTimeEntriesProps) => {
    const { body } = await getTimeEntries({ userId });

    setStore(prevStore => ({
      ...prevStore,
      timeEntries: body.content,
    }));
  },

  updateStoreTimeEntries: (newTimeEntries: TimeEntry[]) => {
    setStore(prevStore => ({
      ...prevStore,
      timeEntries: newTimeEntries,
    }));
  },

  addNewTimeEntryInStore: (newTimeEntry: TimeEntry) => {
    setStore(prevStore => ({
      ...prevStore,
      timeEntries: [newTimeEntry, ...prevStore.timeEntries],
    }));
  },
}));
