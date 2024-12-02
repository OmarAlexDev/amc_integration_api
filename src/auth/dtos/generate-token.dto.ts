import { IsNotEmpty, IsString } from 'class-validator';

export class GenerateTokenDto {
  @IsString()
  @IsNotEmpty()
  access_key: string;

  @IsString()
  @IsNotEmpty()
  secret_key: string;
}
