import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GenerateTokenDto } from './dtos/generate-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post()
  generateToken(@Body() credentials: GenerateTokenDto) {
    return this.service.generateToken(credentials);
  }
}
