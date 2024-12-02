import { CacheInterceptor } from '@nestjs/cache-manager';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class HttpCacheInterceptor extends CacheInterceptor {
  private readonly logger = new Logger(HttpCacheInterceptor.name);

  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    return next.handle().pipe(
      tap(async (value) => {
        try {
          await this.cacheManager.set('key', value);
        } catch (err) {
          if (err.message !== 'no cacheable value undefined') {
            this.logger.error(err.message);
          }
        }
      }),
    );
  }
}
