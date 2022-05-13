import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Budget } from '../budget/budget.entity';
import { Category } from '../category/category.entity';

@Entity()
export class Real_Expense {
  @PrimaryGeneratedColumn('uuid')
  realExpense_id: string;
  
  @Column('float')
  amount: number

  @Column()
  date: Date

  @ManyToMany(() => Budget, budget => budget.real_expense)
  budget : Budget

  @ManyToMany(() => Category, category => category.real_expense)
  category : Category
}