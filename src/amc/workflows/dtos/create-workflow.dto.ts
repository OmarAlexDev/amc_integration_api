import { Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateWorkflowDto {
  @IsNotEmpty()
  @IsString()
  workflowId: string;

  @IsNotEmpty()
  @IsString()
  sqlQuery: string;

  @IsString()
  @IsOptional()
  distinctUserCountColumn: string;

  @IsString()
  @IsOptional()
  filteredMetricsDiscriminatorColumn: string;

  @IsString()
  @IsOptional()
  filteredReasonColumn: string;

  @IsString()
  @IsOptional()
  inputSchema: string;

  @IsOptional()
  @IsString()
  privacyFilteringBehavior: string;

  @IsOptional()
  @IsString({ each: true })
  @Transform(({ value }) => value.toString())
  query: string;
}
