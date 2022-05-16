import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { UserService } from './user.service';
import { InsertUserDto } from './dto/insert-user.dto';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}
    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':user_id')
    findOne(@Param('user_id') id: string): Promise<User> {
        return this.userService.findOne(id);
    }

    @Delete(':user_id')
    remove(@Param('user_id') id: string): Promise<void> {
        return this.userService.remove(id);
    }

    @Post()
    addUser(@Body() insertUserDto:InsertUserDto): Promise<User> {
        return this.userService.insertUser(insertUserDto)
    }
    
    @Put(':user_id')
    async update(@Param('user_id') user_id: string, @Body() userData: UpdateUserDto) {
        return await this.userService.update(user_id, userData);
      }

}
