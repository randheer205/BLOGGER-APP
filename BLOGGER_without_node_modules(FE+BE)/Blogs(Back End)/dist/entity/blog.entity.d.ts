import { BaseEntity } from 'typeorm';
import { UserEntity } from './user.entity';
import { BlogCommentEntity } from 'src/entity/blog.comments.entity';
import { BlogTag } from 'src/blogs/blog.tag.enum';
export declare class BlogEntity extends BaseEntity {
    id: number;
    blogTitle: string;
    blogContent: string;
    blogTags: BlogTag;
    blogDate: Date;
    blogRating: number;
    userId: number;
    user: UserEntity;
    comments: BlogCommentEntity[];
}
