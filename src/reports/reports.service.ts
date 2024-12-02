import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { S3Service } from 'src/aws/s3/s3.service';
import { IReportMetadata, IS3Item } from 'src/utils/interfaces';
import { AxiosService } from 'src/axios/axios.service';
import { _Object } from '@aws-sdk/client-s3';

@Injectable()
export class ReportsService {
  constructor(
    private s3Service: S3Service,
    private axiosService: AxiosService,
  ) {}

  private readonly logger = new Logger(ReportsService.name);

  async getAllReports(): Promise<_Object[] | null> {
    this.logger.log('Retrieving all reports');
    return await this.s3Service.getBucketContents();
  }

  async getLatestReport(
    schedule_name: string,
    month: number,
    year: number,
    week: number,
  ) {
    this.logger.log(`Searching for ${schedule_name} reports...`);
    const data: IS3Item[] =
      await this.s3Service.getFilteredBucketContents(schedule_name);
    if (!data) {
      this.logger.error(`No schedules found with prefix: ${schedule_name}`);
      throw new NotFoundException(
        `No schedules found with prefix: ${schedule_name}`,
      );
    }
    const latest_report: string = this.filterReport(data, month, year, week);
    const presignedURL = await this.s3Service.getFileURL(latest_report);
    const response = await this.axiosService.getAxios(presignedURL, {
      method: 'GET',
      responseType: 'arraybuffer',
      headers: { 'Content-Type': 'text/csv' },
    });
    return response.data;
  }

  async getReport(file_name: string) {
    this.logger.log(`Searching for report ${file_name}...`);
    const presignedURL: string = await this.s3Service.getFileURL(file_name);
    const response = await this.axiosService.getAxios(presignedURL, {
      method: 'GET',
      responseType: 'arraybuffer',
      headers: { 'Content-Type': 'text/csv' },
    });
    return response.data;
  }

  filterReport(
    schedules: IS3Item[],
    month: number,
    year: number,
    week: number,
  ) {
    const csvs: IReportMetadata[] = schedules
      .filter((object) => {
        return object.Key.includes('.csv');
      })
      .map((object) => {
        const object_date = object.Key.split('/');
        return { key: object.Key, date: new Date(object_date[2].slice(0, 10)) };
      });

    csvs.sort((a, b) => a.date.getTime() - b.date.getTime());

    let latest: IReportMetadata = csvs[csvs.length - 1];

    if (month || year || week) {
      year = !year ? latest.date.getFullYear() : year;
      let searchDate: Date;
      if (year && month) {
        searchDate = new Date(
          new Date(latest.date).setFullYear(year, month - 1),
        );
      } else if (month && !year) {
        searchDate = new Date(new Date(latest.date).setMonth(month - 1));
      } else {
        searchDate = new Date(new Date(latest.date).setFullYear(year));
      }

      this.logger.log(`Filtering reports by ${searchDate} date...`);

      const prev_csvs: IReportMetadata[] = csvs.filter(
        (c) =>
          c.date.getMonth() === searchDate.getMonth() &&
          c.date.getFullYear() === searchDate.getFullYear(),
      );
      if (prev_csvs.length === 0) {
        this.logger.error(`Data missing for the specified date, accesible data from: ${csvs[0].date.toDateString()} to ${csvs[csvs.length - 1].date.toDateString()}`);
        throw new NotFoundException(
          `Data missing for the specified date, accesible data from: ${csvs[0].date.toDateString()} to ${csvs[csvs.length - 1].date.toDateString()}`,
        );
      }

      latest = prev_csvs[prev_csvs.length - 1];

      if (week) {
        const week_map: Map<number, IReportMetadata> = new Map();
        prev_csvs.forEach((prev) => {
          const days_left: number = prev.date.getUTCDate() / 7;
          if (days_left <= 1) {
            week_map.set(1, prev);
          } else if (days_left <= 2) {
            week_map.set(2, prev);
          } else if (days_left <= 3) {
            week_map.set(3, prev);
          } else if (days_left <= 4) {
            week_map.set(4, prev);
          } else {
            week_map.set(5, prev);
          }
        });

        if (!week_map.has(week)) {
          const it: number[] = Array.from(week_map.keys());
          this.logger.error(`Data missing for week ${week}, data available for weeks: ${it}`);
          throw new NotFoundException(
            `Data missing for week ${week}, data available for weeks: ${it}`,
          );
        }
        latest = week_map.get(week);
      }
    }
    this.logger.log(`Latest report found: ${latest.key}`);
    return latest.key;
  }
}
