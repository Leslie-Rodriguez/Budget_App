import { Module } from '@nestjs/common';
import { PlannedIncomeService } from './planned_income.service';

@Module({
  providers: [PlannedIncomeService]
})
export class PlannedIncomeModule {}
