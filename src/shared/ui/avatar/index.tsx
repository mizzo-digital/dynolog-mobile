import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import * as S from './styles';

interface Props {
  userName: string;
  urlImage?: string;
  style?: StyleProp<ViewStyle>;
  onPress?(): void;
}

export function Avatar({ userName, urlImage, style, onPress }: Props) {
  const getInitialsName = (name: string): string => {
    const [firstName, lastName] = name.split(' ');

    const initials =
      firstName && lastName
        ? `${firstName.charAt(0)}${lastName.charAt(0)}`
        : firstName.charAt(0);

    return initials.toUpperCase();
  };

  return (
    <S.Container style={style} onPress={onPress} disabled={!onPress}>
      {urlImage && <S.AvatarImage source={{ uri: urlImage }} />}

      {!urlImage && (
        <S.InitialsName>{getInitialsName(userName)}</S.InitialsName>
      )}
    </S.Container>
  );
}
