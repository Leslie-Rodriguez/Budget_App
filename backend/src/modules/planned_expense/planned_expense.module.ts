import { Module } from '@nestjs/common';
import { PlannedExpenseService } from './planned_expense.service';

@Module({
  providers: [PlannedExpenseService]
})
export class PlannedExpenseModule {}
