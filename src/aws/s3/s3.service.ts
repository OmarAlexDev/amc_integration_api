import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IAwsConfig } from 'src/utils/interfaces';
import {
  S3Client,
  ListObjectsCommand,
  GetObjectCommand,
  _Object,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

@Injectable()
export class S3Service {
  constructor(private configService: ConfigService) {}

  private readonly AWS_CONFIG: IAwsConfig =
    this.configService.get<IAwsConfig>('AWS_CONFIG');
  private readonly logger = new Logger(S3Service.name);

  private readonly client = new S3Client({
    region: this.AWS_CONFIG.AWS_BUCKET_REGION,
    credentials: {
      accessKeyId: this.AWS_CONFIG.AWS_ACCESS_KEY,
      secretAccessKey: this.AWS_CONFIG.AWS_SECRET_KEY,
    },
  });

  async getBucketContents(): Promise<_Object[] | null> {
    const command = new ListObjectsCommand({
      Bucket: this.AWS_CONFIG.AWS_BUCKET_NAME,
    });
    try {
      const result = await this.client.send(command);
      this.logger.debug(result.Contents);
      return result.Contents ? result.Contents : null;
    } catch (err) {
      this.logger.error(err);
      throw new Error(err);
    }
  }

  async getFilteredBucketContents(
    schedule_name: string,
  ): Promise<_Object[] | null> {
    const command = new ListObjectsCommand({
      Bucket: this.AWS_CONFIG.AWS_BUCKET_NAME,
      Prefix: `workflow=${schedule_name}`,
    });
    try {
      const result = await this.client.send(command);
      this.logger.debug(result.Contents);
      return result.Contents ? result.Contents : null;
    } catch (err) {
      this.logger.error(err);
      throw new Error(err);
    }
  }

  async getFileURL(file_name: string): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: this.AWS_CONFIG.AWS_BUCKET_NAME,
      Key: file_name,
    });

    try {
      const url: string = await getSignedUrl(this.client, command, {
        expiresIn: 3600,
      });
      this.logger.debug(url);
      return url;
    } catch (err) {
      this.logger.error(err);
      throw new Error(err);
    }
  }
}
