import { Module } from '@nestjs/common';
import { RealIncomeService } from './real_income.service';

@Module({
  providers: [RealIncomeService]
})
export class RealIncomeModule {}
