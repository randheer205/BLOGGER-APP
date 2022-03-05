import { UserEntity } from "src/entity/user.entity";
import { BlogTag } from "./blog.tag.enum";
import { BlogServices } from "./blogs.service";
export declare class BlogsController {
    private readonly blogservice;
    constructor(blogservice: BlogServices);
    createBlog(user: UserEntity, blogTitle: string, blogContent: string, blogTags: BlogTag, blogDate: Date): Promise<import("../entity/blog.entity").BlogEntity | "Blog title and Blog content cannot be empty">;
    getBlogsByTags(blogTags: BlogTag, blogTitle: string): Promise<import("../entity/blog.entity").BlogEntity[]>;
    deleteBlog(user: UserEntity, id: number): Promise<void>;
    getBlogById(id: number): Promise<import("../entity/blog.entity").BlogEntity>;
    addComment(id: number, userComment: string, user: UserEntity): Promise<import("../entity/blog.comments.entity").BlogCommentEntity>;
    getBlogList(): Promise<import("../entity/blog.entity").BlogEntity[]>;
    getComments(id: number): Promise<import("./blog.comments.repository").BlogCommentRepository[]>;
    delComments(id: number): Promise<void>;
}
