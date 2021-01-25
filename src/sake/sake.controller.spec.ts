import { Test, TestingModule } from '@nestjs/testing';
import { SakeController } from './sake.controller';

describe('SakeController', () => {
  let controller: SakeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SakeController],
    }).compile();

    controller = module.get<SakeController>(SakeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
