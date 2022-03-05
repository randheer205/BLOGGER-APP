"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBlog = void 0;
const common_1 = require("@nestjs/common");
exports.GetBlog = (0, common_1.createParamDecorator)((data, obj) => {
    if (obj.args.length > 0) {
        const request = obj.args[0];
        return request.blog;
    }
    return null;
});
//# sourceMappingURL=get.blog.decorator.js.map