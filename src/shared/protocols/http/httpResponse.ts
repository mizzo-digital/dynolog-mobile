import { HTTP_STATUS_CODE } from './httpStatusCode';

export type HttpResponse<T = any> = {
  statusCode: HTTP_STATUS_CODE;
  body: T;
};
