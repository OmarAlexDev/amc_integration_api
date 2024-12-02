import { Test, TestingModule } from '@nestjs/testing';
import { AdsAuthController } from './ads-auth.controller';

describe('AdsAuthController', () => {
  let controller: AdsAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdsAuthController],
    }).compile();

    controller = module.get<AdsAuthController>(AdsAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
