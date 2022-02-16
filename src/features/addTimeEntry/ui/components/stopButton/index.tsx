import React, { useCallback, useEffect } from 'react';
import {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withRepeat,
} from 'react-native-reanimated';

import StopIcon from '../../assets/stop.svg';

import * as S from './styles';

type Props = {
  onStop(): void;
};

export function StopButton({ onStop }: Props) {
  const animatedScaleValue = useSharedValue(1);

  const animatedStylePulseWrap = useAnimatedStyle(() => ({
    transform: [{ scale: animatedScaleValue.value }],
  }));

  const startPulseAnimation = useCallback(() => {
    animatedScaleValue.value = withRepeat(
      withTiming(1.3, { duration: 1000 }),
      -1,
      true,
    );
  }, [animatedScaleValue]);

  useEffect(() => {
    startPulseAnimation();
  }, [startPulseAnimation]);

  return (
    <S.Container>
      <S.PulseWrap style={animatedStylePulseWrap} />

      <S.StopButton onPress={onStop}>
        <StopIcon />
      </S.StopButton>
    </S.Container>
  );
}
