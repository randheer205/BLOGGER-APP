/* eslint-disable prettier/prettier */
import { NotFoundException } from "@nestjs/common";
import { BlogEntity } from "src/entity/blog.entity";
import { UserEntity } from "src/entity/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { BlogTag } from "./blog.tag.enum";


@EntityRepository(BlogEntity)
export class BlogRepository extends Repository<BlogEntity>{

    async createBlog(blogTitle: string, blogContent: string, blogTags: BlogTag, blogDate: Date, user: UserEntity,) {

        if (blogTitle.length === 0 && blogContent.length === 0) {
            return 'Blog title and Blog content cannot be empty';
        }
        
        //IT WORKS DO NOT TOUCH IT--|
        //                          V

        const blog = new BlogEntity();
        blog.blogTitle = blogTitle;
        blog.blogContent = blogContent;
        blog.blogTags = blogTags;
        blog.blogDate = blogDate;
        blog.userId = user.id;
        await blog.save();
        return blog;
    }

    async getBlogsByTags(blogTags: BlogTag, blogTitle: string) {
        const query = this.createQueryBuilder('blogs')
        query.andWhere('blogTags LIKE  :blogTags  OR blogTitle LIKE  :blogTitle ', { blogTags: "%"+blogTags+"%", blogTitle: "%"+blogTitle+"%" })
        return query.getMany();
    }

    async deleteBlog(id: number, user: UserEntity,) {

        const query = this.createQueryBuilder('blogs')

        query.andWhere('id=:id', { id: id });
        query.andWhere('blogs.userId=:userId', { userId: user.id })

        const blog = query.getOne()
        if (await blog) {
            this.delete(await blog);
        }
        else {
            throw new NotFoundException('Blog not found');
        }
    }

    async getBlogById(id: number) {
        const query = this.createQueryBuilder('blogs');
        query.andWhere('id=:id', { id: id });
        const blog =await query.getOne();
        if (blog) {
            console.log('inside blog: ' + blog.blogTitle)
            return blog;
        }
        throw new NotFoundException('Blog not found')
    }

    async getBlogList() {
        const query = this.createQueryBuilder('blogs');
        return await query.getMany()
        /* const bloglist = this.find()
        if (await bloglist) {
            return await bloglist;
        }
        else {
            return 'No blogs yet.'
        } */
    }

    async getComments(blog: BlogEntity, user: UserEntity,) {

        const query = this.createQueryBuilder('comments')
        query.andWhere('comments.blogId=:blogId', { blogId: blog.id })
        const comments = query.getMany();
        if (await comments) {
            return await comments;
        }
        else {
            return 'No Comments yet';
        }
    }

}
