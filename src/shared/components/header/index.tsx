import React from 'react';

import { Avatar, Divider } from '..';

import * as S from './styles';

type Props = {
  userName: string;
};

export function Header({ userName }: Props) {
  return (
    <S.Container>
      <S.Content>
        <S.Greetings>
          <S.GreetingsText font="primary-regular">Boa noite</S.GreetingsText>
          <S.GreetingsUser>{userName} 👋</S.GreetingsUser>
        </S.Greetings>

        <Avatar userName={userName} />
      </S.Content>

      <Divider />
    </S.Container>
  );
}
