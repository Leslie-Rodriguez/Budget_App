import { Test, TestingModule } from '@nestjs/testing';
import { PlannedIncomeController } from './planned_income.controller';

describe('PlannedIncomeController', () => {
  let controller: PlannedIncomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlannedIncomeController],
    }).compile();

    controller = module.get<PlannedIncomeController>(PlannedIncomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
