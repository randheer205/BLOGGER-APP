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
exports.BlogsController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const user_entity_1 = require("../entity/user.entity");
const get_user_decorator_1 = require("../users/get.user.decorator");
const blog_tag_enum_1 = require("./blog.tag.enum");
const blogs_service_1 = require("./blogs.service");
let BlogsController = class BlogsController {
    constructor(blogservice) {
        this.blogservice = blogservice;
    }
    createBlog(user, blogTitle, blogContent, blogTags, blogDate) {
        return this.blogservice.createBlog(blogTitle, blogContent, blogTags, blogDate, user);
    }
    getBlogsByTags(blogTags, blogTitle) {
        return this.blogservice.getBlogsByTags(blogTags, blogTitle);
    }
    deleteBlog(user, id) {
        return this.blogservice.deleteBlog(id, user);
    }
    getBlogById(id) {
        return this.blogservice.getBlogById(id);
    }
    addComment(id, userComment, user) {
        return this.blogservice.addComment(id, userComment, user);
    }
    getBlogList() {
        return this.blogservice.getBlogList();
    }
    getComments(id) {
        return this.blogservice.getComments(id);
    }
    delComments(id) {
        return this.blogservice.delcomments(id);
    }
};
__decorate([
    (0, common_1.Post)('createblog'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)('blogTitle')),
    __param(2, (0, common_1.Body)('blogContent')),
    __param(3, (0, common_1.Body)('blogTags')),
    __param(4, (0, common_1.Body)('blogDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String, String, String, Date]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "createBlog", null);
__decorate([
    (0, common_1.Post)('getblogs'),
    __param(0, (0, common_1.Body)('blogTags')),
    __param(1, (0, common_1.Body)('blogTitle')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "getBlogsByTags", null);
__decorate([
    (0, common_1.Delete)('deleteblog/:id'),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "deleteBlog", null);
__decorate([
    (0, common_1.Post)('getblogbyid'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "getBlogById", null);
__decorate([
    (0, common_1.Post)('addComment'),
    __param(0, (0, common_1.Body)('id')),
    __param(1, (0, common_1.Body)('userComment')),
    __param(2, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, user_entity_1.UserEntity]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "addComment", null);
__decorate([
    (0, common_1.Get)('bloglist'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "getBlogList", null);
__decorate([
    (0, common_1.Get)('getcomments/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "getComments", null);
__decorate([
    (0, common_1.Delete)('delcomments/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "delComments", null);
BlogsController = __decorate([
    (0, common_1.Controller)('bloggers'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __metadata("design:paramtypes", [blogs_service_1.BlogServices])
], BlogsController);
exports.BlogsController = BlogsController;
//# sourceMappingURL=blogs.controller.js.map