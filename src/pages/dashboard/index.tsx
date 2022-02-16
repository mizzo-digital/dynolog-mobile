import React, { useCallback, useEffect } from 'react';

import { Header, Wrapper } from '../../shared/ui';
import { useUserStore } from '../../entities/user';
import { useTimeEntriesStore } from '../../entities/timeEntries';
import { TimeEntryList } from '../../features/timeEntryList';
import { ModalAddTimeEntry } from '../../features/addTimeEntry';

import * as S from './styles';

export function Dashboard() {
  const userName = useUserStore(store => store.user?.name);
  const userId = useUserStore(store => store.user?.id);

  const syncStoreTimeEntries = useTimeEntriesStore(
    store => store.syncStoreTimeEntries,
  );

  const handleDataSync = useCallback(() => {
    if (!userId) return;

    syncStoreTimeEntries({ userId });
  }, [syncStoreTimeEntries, userId]);

  useEffect(() => {
    handleDataSync();
  }, [handleDataSync]);

  return (
    <Wrapper>
      <Header userName={userName || ''} />

      <S.Content>
        <TimeEntryList />
      </S.Content>

      <ModalAddTimeEntry />
    </Wrapper>
  );
}
