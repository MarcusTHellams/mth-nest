import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import {join} from 'path';
import { PhotosModule } from './photos/photos.module';
import { TagsModule } from './tags/tags.module';
import { UsersModule } from './users/users.module';
import { FollowsModule } from './follows/follows.module';
import { LikesModule } from './likes/likes.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'ig_clone',
        entities: [join(__dirname, '**/**.entity{.ts,.js}')],
        synchronize: false
    }),
    PhotosModule,
    TagsModule,
    UsersModule,
    FollowsModule,
    LikesModule,
    CommentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
