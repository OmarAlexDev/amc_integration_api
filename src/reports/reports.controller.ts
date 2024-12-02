import { Controller, Get, Param, UseGuards, Query } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { AuthGuard } from 'src/utils/guards/auth.guard';
import { getLatestReportParamsDto } from './dtos/get-latest-report-params.dto';
import { getLatestReportQueriesDto } from './dtos/get-latest-report-queries.dto';
import { getReportDto } from './dtos/get-report.dto';
import { _Object } from '@aws-sdk/client-s3';

@Controller('reports')
@UseGuards(AuthGuard)
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Get('/')
  async getAllReports(): Promise<_Object[] | null> {
    return await this.reportsService.getAllReports();
  }

  @Get('/download')
  async getReport(
    @Query() { file_name }: getReportDto,
  ): Promise<_Object[] | null> {
    return await this.reportsService.getReport(file_name);
  }

  @Get('/latest/:schedule_name')
  async getLatestReport(
    @Param() { schedule_name }: getLatestReportParamsDto,
    @Query() { month, year, week }: getLatestReportQueriesDto,
  ) {
    return await this.reportsService.getLatestReport(
      schedule_name,
      month,
      year,
      week,
    );
  }
}
