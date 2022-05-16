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
import { UserController } from './modules/user/user.controller';
import { CategoryController } from './modules/category/category.controller';
import { BudgetController } from './modules/budget/budget.controller';
import { PlannedExpenseController } from './modules/planned_expense/planned_expense.controller';
import { PlannedIncomeController } from './modules/planned_income/planned_income.controller';
import { RealIncomeController } from './modules/real_income/real_income.controller';
import { RealExpenseController } from './modules/real_expense/real_expense.controller';

@Module({
  imports: [ConfigModule.forRoot(),
    /*envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
  }),*/ TypeOrmModule.forRoot(), UserModule, BudgetModule, PlannedIncomeModule, PlannedExpenseModule, RealExpenseModule, RealIncomeModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
