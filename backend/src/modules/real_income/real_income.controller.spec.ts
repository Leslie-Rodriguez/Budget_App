import { Test, TestingModule } from '@nestjs/testing';
import { RealIncomeController } from './real_income.controller';

describe('RealIncomeController', () => {
  let controller: RealIncomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RealIncomeController],
    }).compile();

    controller = module.get<RealIncomeController>(RealIncomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
