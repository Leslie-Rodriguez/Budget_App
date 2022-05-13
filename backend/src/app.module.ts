import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { BudgetModule } from './modules/budget/budget.module';
import { PlannedIncomeModule } from './modules/planned_income/planned_income.module';
import { PlannedExpenseModule } from './modules/planned_expense/planned_expense.module';
import { RealExpenseModule } from './modules/real_expense/real_expense.module';
import { RealIncomeModule } from './modules/real_income/real_income.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(), UserModule, BudgetModule, PlannedIncomeModule, PlannedExpenseModule, RealExpenseModule, RealIncomeModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
