import { IsNotEmpty, IsString } from 'class-validator';

export class CheckWorkflowIdDto {
  @IsString()
  @IsNotEmpty()
  workflowId: string;
}
