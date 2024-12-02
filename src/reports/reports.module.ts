import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { AuthModule } from 'src/auth/auth.module';
import { AwsModule } from 'src/aws/aws.module';
import { AxiosModule } from 'src/axios/axios.module';

@Module({
  controllers: [ReportsController],
  providers: [ReportsService],
  imports: [AuthModule, AwsModule, AxiosModule],
})
export class ReportsModule {}
