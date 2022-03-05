"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRepository = void 0;
const common_1 = require("@nestjs/common");
const blog_entity_1 = require("../entity/blog.entity");
const typeorm_1 = require("typeorm");
let BlogRepository = class BlogRepository extends typeorm_1.Repository {
    async createBlog(blogTitle, blogContent, blogTags, blogDate, user) {
        if (blogTitle.length === 0 && blogContent.length === 0) {
            return 'Blog title and Blog content cannot be empty';
        }
        const blog = new blog_entity_1.BlogEntity();
        blog.blogTitle = blogTitle;
        blog.blogContent = blogContent;
        blog.blogTags = blogTags;
        blog.blogDate = blogDate;
        blog.userId = user.id;
        await blog.save();
        return blog;
    }
    async getBlogsByTags(blogTags, blogTitle) {
        const query = this.createQueryBuilder('blogs');
        query.andWhere('blogTags LIKE  :blogTags  OR blogTitle LIKE  :blogTitle ', { blogTags: "%" + blogTags + "%", blogTitle: "%" + blogTitle + "%" });
        return query.getMany();
    }
    async deleteBlog(id, user) {
        const query = this.createQueryBuilder('blogs');
        query.andWhere('id=:id', { id: id });
        query.andWhere('blogs.userId=:userId', { userId: user.id });
        const blog = query.getOne();
        if (await blog) {
            this.delete(await blog);
        }
        else {
            throw new common_1.NotFoundException('Blog not found');
        }
    }
    async getBlogById(id) {
        const query = this.createQueryBuilder('blogs');
        query.andWhere('id=:id', { id: id });
        const blog = await query.getOne();
        if (blog) {
            console.log('inside blog: ' + blog.blogTitle);
            return blog;
        }
        throw new common_1.NotFoundException('Blog not found');
    }
    async getBlogList() {
        const query = this.createQueryBuilder('blogs');
        return await query.getMany();
    }
    async getComments(blog, user) {
        const query = this.createQueryBuilder('comments');
        query.andWhere('comments.blogId=:blogId', { blogId: blog.id });
        const comments = query.getMany();
        if (await comments) {
            return await comments;
        }
        else {
            return 'No Comments yet';
        }
    }
};
BlogRepository = __decorate([
    (0, typeorm_1.EntityRepository)(blog_entity_1.BlogEntity)
], BlogRepository);
exports.BlogRepository = BlogRepository;
//# sourceMappingURL=blogs.repository.js.map