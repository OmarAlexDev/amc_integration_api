import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportsModule } from './reports/reports.module';
import { ConfigModule } from '@nestjs/config';
import { TokenMiddleware } from './utils/middlewares/token.middleware';
import { AmcModule } from './amc/amc.module';
import { AuthModule } from './auth/auth.module';
import configuration from './utils/configuration';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { CacheModule } from '@nestjs/cache-manager';
import { HttpCacheInterceptor } from './utils/interceptors/http-cache.interceptor';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      ignoreEnvFile: true, //enable this to access env variables from runtime environment or disable it to access them from .env
    }),
    CacheModule.register({
      isGlobal: true,
      ttl: 60 * 60000,
    }),
    ScheduleModule.forRoot(),
    ReportsModule,
    AmcModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpCacheInterceptor,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TokenMiddleware)
      .forRoutes('*')
  }
}
