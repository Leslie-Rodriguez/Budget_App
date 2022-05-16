import { Test, TestingModule } from '@nestjs/testing';
import { RealIncomeService } from './real_income.service';

describe('RealIncomeService', () => {
  let service: RealIncomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RealIncomeService],
    }).compile();

    service = module.get<RealIncomeService>(RealIncomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
