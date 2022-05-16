import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Planned_Expense } from '../planned_expense/planned_expense.entity';
import { Planned_Income } from '../planned_income/planned_income.entity';
import { Real_Expense } from '../real_expense/real_expense.entity';
import { Real_Income } from '../real_income/real_income.entity';
@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  category_id: string;

  @Column()
  name: string;

  @Column({default : 'Lorem ipsum dolor sit amet consectetur adipisicing elit'})
  description: string;

  @OneToMany(() => Planned_Expense, (planned_expense) => planned_expense.category)
  planned_expenses: Planned_Expense[]

  @OneToMany(() => Planned_Income, (planned_income) => planned_income.category)
  planned_income: Planned_Income[]

  @OneToMany(() => Real_Expense, (real_expense) => real_expense.category)
  real_expense: Real_Expense[]

  @OneToMany(() => Real_Income, (real_income) => real_income.category)
  real_income: Real_Income[]
}