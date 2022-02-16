import React, { useState } from 'react';

import { Heading, Input } from '../../../../../shared/ui';
import { useAuth } from '../../../hooks';

import * as S from './styles';

export function LoginTemplate() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { handleLogin, loginIsLoading } = useAuth();

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
        isLoading={loginIsLoading}
        onPress={() => handleLogin({ email, password })}>
        Entrar
      </S.Button>

      <S.ForgotPasswordLink
        label="```Esqueceu a senha?```"
        to="/forgot-password"
      />
    </S.Container>
  );
}
