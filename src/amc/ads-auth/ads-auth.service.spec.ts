import { Test, TestingModule } from '@nestjs/testing';
import { AdsAuthService } from './ads-auth.service';

describe('AdsAuthService', () => {
  let service: AdsAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdsAuthService],
    }).compile();

    service = module.get<AdsAuthService>(AdsAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
