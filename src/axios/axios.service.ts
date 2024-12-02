import { HttpService } from '@nestjs/axios';
import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

@Injectable()
export class AxiosService {
  constructor(private httpService: HttpService) {}

  private readonly logger = new Logger(AxiosService.name);

  async getAxios(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<any, any>> {
    try {
      const res = await this.httpService.axiosRef.get(url, config);
      this.logger.log('GET');
      this.logger.debug(res.data);
      return res;
    } catch (err) {
      this.logger.error(err);
      throw new ConflictException(err.response.data.error, {
        description:
          err.response.data.error_description || err.response.data.details,
      });
    }
  }

  async postAxios(
    url: string,
    data: any | URLSearchParams,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<any, any>> {
    try {
      const res = await this.httpService.axiosRef.post(url, data, config);
      this.logger.log('POST');
      this.logger.debug(res.data);
      return res;
    } catch (err) {
      this.logger.error(err);
      throw new ConflictException(err.response.data.error, {
        description:
          err.response.data.error_description || err.response.data.details,
      });
    }
  }

  async putAxios(
    url: string,
    data: any | URLSearchParams,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<any, any>> {
    try {
      const res = await this.httpService.axiosRef.put(url, data, config);
      this.logger.log('PUT');
      this.logger.debug(res.data);
      return res;
    } catch (err) {
      this.logger.error(err);
      throw new ConflictException(err.response.data.error, {
        description:
          err.response.data.error_description || err.response.data.details,
      });
    }
  }

  async deleteAxios(url: string, config?: AxiosRequestConfig) {
    try {
      const res = await this.httpService.axiosRef.delete(url, config);
      this.logger.log('DELETE');
      this.logger.debug(res.data);
      return res;
    } catch (err) {
      this.logger.error(err);
      throw new ConflictException(err.response.data.error, {
        description:
          err.response.data.error_description || err.response.data.details,
      });
    }
  }
}
