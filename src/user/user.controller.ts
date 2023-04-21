import { Controller, Post,Body, Get } from '@nestjs/common';
import { CreateUserDto } from './dtos-dados_que_user_inform/createUser.dto';
import { UserService } from './user.service';
import { User } from './user.interface';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Post()
    async createUser(@Body() createUser: CreateUserDto): Promise<User> {
        return this.userService.createUser(createUser);
    }
    @Get()
    async getAllUser(): Promise<User[]>{
        return this.userService.getAllUser();
    }
}
