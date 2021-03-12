import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const BASE_API_URL = process.env.BASE_API_URL;
const url = new URL(BASE_API_URL);

export default class BaseApiService {
  private client: AxiosInstance;

  constructor(path: string) {
    url.pathname = `api/${path}`;

    this.client = axios.create({
      baseURL: url.toString(),
      paramsSerializer: function (params) {
        return new URLSearchParams(params).toString();
      },
    });
  }

  protected async get<DTO = any>(path: string, config?: AxiosRequestConfig) {
    return await this.client.get<DTO>(path, config);
  }

  protected async post<DTO = any>(
    path: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ) {
    return await this.client.post<DTO>(path, data, config);
  }

  protected async put<DTO = any>(
    path: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ) {
    return await this.client.put<DTO>(path, data, config);
  }

  protected async delete<DTO = any>(path: string, config?: AxiosRequestConfig) {
    return await this.client.delete<DTO>(path, config);
  }
}
