import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Budget } from '../budget/budget.entity';
import { Category } from '../category/category.entity';

@Entity()
export class Planned_Expense {
  @PrimaryGeneratedColumn('uuid')
  plannedExpense_id: string;
  
  @Column('float')
  amount: number

  @ManyToOne(() => Budget, (budget) => budget.planned_expenses)
  budget: Budget

  @ManyToOne(() => Category, (category) => category.planned_expenses)
  category: Category

}