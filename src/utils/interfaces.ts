import { FastifyRequest } from 'fastify';

export interface Itoken {
  access_key: string;
  secret_key: string;
}

export interface IAwsConfig {
  AWS_BUCKET_NAME: string;
  AWS_BUCKET_REGION: string;
  AWS_ACCESS_KEY: string;
  AWS_SECRET_KEY: string;
}

export interface IAdsConfig {
  ADS_REFRESH_TOKEN: string;
  ADS_GRANT_TYPE: string;
  ADS_CLIENT_ID: string;
  ADS_CLIENT_SECRET: string;
  ADS_AUTH_API: string;
  ADS_AMC_API: string;
  ADS_AMC_INSTANCE: string;
}

export interface IS3Item {
  Key?: string;
  LastModified?: Date;
  ETag?: string;
  Size?: number;
  StorageClass?: string;
  owner?: {
    DisplayName: string;
    ID: string;
  };
}

export interface IAdsAuthResponse {
  access_token: string;
  refresh_token: string;
  token_type?: string;
  expires_in?: number;
}

export interface CustomRequest extends FastifyRequest {
  token?: string;
  ads_token?: string;
}

export interface IWorkflowResponse {
  sqlQuery: string;
  workflowId: string;
  distinctUserCountColumn?: string;
  filteredMetricsDiscriminatorColumn?: string;
  filteredReasonColumn?: string;
  inputSchema?: string;
  privacyFilteringBehavior?: string;
  query?: string;
}

export interface IYearMapItem {
  date: string;
  month: string;
}

export interface IExecutionParams {
  workflowId: string;
  timeWindowType: string;
  timeWindowStart: string;
  timeWindowEnd: string;
  ignoreDataGaps: boolean;
  useAsyncValidation: boolean;
}

export interface IExecutionResponse {
  workflowExecutionId: string;
  outputS3URI: string;
  status: string;
}

export interface IReportMetadata {
  key: string;
  date: Date;
}
