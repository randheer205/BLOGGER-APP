"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeORMConfiguration = void 0;
const blog_comments_entity_1 = require("../entity/blog.comments.entity");
const blog_entity_1 = require("../entity/blog.entity");
const user_entity_1 = require("../entity/user.entity");
exports.TypeORMConfiguration = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "1234",
    "database": "blogsapp",
    "synchronize": false,
    "entities": [user_entity_1.UserEntity, blog_entity_1.BlogEntity, blog_comments_entity_1.BlogCommentEntity],
};
//# sourceMappingURL=typeorm.config.js.map