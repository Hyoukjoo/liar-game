import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const BASE_API_URL = process.env.BASE_API_URL;

export default class BaseApiService {
  private client: AxiosInstance;

  constructor(path: string) {
    const url = new URL(`api/${path}`, BASE_API_URL);

    this.client = axios.create({
      baseURL: url.href,
      paramsSerializer: function (params) {
        return new URLSearchParams(params).toString();
      },
    });
  }

  protected get<DTO = any>(path: string, config?: AxiosRequestConfig) {
    return this.client.get<DTO>(path, config);
  }

  protected post<DTO = any>(
    path: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ) {
    return this.client.post<DTO>(path, data, config);
  }

  protected put<DTO = any>(
    path: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ) {
    return this.client.put<DTO>(path, data, config);
  }

  protected delete<DTO = any>(path: string, config?: AxiosRequestConfig) {
    return this.client.delete<DTO>(path, config);
  }
}
