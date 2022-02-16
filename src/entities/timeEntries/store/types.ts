import { TimeEntry } from '../models';

export type TimeEntriesStore = {
  timeEntries: TimeEntry[];
  syncStoreTimeEntries({ userId }: SyncStoreTimeEntriesProps): Promise<void>;
  updateStoreTimeEntries(newTimeEntries: TimeEntry[]): void;
  addNewTimeEntryInStore(newTimeEntry: TimeEntry): void;
};

export type SyncStoreTimeEntriesProps = {
  userId: string;
};
