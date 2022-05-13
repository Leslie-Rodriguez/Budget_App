import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Budget } from '../budget/budget.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column()
  name: string;

  @Column()
  last_name: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @ManyToMany(() => Budget, budget => budget.user)
  budget : Budget
  //@Column({ default: true })
  //isActive: boolean;
}