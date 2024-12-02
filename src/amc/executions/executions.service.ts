import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosService } from 'src/axios/axios.service';
import { CreateWorkflowExecutionDto } from './dtos/create-workflow-execution.dto';
import { IAdsConfig } from 'src/utils/interfaces';
import { AxiosRequestConfig } from 'axios';

@Injectable()
export class ExecutionsService {
  constructor(
    private axiosService: AxiosService,
    private configService: ConfigService,
  ) {}

  private readonly logger = new Logger(ExecutionsService.name);
  private readonly AWS_CONFIG: IAdsConfig =
    this.configService.get<IAdsConfig>('ADS_CONFIG');
  private custom_headers: AxiosRequestConfig<any> = {
    headers: {
      'Amazon-Advertising-API-ClientId': this.AWS_CONFIG.ADS_CLIENT_ID,
      'Amazon-Advertising-API-MarketplaceId': 'ATVPDKIKX0DER',
      'Amazon-Advertising-API-AdvertiserId': 'ENTITY39879NPVR3RXY',
    },
  };

  async createWorkflowExecution(
    ads_token: string,
    body: Partial<CreateWorkflowExecutionDto>,
  ) {
    this.custom_headers.headers.Authorization = `bearer ${ads_token}`;
    this.logger.log(`Creating workflow execution`);
    const response = await this.axiosService.postAxios(
      `${this.AWS_CONFIG.ADS_AMC_API}/amc/reporting/${this.AWS_CONFIG.ADS_AMC_INSTANCE}/workflowExecutions`,
      body,
      this.custom_headers,
    );
    return response.data;
  }

  async getWorkflowExecution(ads_token: string, workflowId: string) {
    this.custom_headers.headers.Authorization = `bearer ${ads_token}`;
    this.logger.log(`Retrieving workflow execution`);
    const response = await this.axiosService.getAxios(
      `${this.AWS_CONFIG.ADS_AMC_API}/amc/reporting/${this.AWS_CONFIG.ADS_AMC_INSTANCE}/workflowExecutions/${workflowId}`,
      this.custom_headers,
    );
    return response.data;
  }
}
