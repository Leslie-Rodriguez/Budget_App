import { Module } from '@nestjs/common';
import { RealExpenseService } from './real_expense.service';

@Module({
  providers: [RealExpenseService]
})
export class RealExpenseModule {}
