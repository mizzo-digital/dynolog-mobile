import React, { useState } from 'react';

import { Heading, Input } from '../../../../../../../shared/components';

import * as S from './styles';

type Credentials = {
  email: string;
  password: string;
};

type Props = {
  onLogin({ email, password }: Credentials): void;
  isLoading: boolean;
};

export function LoginTemplate({ onLogin, isLoading }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <S.Container>
      <Heading size="lg">Bem-vindo 👋</Heading>

      <S.Subheading>vamos fazer login?</S.Subheading>

      <S.CreateAccountLink
        label="```Não tem conta?``` Criar"
        to="/create-account"
      />

      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
        autoCapitalize="none"
      />

      <Input
        type="password"
        value={password}
        onChangeText={setPassword}
        placeholder="Digite sua senha"
        autoCapitalize="none"
      />

      <S.Button
        isLoading={isLoading}
        onPress={() => onLogin({ email, password })}>
        Entrar
      </S.Button>

      <S.ForgotPasswordLink
        label="```Esqueceu a senha?```"
        to="/forgot-password"
      />
    </S.Container>
  );
}
