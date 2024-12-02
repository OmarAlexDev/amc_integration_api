import { Test, TestingModule } from '@nestjs/testing';
import { AutomatedController } from './automated.controller';

describe('AutomatedController', () => {
  let controller: AutomatedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutomatedController],
    }).compile();

    controller = module.get<AutomatedController>(AutomatedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
