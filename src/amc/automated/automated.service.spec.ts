import { Test, TestingModule } from '@nestjs/testing';
import { AutomatedService } from './automated.service';

describe('AutomatedService', () => {
  let service: AutomatedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutomatedService],
    }).compile();

    service = module.get<AutomatedService>(AutomatedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
