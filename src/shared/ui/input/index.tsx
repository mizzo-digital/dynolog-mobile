import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import * as S from './styles';

type InputTypes = 'password' | 'text';

type Props = TextInputProps & {
  type?: InputTypes;
};

export function Input({ style, type = 'text', ...rest }: Props) {
  const [inputType, setInputType] = useState(type);

  const handleShowPassword = () => {
    setInputType(prevState => (prevState === 'password' ? 'text' : 'password'));
  };

  return (
    <S.Container style={style}>
      <S.TextInput secureTextEntry={inputType === 'password'} {...rest} />

      {type === 'password' && (
        <S.ShowPassword onPress={handleShowPassword}>
          <S.ShowPasswordLabel>
            {inputType === 'password' ? 'Mostrar' : 'Esconder'}
          </S.ShowPasswordLabel>
        </S.ShowPassword>
      )}
    </S.Container>
  );
}
