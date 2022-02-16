import React, { useMemo } from 'react';
import { SectionList, RefreshControl } from 'react-native';

import { useTimeEntriesStore } from '../../../../../entities/timeEntries';
import { useUserStore } from '../../../../../entities/user';
import { millisecondsToTime } from '../../../../../shared/lib/date';
import { Text } from '../../../../../shared/ui';
import { TimeEntryCard } from '../timeEntryCard';
import { useAsync } from '../../../../../shared/hooks';
import { groupTimeEntriesByDate } from '../../../lib/date';

import * as S from './styles';

export function TimeEntryList() {
  const userId = useUserStore(store => store.user?.id);
  const timeEntries = useTimeEntriesStore(store => store.timeEntries);
  const syncStoreTimeEntries = useTimeEntriesStore(store => store.syncStoreTimeEntries);

  const { runAsync, statuses, ASSYNC_STATUS } = useAsync();

  const renderSectionHeader = (title: string, totalInMilliseconds: number) => (
    <S.SectionHeader>
      <Text font="body-primary-semibold">{title}</Text>

      <Text font="body-primary-semibold">
        {millisecondsToTime(totalInMilliseconds)}
      </Text>
    </S.SectionHeader>
  );

  const handleRefresh = async () => {
    if (!userId) return;

    await runAsync('fetchTimeEntries', syncStoreTimeEntries({ userId }));
  };

  const groupedTimeEntries = useMemo(
    () => groupTimeEntriesByDate(timeEntries),
    [timeEntries],
  );

  return (
    <S.Container>
      <SectionList
        sections={groupedTimeEntries}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingTop: 20 }}
        ListHeaderComponent={<S.HeaderList>Seus registros</S.HeaderList>}
        renderSectionHeader={({ section }) => {
          return renderSectionHeader(
            section.title,
            section.totalInMilliseconds,
          );
        }}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            tintColor="#FFF"
            refreshing={statuses.fetchTimeEntries === ASSYNC_STATUS.LOADING}
            onRefresh={handleRefresh}
          />
        }
        renderItem={({ item }) => (
          <TimeEntryCard
            startDate={new Date(item.start)}
            endDate={new Date(item.stop)}
            description={item.description}
            project={item.project}
          />
        )}
      />
    </S.Container>
  );
}
