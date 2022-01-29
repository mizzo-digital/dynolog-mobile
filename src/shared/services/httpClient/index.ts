import axios, { AxiosError } from 'axios';

import { API } from '../../configs/api';
import { HttpResponse, HttpError, HttpStatusCode } from '../../protocols/http';

type HttpParamsBase = {
  url: string;
  payload?: any;
};

const axiosInstance = axios.create({
  baseURL: API.DEFAULT.BASE_URL,
});

const httpPostMethod = async <T>({
  url,
  payload,
}: HttpParamsBase): Promise<HttpResponse<T>> => {
  try {
    const { status, data } = await axiosInstance.post(url, payload);

    return {
      statusCode: status,
      body: data,
    };
  } catch (error) {
    const axiosError = error as AxiosError;

    throw new HttpError({
      statusCode: axiosError.response?.status || HttpStatusCode.BAD_REQUEST,
      errorBody: axiosError.response?.data,
    });
  }
};

const httpGetMethod = async <T>({
  url,
}: Omit<HttpParamsBase, 'payload'>): Promise<HttpResponse<T>> => {
  try {
    const { status, data } = await axiosInstance.get(url);

    return {
      statusCode: status,
      body: data,
    };
  } catch (error) {
    const axiosError = error as AxiosError;

    throw new HttpError({
      statusCode: axiosError.response?.status || HttpStatusCode.BAD_REQUEST,
      errorBody: axiosError.response?.data,
    });
  }
};

export const httpClient = {
  post: httpPostMethod,
  get: httpGetMethod,
};
