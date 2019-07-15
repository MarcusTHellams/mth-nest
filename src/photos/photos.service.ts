import { users } from './../users/users.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { photos } from './photos.entity';

@Injectable()
export class PhotosService {
    constructor(
        @InjectRepository(photos) private readonly photosRepo: Repository<photos>,
        @InjectRepository(users) private readonly usersRepo: Repository<users>,
    ) { }

    async getPhotos():Promise<Array<photos>> { 
        return await this.photosRepo.find({ relations: ['user', 'commentss']}); 
    }

    async getPhotosWithQueryBuilder(): Promise<any>{
        return this.photosRepo
            .createQueryBuilder()
            .innerJoinAndSelect('photos.user', 'user')
            .innerJoinAndSelect('photos.commentss', 'comments')
            .innerJoinAndSelect('comments.user', 'comment_author')
            .orderBy({ 'photos.id': 'DESC' })
            .getMany()
    }

    async createPhoto(photo: photos, user_id: number): Promise<photos> {
        const newPhoto = await this.photosRepo.create(photo);
        const user = await this.usersRepo.findOne(user_id);
        newPhoto.user = user;
        return this.photosRepo.save(newPhoto);
     }
}
