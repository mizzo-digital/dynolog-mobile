import React, { PropsWithChildren, ReactElement } from 'react';
import { StyleProp, ViewStyle, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

type Props = {
  to: string;
  label: string;
  style?: StyleProp<ViewStyle>;
};

export function Link({ to, style, label }: PropsWithChildren<Props>) {
  const { navigate } = useNavigation();

  const makeTextComponent = (text: string, scape: boolean) => {
    return scape ? (
      <S.TextLink key={text} color="body">
        {text}
      </S.TextLink>
    ) : (
      <S.TextLink key={text} color="links">
        {text}
      </S.TextLink>
    );
  };

  const makeLink = (text: string) => {
    const partner = /(```)(\D+?)(```)/g;

    const texts = text.replace(partner, '<tag>$1$2$3<tag>').split('<tag>');

    const textComponents = texts.reduce((acc, value) => {
      if (!value) return acc;

      const hasScape = value.match(partner);

      if (hasScape) {
        return [...acc, makeTextComponent(value.replace(partner, '$2'), true)];
      }

      return [...acc, makeTextComponent(value, false)];
    }, [] as ReactElement[]);

    return textComponents;
  };

  return (
    <S.Container style={style} onPress={() => navigate(to)}>
      <Text>{makeLink(label)}</Text>
    </S.Container>
  );
}
