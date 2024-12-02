import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosService } from 'src/axios/axios.service';
import { Cache } from 'cache-manager';
import { IAdsAuthResponse, IAdsConfig } from 'src/utils/interfaces';

@Injectable()
export class AdsAuthService {
  constructor(
    private configService: ConfigService,
    private axiosService: AxiosService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  private readonly logger = new Logger(AdsAuthService.name);
  private readonly ADS_CONFIG: IAdsConfig =
    this.configService.get<IAdsConfig>('ADS_CONFIG');

  async refreshAccessToken(): Promise<string> {
    let ads_access_token: string =
      await this.cacheManager.get('ads_access_token');

    if (!ads_access_token) {
      this.logger.log('Generating new Amazon Ads access token');
      const response = await this.axiosService.postAxios(
        `${this.ADS_CONFIG.ADS_AUTH_API}/auth/o2/token`,
        new URLSearchParams({
          grant_type: this.ADS_CONFIG.ADS_GRANT_TYPE,
          refresh_token: this.ADS_CONFIG.ADS_REFRESH_TOKEN,
          client_id: this.ADS_CONFIG.ADS_CLIENT_ID,
          client_secret: this.ADS_CONFIG.ADS_CLIENT_SECRET,
        }),
      );
      const { access_token }: IAdsAuthResponse = response?.data;
      await this.cacheManager.set('ads_access_token', access_token);
      ads_access_token = access_token;
    } else {
      this.logger.log('Retrieving Amazon Ads access token from cache');
    }
    return ads_access_token;
  }
}
