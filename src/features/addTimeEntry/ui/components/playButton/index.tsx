import React from 'react';

import PlayIcon from '../../assets/play.svg';

import * as S from './styles';

type Props = {
  onPlay(): void;
};

export function PlayButton({ onPlay }: Props) {
  return (
    <S.Container onPress={onPlay}>
      <PlayIcon />
    </S.Container>
  );
}
