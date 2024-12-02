import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CustomRequest } from 'src/utils/interfaces';
import { CheckWorkflowIdDto } from '../workflows/dtos/check-workflow-id.dto';
import { CreateWorkflowExecutionDto } from './dtos/create-workflow-execution.dto';
import { ExecutionsService } from './executions.service';
import { AuthGuard } from 'src/utils/guards/auth.guard';
import { RefreshTokenInterceptor } from 'src/utils/interceptors/refresh-token.interceptor';

@Controller('executions')
@UseGuards(AuthGuard)
@UseInterceptors(RefreshTokenInterceptor)
export class ExecutionsController {
  constructor(private executionsService: ExecutionsService) {}

  @Post()
  async createWorkflowExecution(
    @Req() { ads_token }: CustomRequest,
    @Body() body: CreateWorkflowExecutionDto,
  ) {
    return this.executionsService.createWorkflowExecution(ads_token, body);
  }

  @Get('/:workflowId')
  async getWorkflowExecution(
    @Req() { ads_token }: CustomRequest,
    @Param() { workflowId }: CheckWorkflowIdDto,
  ) {
    return this.executionsService.getWorkflowExecution(ads_token, workflowId);
  }
}
