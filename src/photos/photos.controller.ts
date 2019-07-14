import { Controller, Get } from '@nestjs/common';
import { photos } from './photos.entity';
import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotosController {
    constructor(
        private readonly photosService: PhotosService
    ) { }

    @Get()
    async getPhotos(): Promise<Array<photos>> { 
        return await this.photosService.getPhotos();
    }
}
