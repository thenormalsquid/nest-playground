import { Test, TestingModule } from '@nestjs/testing';
import { SakeRatingService } from './sake-rating.service';

describe('SakeRatingService', () => {
  let service: SakeRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SakeRatingService],
    }).compile();

    service = module.get<SakeRatingService>(SakeRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
