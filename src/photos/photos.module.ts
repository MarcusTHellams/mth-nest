import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { photos } from './photos.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([photos])
  ],
  controllers: [PhotosController],
  providers: [PhotosService]
})
export class PhotosModule {}
