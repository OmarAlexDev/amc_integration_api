import { IsNotEmpty, IsString } from 'class-validator';

export class getReportDto {
  @IsString()
  @IsNotEmpty()
  file_name: string;
}
