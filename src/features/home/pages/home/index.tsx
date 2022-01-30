import React from 'react';
import { useViewerActions, useViewerStore } from '../../../../entities/viewer';

import { Button, Header } from '../../../../shared/components';

import * as S from './styles';

export function Home() {
  const { logoutViewer } = useViewerActions();
  const userName = useViewerStore(store => store.name);

  return (
    <S.Container>
      <Header userName={userName || ''} />

      <Button style={{ marginTop: 80 }} onPress={logoutViewer}>
        Deslogar
      </Button>
    </S.Container>
  );
}
