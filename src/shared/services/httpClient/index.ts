import axios, { AxiosError } from 'axios';

import { API_URL } from '../../constants/apiUrl';
import {
  HttpError,
  HttpResponse,
  HTTP_STATUS_CODE,
} from '../../protocols/http';
import { useUserStore as userStore } from '../../../entities/user';
import {
  HttpClient,
  HttpMethodParams,
  HTTP_METHOD,
  RequestParams,
} from './types';

const getUserAccessToken = () => {
  return userStore.getState().user?.session.accessToken;
};

const buildConfigs = (params?: object, headers?: object) => ({
  params,
  headers: {
    authorization: `Bearer ${getUserAccessToken()}`,
    ...headers,
  },
});

const requestClient = async <T>(
  requestParams: RequestParams,
): Promise<HttpResponse<T>> => {
  try {
    const response = await axios({
      url: `${API_URL.DEFAULT}/${requestParams.url}`,
      method: requestParams.method,
      data: requestParams.payload,
      ...buildConfigs(requestParams.params, requestParams.headers),
    });

    return {
      statusCode: response.status,
      body: response.data,
    };
  } catch (err) {
    const error = err as AxiosError;

    throw new HttpError({
      statusCode: error.response?.status || HTTP_STATUS_CODE.BAD_REQUEST,
      body: error.response?.data,
    });
  }
};

export const httpClient: HttpClient = {
  get: async <T>(params: HttpMethodParams.Get): Promise<HttpResponse<T>> => {
    const requestResponse = await requestClient<T>({
      method: HTTP_METHOD.GET,
      ...params,
    });

    return requestResponse;
  },

  post: async <T>(params: HttpMethodParams.Post): Promise<HttpResponse<T>> => {
    const requestResponse = await requestClient<T>({
      method: HTTP_METHOD.POST,
      ...params,
    });

    return requestResponse;
  },

  put: async <T>(params: HttpMethodParams.Put): Promise<HttpResponse<T>> => {
    const requestResponse = await requestClient<T>({
      method: HTTP_METHOD.PUT,
      ...params,
    });

    return requestResponse;
  },
};
