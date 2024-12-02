import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { GenerateTokenDto } from './dtos/generate-token.dto';
import { ConfigService } from '@nestjs/config';
import { JwtPayload, sign, verify } from 'jsonwebtoken';
import { Itoken } from 'src/utils/interfaces';

@Injectable()
export class AuthService {
  constructor(private configService: ConfigService) {}

  private readonly logger = new Logger(AuthService.name);
  private readonly SECRET = this.configService.get<string>('SECRET');

  generateToken(credentials: GenerateTokenDto) {
    const token = this.signJsonWebToken(credentials);
    return { token: token };
  }

  signJsonWebToken(content: any): string {
    try {
      this.logger.log('Signing JWT');
      return sign(content, this.SECRET);
    } catch (err) {
      this.logger.error(err.message);
      throw new ConflictException('JWTError', { description: err.message });
    }
  }

  verifyJsonWebToken(token: string): string | JwtPayload | Itoken {
    try {
      this.logger.log('Verifying JWT');
      return verify(token, this.SECRET);
    } catch (err) {
      this.logger.error(err.message);
      throw new ConflictException('JWTError', { description: err.message });
    }
  }
}
