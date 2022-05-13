import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Budget } from '../budget/budget.entity';
import { Category } from '../category/category.entity';

@Entity()
export class Real_Income {
  @PrimaryGeneratedColumn('uuid')
  realExpense_id: string;
  
  @Column('float')
  amount: number
  
  
  @Column()
  date: Date
  
  @ManyToMany(() => Budget, budget => budget.real_income)
  budget : Budget
  
  @ManyToMany(() => Category, category => category.real_income)
  category : Category
}