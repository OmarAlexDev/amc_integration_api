import {
  Injectable,
  Logger,
  NotFoundException,
  RequestTimeoutException,
} from '@nestjs/common';
import {
  IExecutionParams,
  IExecutionResponse,
  IWorkflowResponse,
  IYearMapItem,
} from 'src/utils/interfaces';
import { WorkflowsService } from '../workflows/workflows.service';
import { LTV_Sem_1 } from './queries/LifetimeValue_Sem_1';
import { LTV_Sem_2 } from './queries/LifetimeValue_Sem_2';
import { CheckAutomatedParamsDto } from './dtos/check-automated-params.dto';
import { ExecutionsService } from '../executions/executions.service';
import { S3Service } from 'src/aws/s3/s3.service';
import { AxiosService } from 'src/axios/axios.service';
import { Cron } from '@nestjs/schedule';
import { AdsAuthService } from '../ads-auth/ads-auth.service';

@Injectable()
export class AutomatedService {
  constructor(
    private axiosService: AxiosService,
    private workflowsService: WorkflowsService,
    private executionsService: ExecutionsService,
    private adsAuthService: AdsAuthService,
    private s3Service: S3Service,
  ) {}

  private readonly logger = new Logger(AutomatedService.name);

  async getAutomatedWorkflow(
    ads_token: string,
    workflowId: string,
    param_queries: CheckAutomatedParamsDto,
  ) {
    const execution_response = await this.runAutomatedWorkflow(
      ads_token,
      workflowId,
      param_queries,
    );
    return await new Promise((resolve, reject) => {
      let counter: number = 0;
      const loop: NodeJS.Timeout = setInterval(async () => {
        const refresh_response: Partial<IExecutionResponse> =
          await this.executionsService.getWorkflowExecution(
            ads_token,
            execution_response.workflowExecutionId,
          );
        this.logger.log(`Execution status: ${refresh_response.status}`);

        if (refresh_response.status === 'SUCCEEDED') {
          clearInterval(loop);
          const generated_report: string = refresh_response.outputS3URI.replace(
            's3://consumerconnection/',
            '',
          );
          const presignedURL: string =
            await this.s3Service.getFileURL(generated_report);
          const response = await this.axiosService.getAxios(presignedURL, {
            responseType: 'arraybuffer',
            headers: {
              'Content-Type': 'text/csv',
            },
          });
          resolve(response.data);
        } else {
          let loading_counter: number = 120;
          const inner_loop: NodeJS.Timeout = setInterval(() => {
            loading_counter -= 10;
            this.logger.verbose(
              `Re-checking status in ${loading_counter} seconds`,
            );
            if (loading_counter <= 0) {
              clearInterval(inner_loop);
            }
          }, 10000); //Log loading message every 10 sec

          counter++;
          if (counter >= 15) {
            //for a max of 30 min
            clearInterval(loop);
            reject(new RequestTimeoutException());
          }
        }
      }, 120000); //refresh each 2 min
    });
  }

  async runAutomatedWorkflow(
    ads_token: string,
    workflowId: string,
    param_queries: CheckAutomatedParamsDto,
  ): Promise<Partial<IExecutionResponse>> {
    await this.workflowsService.getWorkflow(ads_token, workflowId);
    const query: string = this.selectSQLQuery(workflowId);
    if (!query || query === '') {
      throw new NotFoundException('Not Found', {
        description: `SQL query for *${workflowId}* was not found`,
      });
    }
    this.logger.log('Retrieving SQL from stored queries');
    if (param_queries.update) {
      const body: IWorkflowResponse = {
        sqlQuery: query,
        workflowId: workflowId,
      };
      await this.workflowsService.updateWorkflow(ads_token, workflowId, body);
    }
    return await this.executionsService.createWorkflowExecution(
      ads_token,
      this.getExecutionParams(param_queries.timeWindow, workflowId),
    );
  }

  selectSQLQuery(workflowId: string): string {
    let selectedQuery: string = '';
    switch (workflowId) {
      case 'LifetimeValue_Sem_1':
        selectedQuery = LTV_Sem_1(this.getYearMap());
        break;
      case 'LifetimeValue_Sem_2':
        selectedQuery = LTV_Sem_2(this.getYearMap());
        break;
    }
    return selectedQuery.replace(/(\r\n|\n|\r)/gm, ' ');
  }

  getExecutionParams(timeWindow: number, workflowId: string): IExecutionParams {
    const current_date: Date = new Date();
    let windowStart_date: Date | string = new Date(
      new Date(current_date).setMonth(
        new Date(current_date).getMonth() - timeWindow,
      ),
    );
    windowStart_date =
      new Date(windowStart_date.setDate(1)).toISOString().split('T')[0] +
      'T00:00:00';
    let windowEnd_date: Date | string = new Date(
      new Date(current_date).setDate(1),
    );
    windowEnd_date = windowEnd_date.toISOString().split('T')[0] + 'T00:00:00';
    return {
      workflowId: workflowId,
      timeWindowType: 'EXPLICIT',
      timeWindowStart: windowStart_date,
      timeWindowEnd: windowEnd_date,
      ignoreDataGaps: true,
      useAsyncValidation: true,
    };
  }

  getYearMap(): Map<string, IYearMapItem> {
    const current_date: Date = new Date();
    const dates_map: Map<string, IYearMapItem> = new Map();
    for (let x = 1; x < 13; x++) {
      const full_date: Date = new Date(
        new Date(current_date).setMonth(new Date(current_date).getMonth() - x),
      );
      const month: string = full_date
        .toUTCString()
        .substring(8, 11)
        .toLowerCase();
      const part_date: string = full_date.toISOString().split('T')[0];
      dates_map.set(`month_${13 - x}`, {
        date: part_date.slice(0, -3),
        month: month,
      });
    }
    return dates_map;
  }

  @Cron('0 0 1 * *')
  async updateMonthlyReports() {
    this.logger.log('Monthly cron jobs started');
    const ads_token = await this.adsAuthService.refreshAccessToken();
    await this.runAutomatedWorkflow(ads_token, 'LifetimeValue_Sem_1', {
      update: true,
      timeWindow: 12,
    });
    await this.runAutomatedWorkflow(ads_token, 'LifetimeValue_Sem_2', {
      update: true,
      timeWindow: 12,
    });
  }
}
