import { httpClient } from '../../../../shared/services/httpClient';
import { Credentials, Session } from './types';

export const createSession = async (crendentials: Credentials) => {
  const createdSession = await httpClient.post<Session>({
    url: 'sessions',
    payload: crendentials,
  });

  return createdSession;
};
