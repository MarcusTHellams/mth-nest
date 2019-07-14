import { Injectable } from '@nestjs/common';
import { users as Users } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly usersRepo: Repository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return await this.usersRepo.find();
  }

  async getUsersAndPhotos() {
      return await this.usersRepo
          .createQueryBuilder()
          .select()
          .innerJoinAndSelect('users.photoss', 'photos')
          .orderBy('username', 'DESC')
          .getMany();
  }
}
