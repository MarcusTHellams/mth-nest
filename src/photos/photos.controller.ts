import { Controller, Get, Post, Body } from '@nestjs/common';
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

    @Get('/query')
    async getPhotosWithQueryBuilder(): Promise<Array<photos>> { 
        return await this.photosService.getPhotosWithQueryBuilder();
    }

    @Post()
    async createPhoto(@Body() body: {photo: photos, user_id: number}): Promise<photos>{
        return await this.photosService.createPhoto(body.photo, body.user_id);
    }

    @Post('/create')
    async createPhoto2(@Body() photo: photos): Promise<photos>{
        return await this.photosService.createPhoto2(photo);
    }

}
