import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModel } from './user.model';
import { User } from './user.entity';
import { InsertUserDto } from './dto/insert-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    //users: User[] = [];
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
      ) {}

    insertUser(insertUserDto: InsertUserDto) {
        //const newUser = new UserModel(user.name, user.last_name, user.username, user.username, user.budget);
        const user = new User();
        user.name = insertUserDto.name;
        user.last_name = insertUserDto.last_name;
        user.username = insertUserDto.username;
        user.password = insertUserDto.password;
        //user.budget = insertUserDto.budget;
        //this.usersRepository.save(user);/
        return this.usersRepository.save(user);
    }

    async findAll(): Promise<User[]> {
        return this.usersRepository.find();
      }
    
    findOne(user_id: string): Promise<User> {
        return this.usersRepository.findOne({where: {user_id: user_id }});
    }
    
    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }

    async update(user_id: string, updateUserDto: UpdateUserDto): Promise<User> {
        const user = await this.usersRepository.preload({
            user_id: user_id,
            ...updateUserDto,
        });
        if (!user) {
          throw new NotFoundException(`Item ${user_id} not found`);
        }
        return this.usersRepository.save(user);
      }
     
}
