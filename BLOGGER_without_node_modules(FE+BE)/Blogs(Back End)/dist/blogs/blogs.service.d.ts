import { UserEntity } from "src/entity/user.entity";
import { BlogCommentRepository } from "./blog.comments.repository";
import { BlogTag } from "./blog.tag.enum";
import { BlogRepository } from "./blogs.repository";
export declare class BlogServices {
    private blogRepository;
    private blogCommentRepository;
    constructor(blogRepository: BlogRepository, blogCommentRepository: BlogCommentRepository);
    createBlog(blogTitle: string, blogContent: string, blogTags: BlogTag, blogDate: Date, user: UserEntity): Promise<import("../entity/blog.entity").BlogEntity | "Blog title and Blog content cannot be empty">;
    getBlogsByTags(blogTags: BlogTag, blogTitle: string): Promise<import("../entity/blog.entity").BlogEntity[]>;
    deleteBlog(id: number, user: UserEntity): Promise<void>;
    getBlogById(id: number): Promise<import("../entity/blog.entity").BlogEntity>;
    addComment(id: number, userComment: string, user: UserEntity): Promise<import("../entity/blog.comments.entity").BlogCommentEntity>;
    getBlogList(): Promise<import("../entity/blog.entity").BlogEntity[]>;
    getComments(id: number): Promise<BlogCommentRepository[]>;
    delcomments(id: number): Promise<void>;
}
