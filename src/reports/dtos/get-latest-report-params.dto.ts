import { IsNotEmpty } from 'class-validator';

export class getLatestReportParamsDto {
  @IsNotEmpty()
  schedule_name: string;
}
