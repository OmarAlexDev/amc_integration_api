import { Module } from '@nestjs/common';
import { WorkflowsController } from './workflows/workflows.controller';
import { WorkflowsService } from './workflows/workflows.service';
import { AuthModule } from 'src/auth/auth.module';
import { AxiosModule } from 'src/axios/axios.module';
import { ExecutionsController } from './executions/executions.controller';
import { ExecutionsService } from './executions/executions.service';
import { AutomatedController } from './automated/automated.controller';
import { AutomatedService } from './automated/automated.service';
import { AwsModule } from 'src/aws/aws.module';
import { AdsAuthService } from './ads-auth/ads-auth.service';
import { AdsAuthController } from './ads-auth/ads-auth.controller';

@Module({
  controllers: [
    WorkflowsController,
    ExecutionsController,
    AutomatedController,
    AdsAuthController,
  ],
  providers: [
    WorkflowsService,
    ExecutionsService,
    AutomatedService,
    AdsAuthService,
  ],
  imports: [AuthModule, AxiosModule, AwsModule],
})
export class AmcModule {}
