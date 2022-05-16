import { Planned_Expense } from "src/modules/planned_expense/planned_expense.entity";
import { Planned_Income } from "src/modules/planned_income/planned_income.entity";
import { Real_Expense } from "src/modules/real_expense/real_expense.entity";
import { Real_Income } from "src/modules/real_income/real_income.entity";
export declare class UpdateCategoryDto {
    name: string;
    description: string;
    planned_expenses: Planned_Expense[];
    planned_income: Planned_Income[];
    real_expense: Real_Expense[];
    real_income: Real_Income[];
}
