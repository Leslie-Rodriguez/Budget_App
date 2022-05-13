import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Budget } from '../budget/budget.entity';
import { Category } from '../category/category.entity';

@Entity()
export class Planned_Income {
  @PrimaryGeneratedColumn('uuid')
  plannedIncome_id: string;
  
  @Column('float')
  amount: number

  @ManyToMany(() => Budget, budget => budget.planned_income)
  budget : Budget

  @ManyToMany(() => Category, category => category.planned_income)
  category : Category

}