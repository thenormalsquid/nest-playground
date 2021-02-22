import { Injectable } from '@nestjs/common';
import { SakeService } from 'src/sake/sake.service';

@Injectable()
export class SakeRatingService {
  constructor(private readonly sakeService: SakeService) {
    
  }
}
