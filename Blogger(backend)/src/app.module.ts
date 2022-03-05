/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeORMConfiguration } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/users.module';
import { BlogsModule } from './blogs/blogs.module';

@Module({
  imports: [TypeOrmModule.forRoot(TypeORMConfiguration), UserModule, BlogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
