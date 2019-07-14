import { users as Users } from './users.entity';
import { UsersService } from './users.service';
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    async findAll(): Promise<any>{
        return this.usersService.getUsersAndPhotos();
    }
}
