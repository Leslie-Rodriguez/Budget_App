import { Budget } from '../budget/budget.entity';
import { Category } from '../category/category.entity';
export declare class Planned_Income {
    plannedIncome_id: string;
    amount: number;
    budget: Budget;
    category: Category;
}
