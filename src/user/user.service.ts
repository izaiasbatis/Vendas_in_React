import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos-dados_que_user_inform/createUser.dto';
import { User } from './user.interface';
import { hash } from 'bcrypt';
import { promises } from 'dns';

@Injectable()

export class UserService {
    private users: User[] = [];
    async createUser(createUserDto: CreateUserDto): Promise<User>{
        const saltOrRounds = 10;
        const passwordHashed = await hash(createUserDto.password, saltOrRounds);
        console.log('passwordHashed',passwordHashed);
        const user: User = {
            ...createUserDto,
            id: this.users.length+1,
            password: passwordHashed,
        }
        this.users.push(user);
        return user;
        
    }
    async getAllUser(): Promise<User[]>{
        return this.users;
    }
    
}
