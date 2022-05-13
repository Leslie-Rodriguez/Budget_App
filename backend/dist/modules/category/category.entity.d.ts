import { Planned_Expense } from '../planned_expense/planned_expense.entity';
import { Planned_Income } from '../planned_income/planned_income.entity';
import { Real_Expense } from '../real_expense/real_expense.entity';
import { Real_Income } from '../real_income/real_income.entity';
export declare class Category {
    user_id: string;
    name: string;
    description: string;
    planned_expenses: Planned_Expense[];
    planned_income: Planned_Income[];
    real_expense: Real_Expense[];
    real_income: Real_Income[];
}
