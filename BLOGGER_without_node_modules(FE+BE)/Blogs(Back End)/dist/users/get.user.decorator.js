"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = void 0;
const common_1 = require("@nestjs/common");
exports.GetUser = (0, common_1.createParamDecorator)((data, obj) => {
    if (obj.args.length > 0) {
        const request = obj.args[0];
        return request.user;
    }
    return null;
});
//# sourceMappingURL=get.user.decorator.js.map