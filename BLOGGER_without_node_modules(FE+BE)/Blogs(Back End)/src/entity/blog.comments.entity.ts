/* eslint-disable prettier/prettier */

import { IsNotEmpty } from "class-validator";
import { type } from "os";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { BlogEntity } from "./blog.entity";

@Entity('comment')
export class BlogCommentEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userName: string;

    @IsNotEmpty()
    @Column()
    userComment: string;

    @IsNotEmpty()
    @Column()
    blogId: number;

    @ManyToOne(type => BlogEntity, blog => blog.comments, { eager: true })
    blog: BlogEntity;
}