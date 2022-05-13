import { Entity, Column, PrimaryGeneratedColumn , ManyToMany, JoinTable, OneToMany} from 'typeorm';
import { User } from '../user/user.entity';
import { Planned_Expense } from '../planned_expense/planned_expense.entity';
import { Planned_Income } from '../planned_income/planned_income.entity';
import { Real_Expense } from '../real_expense/real_expense.entity';
import { Real_Income } from '../real_income/real_income.entity';

@Entity()
export class Budget {
  @PrimaryGeneratedColumn('uuid')
  budget_id: string;

  @Column()
  init_date: Date;

  @Column()
  final_date: Date;

  @ManyToMany(() => User, user => user.budget, {
      cascade: true
  })
  @JoinTable()
  user: User[]
  
  @OneToMany(() => Planned_Expense, (planned_expense) => planned_expense.budget)
  planned_expenses: Planned_Expense[]

  @OneToMany(() => Planned_Income, (planned_income) => planned_income.budget)
  planned_income: Planned_Income[]

  @OneToMany(() => Real_Expense, (real_expense) => real_expense.budget)
  real_expense: Real_Expense[]

  @OneToMany(() => Real_Income, (real_income) => real_income.budget)
  real_income: Real_Income[]
  //@OneToMany(() => Real_Expense, (planned_income) => planned_income.budget)
//: Real_Expense[]

}