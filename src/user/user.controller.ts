import { Controller, Post,Body } from '@nestjs/common';
import { CreateUserDto } from './dtos-dados_que_user_inform/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Post()
    async createUser(
        @Body() createUser: CreateUserDto
    ) {
        return this.userService.createUser(createUser);
    }
}
