import { Budget } from '../budget/budget.entity';
import { Category } from '../category/category.entity';
export declare class Real_Income {
    realExpense_id: string;
    amount: number;
    date: Date;
    budget: Budget;
    category: Category;
}
