import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { photos } from './photos.entity';
import { UsersModule } from 'src/users/users.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([photos]),
    UsersModule
  ],
  controllers: [PhotosController],
  providers: [PhotosService]
})
export class PhotosModule {}
