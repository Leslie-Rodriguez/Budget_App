import { Test, TestingModule } from '@nestjs/testing';
import { PlannedExpenseController } from './planned_expense.controller';

describe('PlannedExpenseController', () => {
  let controller: PlannedExpenseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlannedExpenseController],
    }).compile();

    controller = module.get<PlannedExpenseController>(PlannedExpenseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
