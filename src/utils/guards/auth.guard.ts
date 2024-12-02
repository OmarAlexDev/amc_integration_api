import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/auth.service';
import { IAwsConfig } from '../interfaces';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private configService: ConfigService,
  ) {}

  private readonly AWS_CONFIG: IAwsConfig =
    this.configService.get<IAwsConfig>('AWS_CONFIG');
  private readonly logger = new Logger(AuthGuard.name);

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const token: string = context.switchToHttp().getRequest().raw.token;
    const decodedToken = this.authService.verifyJsonWebToken(token);
    if (
      decodedToken &&
      typeof decodedToken === 'object' &&
      decodedToken.access_key === this.AWS_CONFIG.AWS_ACCESS_KEY &&
      decodedToken.secret_key === this.AWS_CONFIG.AWS_SECRET_KEY
    ) {
      return true;
    } else {
      const error: string = 'jwt signed with unauthorized credentials';
      this.logger.error(error);
      throw new ForbiddenException(error);
    }
  }
}
