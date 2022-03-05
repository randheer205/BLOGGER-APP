/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
//import { Task } from 'src/tasks/task.model';
import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany, ManyToOne, BaseEntity } from 'typeorm';
import { UserEntity } from './user.entity';
import { IsNotEmpty } from 'class-validator';
import { BlogCommentEntity } from 'src/entity/blog.comments.entity';
import { type } from 'os';
import { BlogTag } from 'src/blogs/blog.tag.enum';

@Entity('blogs')
@Unique(['blogTitle'])
export class BlogEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    blogTitle: string;

    @IsNotEmpty()
    @Column()
    blogContent: string;

    @Column()
    blogTags: BlogTag;

    @Column()
    blogDate: Date;

    @Column()
    blogRating: number;

    @IsNotEmpty()
    @Column()
    userId: number;

    @ManyToOne(type => UserEntity, user => user.blogs, { eager: false })
    user: UserEntity;

    @OneToMany(type => BlogCommentEntity, comment => comment.blog, { eager: false })
    comments: BlogCommentEntity[];
}
