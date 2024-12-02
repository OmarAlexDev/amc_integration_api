import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosService } from 'src/axios/axios.service';
import { IAdsConfig } from 'src/utils/interfaces';
import { CreateWorkflowDto } from './dtos/create-workflow.dto';
import { AxiosRequestConfig } from 'axios';

@Injectable()
export class WorkflowsService {
  constructor(
    private axiosService: AxiosService,
    private configService: ConfigService,
  ) {}

  private readonly logger = new Logger(WorkflowsService.name);
  private readonly AWS_CONFIG: IAdsConfig =
    this.configService.get<IAdsConfig>('ADS_CONFIG');
  private custom_headers: AxiosRequestConfig<any> = {
    headers: {
      'Amazon-Advertising-API-ClientId': this.AWS_CONFIG.ADS_CLIENT_ID,
      'Amazon-Advertising-API-MarketplaceId': 'ATVPDKIKX0DER',
      'Amazon-Advertising-API-AdvertiserId': 'ENTITY39879NPVR3RXY',
    },
  };

  async getAllWorkflows(ads_token: string) {
    this.custom_headers.headers.Authorization = `bearer ${ads_token}`;
    this.logger.log('Retrieving workflows');
    const response = await this.axiosService.getAxios(
      `${this.AWS_CONFIG.ADS_AMC_API}/amc/reporting/${this.AWS_CONFIG.ADS_AMC_INSTANCE}/workflows`,
      this.custom_headers,
    );
    return response.data;
  }

  async getWorkflow(ads_token: string, workflowId: string) {
    this.custom_headers.headers.Authorization = `bearer ${ads_token}`;
    this.logger.log(`Retrieving workflow: ${workflowId}`);
    const response = await this.axiosService.getAxios(
      `${this.AWS_CONFIG.ADS_AMC_API}/amc/reporting/${this.AWS_CONFIG.ADS_AMC_INSTANCE}/workflows/${workflowId}`,
      this.custom_headers,
    );
    return response.data;
  }

  async createWorkflow(ads_token: string, body: Partial<CreateWorkflowDto>) {
    this.custom_headers.headers.Authorization = `bearer ${ads_token}`;
    this.logger.log('Creating new workflow');
    const response = await this.axiosService.postAxios(
      `${this.AWS_CONFIG.ADS_AMC_API}/amc/reporting/${this.AWS_CONFIG.ADS_AMC_INSTANCE}/workflows`,
      body,
      this.custom_headers,
    );
    return response.data;
  }

  async updateWorkflow(
    ads_token: string,
    workflowId: string,
    body: Partial<CreateWorkflowDto>,
  ) {
    this.custom_headers.headers.Authorization = `bearer ${ads_token}`;
    this.logger.log(`Updating workflow ${workflowId}`);
    const response = await this.axiosService.putAxios(
      `${this.AWS_CONFIG.ADS_AMC_API}/amc/reporting/${this.AWS_CONFIG.ADS_AMC_INSTANCE}/workflows/${workflowId}`,
      body,
      this.custom_headers,
    );
    return response.data;
  }

  async deleteWorkflow(ads_token: string, workflowId: string) {
    this.custom_headers.headers.Authorization = `bearer ${ads_token}`;
    this.logger.log(`Deleting workflow ${workflowId}`);
    const response = await this.axiosService.deleteAxios(
      `${this.AWS_CONFIG.ADS_AMC_API}/amc/reporting/${this.AWS_CONFIG.ADS_AMC_INSTANCE}/workflows/${workflowId}`,
      this.custom_headers,
    );
    return response.data;
  }
}
