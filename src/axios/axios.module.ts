import { Module } from '@nestjs/common';
import { AxiosService } from './axios.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [AxiosService],
  imports: [HttpModule],
  exports: [AxiosService],
})
export class AxiosModule {}
