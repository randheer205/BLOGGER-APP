/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/entity/user.entity";
import { BlogCommentRepository } from "./blog.comments.repository";
import { BlogTag } from "./blog.tag.enum";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BlogRepository } from "./blogs.repository"
import { BlogTemplateDto } from "./dto/blog.template.dto";

@Injectable()
export class BlogServices {
        //IT WORKS DO NOT TOUCH IT(EXCEPT FOR COMMENTS SECTION)--|
        //                          V
    constructor(@InjectRepository(BlogRepository) private blogRepository: BlogRepository, @InjectRepository(BlogCommentRepository) private blogCommentRepository: BlogCommentRepository) {

    }
    createBlog(blogTitle: string, blogContent: string, blogTags: BlogTag, blogDate: Date, user: UserEntity) {
        return this.blogRepository.createBlog(blogTitle, blogContent, blogTags, blogDate, user);
    }

    getBlogsByTags(blogTags: BlogTag, blogTitle: string) {
        return this.blogRepository.getBlogsByTags(blogTags, blogTitle);
    }

    deleteBlog(id: number, user: UserEntity,) {
        return this.blogRepository.deleteBlog(id, user);
    }

    getBlogById(id: number) {
        return this.blogRepository.getBlogById(id);  
    }

    // I DONT KNOW WHICH ONE OF THESE WORKS AS THEY ARE SUPPOSED TO BE?
    //BUT PLEASE DO NOT TOUCH THEM AS THEY ARE WORKING ......SOMEWHAT FINE

    addComment(id: number, userComment: string, user: UserEntity) {
        return this.blogCommentRepository.addComment(id, userComment, user);
    }

    getBlogList() {
        return this.blogRepository.getBlogList();
    }

    getComments(id: number) {
        return this.blogCommentRepository.getComments(id);
    }
    delcomments(id:number)
    {
        return this.blogCommentRepository.delComments(id)
    }

}