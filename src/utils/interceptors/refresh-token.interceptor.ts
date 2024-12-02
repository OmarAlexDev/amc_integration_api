import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { CustomRequest } from '../interfaces';
import { AdsAuthService } from 'src/amc/ads-auth/ads-auth.service';

@Injectable()
export class RefreshTokenInterceptor implements NestInterceptor {
  constructor(private authService: AdsAuthService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    const req: CustomRequest = context.switchToHttp().getRequest();
    const ads_access_token: string =
      await this.authService.refreshAccessToken();
    req.ads_token = ads_access_token;
    return next.handle().pipe();
  }
}
