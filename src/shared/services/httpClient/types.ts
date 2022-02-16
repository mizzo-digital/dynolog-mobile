import { HttpResponse } from '../../protocols/http';

export type HttpParamsBase = {
  url: string;
  payload?: any;
  params?: any;
  headers?: any;
};

export enum HTTP_METHOD {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
}

export namespace HttpMethodParams {
  export type Get = Omit<HttpParamsBase, 'payload'>;
  export type Post = HttpParamsBase;
  export type Put = HttpParamsBase;
}

export type HttpClient = {
  get<T>(params: HttpMethodParams.Get): Promise<HttpResponse<T>>;
  post<T>(params: HttpMethodParams.Post): Promise<HttpResponse<T>>;
  put<T>(params: HttpMethodParams.Put): Promise<HttpResponse<T>>;
};

export type RequestParams = HttpParamsBase & {
  method: HTTP_METHOD;
};
