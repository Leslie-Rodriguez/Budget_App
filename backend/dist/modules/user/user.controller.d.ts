import { UserService } from './user.service';
import { InsertUserDto } from './dto/insert-user.dto';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    remove(id: string): Promise<void>;
    addUser(insertUserDto: InsertUserDto): Promise<User>;
    update(user_id: string, userData: UpdateUserDto): Promise<User>;
}
