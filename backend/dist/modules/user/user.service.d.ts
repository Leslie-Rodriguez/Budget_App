import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InsertUserDto } from './dto/insert-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    insertUser(insertUserDto: InsertUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(user_id: string): Promise<User>;
    remove(id: string): Promise<void>;
    update(user_id: string, updateUserDto: UpdateUserDto): Promise<User>;
}
