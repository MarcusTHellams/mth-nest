import { Injectable } from '@nestjs/common';
import { users as Users } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly usersRepo: Repository<Users>,
  ) {}

  async findAll(options: IPaginationOptions): Promise<Pagination<Users>> {
    return await paginate<Users>(this.usersRepo, options, {
      relations: ['photoss'],
      order: { username: 'DESC' },
    });
  }


  async createUser(user: Users) {
    const newUser = this.usersRepo.create(user)
    return await this.usersRepo.save(newUser);
  }

  async findUserById(id: number) {
    return await this.usersRepo
      .createQueryBuilder()
      .where('users.id = :id', { id })
      .innerJoinAndSelect('users.photoss', 'photos')
      .getOne();
    return this.usersRepo.findOne(id, {
      relations:['photoss']
    });
  }

  async deleteUserById(id: number) {
    return await this.usersRepo.delete(id);
  }

  async updateUser(user: Users, id: number) {
    return await this.usersRepo.update({ id }, user);
  }
}
