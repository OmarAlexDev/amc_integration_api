import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {cors: true}
  );
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT || 3000, "0.0.0.0");
  console.log(`Starting in port ${process.env.PORT || 3000}`);
}
bootstrap();
