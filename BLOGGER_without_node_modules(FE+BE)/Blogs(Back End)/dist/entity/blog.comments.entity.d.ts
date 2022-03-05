import { BaseEntity } from "typeorm";
import { BlogEntity } from "./blog.entity";
export declare class BlogCommentEntity extends BaseEntity {
    id: number;
    userName: string;
    userComment: string;
    blogId: number;
    blog: BlogEntity;
}
