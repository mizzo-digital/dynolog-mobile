import React, { useCallback, useEffect, useState, useRef } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
} from 'react-native-reanimated';

import { Spinner } from '../spinner';

import { ButtonProps } from './button.types';
import { BUTTON_WIDTH, BUTTON_RADIUS } from './button.styles';
import * as S from './button.styles';

const ButtonWrapper = Animated.createAnimatedComponent(S.ButtonWrapper);

const LOADING_ANIMATION_DELAY = 1000;

export function Button({ children, ...props }: ButtonProps) {
  const [isLoading, setIsLoading] = useState(props.isLoading);

  const containerSize = useRef({ width: 0, height: 0 });

  const loadingAnimationValue = useSharedValue(0);

  const loadingAnimationStyle = useAnimatedStyle(() => ({
    width:
      loadingAnimationValue.value !== 0
        ? interpolate(
            loadingAnimationValue.value,
            [0, 1],
            [containerSize.current.width, containerSize.current.height],
          )
        : BUTTON_WIDTH,
    borderRadius: interpolate(
      loadingAnimationValue.value,
      [0, 1],
      [BUTTON_RADIUS, 9999],
    ),
  }));

  const handlePress = () => {
    setIsLoading(true);

    setTimeout(() => {
      props.onPress();
    }, LOADING_ANIMATION_DELAY);
  };

  const startLoadingAnimation = useCallback(() => {
    loadingAnimationValue.value = withTiming(1, {
      duration: 200,
    });
  }, [loadingAnimationValue]);

  const endLoadingAnimation = useCallback(() => {
    loadingAnimationValue.value = withTiming(0, {
      duration: 200,
      easing: Easing.circle,
    });
  }, [loadingAnimationValue]);

  useEffect(() => {
    setIsLoading(props.isLoading);
  }, [props.isLoading]);

  useEffect(() => {
    if (isLoading) {
      startLoadingAnimation();
    } else {
      endLoadingAnimation();
    }
  }, [endLoadingAnimation, isLoading, startLoadingAnimation]);

  return (
    <S.Container
      onLayout={({ nativeEvent }) => {
        const { width, height } = nativeEvent.layout;

        containerSize.current = { width, height };
      }}>
      <ButtonWrapper
        onPress={handlePress}
        style={loadingAnimationStyle}
        disabled={isLoading || props.disabled}>
        {isLoading ? <Spinner /> : <S.Label>{children}</S.Label>}
      </ButtonWrapper>
    </S.Container>
  );
}
