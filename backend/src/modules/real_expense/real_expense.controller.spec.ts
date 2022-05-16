import { Test, TestingModule } from '@nestjs/testing';
import { RealExpenseController } from './real_expense.controller';

describe('RealExpenseController', () => {
  let controller: RealExpenseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RealExpenseController],
    }).compile();

    controller = module.get<RealExpenseController>(RealExpenseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
