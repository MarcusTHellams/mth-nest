import { users as Users } from './users.entity';
import { UsersService } from './users.service';
import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Param,
    Delete,
  Put
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(
    @Query('page') page: number = 0,
    @Query('limit') limit: number = 10,
  ): Promise<any> {
    limit = limit > 100 ? 100 : limit;

    return this.usersService.findAll({ page, limit });
  }

  @Get('/:id')
  async findById(@Param('id') id: number) {
    return this.usersService.findUserById(id);
  }

  @Post()
  async createUser(@Body() user: Users) {
    return this.usersService.createUser(user);
  }

  @Delete('/:id')
  async deleteUserById(@Param('id') id: number) {
    return this.usersService.deleteUserById(id);
  }
    
    @Put('/:id')
    async updateUser(@Body() user:Users, @Param('id') id:number){
        return this.usersService.updateUser(user, id);
    }
}
