import React, { useState } from 'react';

import { useViewerActions } from '../../../../../../entities/viewer';
import { HttpError } from '../../../../../../shared/protocols/http';
import { useToast } from '../../../../../../shared/hooks';
import { createSessionRequest } from '../../../requests/create-session';
import { LoginTemplate } from '../../components/templates';

type Credentials = {
  email: string;
  password: string;
};

export function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const { addToast } = useToast();
  const { updateViewer } = useViewerActions();

  const handleLogin = async ({ email, password }: Credentials) => {
    try {
      setIsLoading(true);

      const { body } = await createSessionRequest({ email, password });

      const { user, ...session } = body;

      setIsLoading(false);

      updateViewer({ ...user, session });
    } catch (error) {
      if (error instanceof HttpError) {
        addToast({
          type: 'danger',
          message: error.errorBody.message,
        });
      }

      setIsLoading(false);
    }
  };

  return <LoginTemplate isLoading={isLoading} onLogin={handleLogin} />;
}
