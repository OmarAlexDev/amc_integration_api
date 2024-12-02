import {
  IsOptional,
  IsNotEmpty,
  IsBoolean,
  IsString,
  IsNumber,
} from 'class-validator';

export class CreateWorkflowExecutionDto {
  @IsString()
  @IsNotEmpty()
  workflowId: string;

  @IsString()
  @IsOptional()
  timeWindowType: string;

  @IsString()
  @IsOptional()
  timeWindowStart: string;

  @IsString()
  @IsOptional()
  timeWindowEnd: string;

  @IsString()
  @IsOptional()
  timeWindowTimeZone: string;

  @IsBoolean()
  @IsOptional()
  ignoreDataGaps: boolean;

  @IsOptional()
  @IsBoolean()
  disableAggregationControls: boolean;

  @IsOptional()
  @IsBoolean()
  requireSyntheticData: boolean;

  @IsNumber()
  @IsOptional()
  workflowExecutionTimeoutSeconds: number;

  @IsOptional()
  @IsBoolean()
  skipPublish: boolean;
}
