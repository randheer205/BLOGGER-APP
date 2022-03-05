/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BlogEntity } from "src/entity/blog.entity";
import { UserModule } from "src/users/users.module";
import { BlogRepository } from "./blogs.repository";
import { BlogServices } from "./blogs.service";
import { BlogsController } from "./blogs.controller";
import { BlogCommentRepository } from "./blog.comments.repository";

@Module({
    imports: [TypeOrmModule.forFeature([BlogRepository, BlogCommentRepository]), UserModule],
    controllers: [BlogsController,],
    providers: [BlogServices],

})

export class BlogsModule { }