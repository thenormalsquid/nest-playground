import { Test, TestingModule } from '@nestjs/testing';
import { SakeService } from './sake.service';

describe('SakeService', () => {
  let service: SakeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SakeService],
    }).compile();

    service = module.get<SakeService>(SakeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
