import { httpClient } from '../../../../../shared/services/httpClient';
import { Credentials, Session } from './types';

export const createSessionRequest = async (crendentials: Credentials) => {
  const response = await httpClient.post<Session>({
    url: 'sessions',
    payload: crendentials,
  });

  return response;
};
