import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { WorkflowsService } from './workflows.service';
import { AuthGuard } from 'src/utils/guards/auth.guard';
import { RefreshTokenInterceptor } from 'src/utils/interceptors/refresh-token.interceptor';
import { CustomRequest } from 'src/utils/interfaces';
import { CreateWorkflowDto } from './dtos/create-workflow.dto';
import { CheckWorkflowIdDto } from './dtos/check-workflow-id.dto';

@Controller('workflows')
@UseGuards(AuthGuard)
@UseInterceptors(RefreshTokenInterceptor)
export class WorkflowsController {
  constructor(private workflowsService: WorkflowsService) {}

  @Get()
  async getAllWorkflows(@Req() { ads_token }: CustomRequest) {
    return this.workflowsService.getAllWorkflows(ads_token);
  }

  @Get('/:workflowId')
  async getWorkflow(
    @Req() { ads_token }: CustomRequest,
    @Param() { workflowId }: CheckWorkflowIdDto,
  ) {
    return this.workflowsService.getWorkflow(ads_token, workflowId);
  }

  @Post()
  async createWorkflow(
    @Req() { ads_token }: CustomRequest,
    @Body() body: CreateWorkflowDto,
  ) {
    return this.workflowsService.createWorkflow(ads_token, body);
  }

  @Put('/:workflowId')
  async updateWorkflow(
    @Req() { ads_token }: CustomRequest,
    @Param() { workflowId }: CheckWorkflowIdDto,
    @Body() body: CreateWorkflowDto,
  ) {
    return this.workflowsService.updateWorkflow(ads_token, workflowId, body);
  }

  @Delete('/:workflowId')
  async deleteWorkflow(
    @Req() { ads_token }: CustomRequest,
    @Param() { workflowId }: CheckWorkflowIdDto,
  ) {
    return this.workflowsService.deleteWorkflow(ads_token, workflowId);
  }
}
