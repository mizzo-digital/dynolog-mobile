import React from 'react';
import { Text } from 'react-native';
import { useViewerStore, useViewerActions } from '../../../../entities/viewer';

import { Button } from '../../../../shared/components';

import * as S from './styles';

export function Home() {
  const userName = useViewerStore(store => store.name);
  const { logoutViewer } = useViewerActions();

  return (
    <S.Container>
      <Text>{userName}</Text>

      <Button onPress={logoutViewer}>Deslogar</Button>
    </S.Container>
  );
}
