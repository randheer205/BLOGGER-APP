"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogCommentRepository = void 0;
const blog_comments_entity_1 = require("../entity/blog.comments.entity");
const typeorm_1 = require("typeorm");
let BlogCommentRepository = class BlogCommentRepository extends typeorm_1.Repository {
    async addComment(id, userComment, user) {
        const comment = new blog_comments_entity_1.BlogCommentEntity();
        comment.userComment = userComment;
        comment.blogId = id;
        if (user) {
            comment.userName = (user.firstName + user.lastName);
        }
        await comment.save();
        return comment;
    }
    async getComments(id) {
        const query = this.createQueryBuilder('comments');
        query.andWhere('comments.blogId=:blogId', { blogId: id });
        const comments = await query.getMany();
        if (comments) {
            return comments;
        }
    }
    async delComments(id) {
        const query = this.createQueryBuilder('comments');
        query.andWhere('comments.blogId=:blogId', { blogId: id });
        const comments = await query.getMany();
        if (comments.length == 0) {
            console.log("IN HERE");
            return;
        }
        else if (await comments) {
            this.delete(await comments);
        }
    }
};
BlogCommentRepository = __decorate([
    (0, typeorm_1.EntityRepository)(blog_comments_entity_1.BlogCommentEntity)
], BlogCommentRepository);
exports.BlogCommentRepository = BlogCommentRepository;
//# sourceMappingURL=blog.comments.repository.js.map