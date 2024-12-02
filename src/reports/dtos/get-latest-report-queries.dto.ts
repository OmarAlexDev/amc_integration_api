import { Transform } from 'class-transformer';
import { IsOptional, Max, Min } from 'class-validator';

export class getLatestReportQueriesDto {
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @Max(12)
  @Min(1)
  month: number;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @Max(new Date().getFullYear())
  @Min(2023)
  year: number;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @Max(5)
  @Min(1)
  week: number;
}
