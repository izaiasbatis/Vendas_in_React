import { Controller, Post,Body } from '@nestjs/common';
import { CreateUserDto } from './dtos-dados_que_user_inform/createUser.dto';

@Controller('user')
export class UserController {

    @Post()
    async createUser(
        @Body() createUser: CreateUserDto
    ) {
        return {
            ...createUser,
            password: undefined,
        };
    }
}
