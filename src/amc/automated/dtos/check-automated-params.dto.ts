import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Max,
  Min,
} from 'class-validator';

export class CheckAutomatedParamsDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(12)
  @Transform(({ value }) => parseInt(value))
  timeWindow: number;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => {
    return Boolean(Number(value));
  })
  update: boolean = false;
}
