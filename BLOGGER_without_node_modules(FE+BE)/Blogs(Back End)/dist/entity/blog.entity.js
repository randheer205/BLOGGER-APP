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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogEntity = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const class_validator_1 = require("class-validator");
const blog_comments_entity_1 = require("./blog.comments.entity");
const blog_tag_enum_1 = require("../blogs/blog.tag.enum");
let BlogEntity = class BlogEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BlogEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BlogEntity.prototype, "blogTitle", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BlogEntity.prototype, "blogContent", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BlogEntity.prototype, "blogTags", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], BlogEntity.prototype, "blogDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BlogEntity.prototype, "blogRating", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BlogEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => user_entity_1.UserEntity, user => user.blogs, { eager: false }),
    __metadata("design:type", user_entity_1.UserEntity)
], BlogEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => blog_comments_entity_1.BlogCommentEntity, comment => comment.blog, { eager: false }),
    __metadata("design:type", Array)
], BlogEntity.prototype, "comments", void 0);
BlogEntity = __decorate([
    (0, typeorm_1.Entity)('blogs'),
    (0, typeorm_1.Unique)(['blogTitle'])
], BlogEntity);
exports.BlogEntity = BlogEntity;
//# sourceMappingURL=blog.entity.js.map