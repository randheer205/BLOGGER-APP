"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogServices = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const blog_comments_repository_1 = require("./blog.comments.repository");
const blogs_repository_1 = require("./blogs.repository");
let BlogServices = class BlogServices {
    constructor(blogRepository, blogCommentRepository) {
        this.blogRepository = blogRepository;
        this.blogCommentRepository = blogCommentRepository;
    }
    createBlog(blogTitle, blogContent, blogTags, blogDate, user) {
        return this.blogRepository.createBlog(blogTitle, blogContent, blogTags, blogDate, user);
    }
    getBlogsByTags(blogTags, blogTitle) {
        return this.blogRepository.getBlogsByTags(blogTags, blogTitle);
    }
    deleteBlog(id, user) {
        return this.blogRepository.deleteBlog(id, user);
    }
    getBlogById(id) {
        return this.blogRepository.getBlogById(id);
    }
    addComment(id, userComment, user) {
        return this.blogCommentRepository.addComment(id, userComment, user);
    }
    getBlogList() {
        return this.blogRepository.getBlogList();
    }
    getComments(id) {
        return this.blogCommentRepository.getComments(id);
    }
    delcomments(id) {
        return this.blogCommentRepository.delComments(id);
    }
};
BlogServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(blogs_repository_1.BlogRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(blog_comments_repository_1.BlogCommentRepository)),
    __metadata("design:paramtypes", [blogs_repository_1.BlogRepository, blog_comments_repository_1.BlogCommentRepository])
], BlogServices);
exports.BlogServices = BlogServices;
//# sourceMappingURL=blogs.service.js.map