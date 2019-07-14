import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { photos } from './photos.entity';

@Injectable()
export class PhotosService {
    constructor(
        @InjectRepository(photos) private readonly photosRepo: Repository<photos>
    ) { }

    async getPhotos():Promise<Array<photos>> { 
        return await this.photosRepo.find({ relations: ['user', 'commentss']}); 
    }
}
