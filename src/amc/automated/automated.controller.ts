import {
  Controller,
  Get,
  Param,
  Query,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from 'src/utils/guards/auth.guard';
import { RefreshTokenInterceptor } from 'src/utils/interceptors/refresh-token.interceptor';
import { AutomatedService } from './automated.service';
import { CustomRequest } from 'src/utils/interfaces';
import { CheckWorkflowIdDto } from '../workflows/dtos/check-workflow-id.dto';
import { CheckAutomatedParamsDto } from './dtos/check-automated-params.dto';

@Controller('automated')
@UseGuards(AuthGuard)
@UseInterceptors(RefreshTokenInterceptor)
export class AutomatedController {
  constructor(private automatedService: AutomatedService) {}

  @Get('/:workflowId')
  async getAutomatedWorkflow(
    @Req() { ads_token }: CustomRequest,
    @Param() { workflowId }: CheckWorkflowIdDto,
    @Query() param_queries: CheckAutomatedParamsDto,
  ) {
    return await this.automatedService.getAutomatedWorkflow(
      ads_token,
      workflowId,
      param_queries,
    );
  }
}
