import { HttpStatusCode } from './http-status-code';

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  body: T;
};
