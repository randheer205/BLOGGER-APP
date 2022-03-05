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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const auth_credentials_dto_1 = require("./dto/auth.credentials.dto");
const profile_dto_1 = require("./dto/profile.dto");
const users_service_1 = require("./users.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    signUp(authCredentialsDto) {
        return this.userService.signup(authCredentialsDto);
    }
    signIn(authCredentialsDto) {
        return this.userService.signin(authCredentialsDto);
    }
    updateProfile(profileDto) {
        console.log(profileDto.userEmail);
        return this.userService.updateProfile(profileDto);
    }
    getBlogAuthor(userId) {
        return this.userService.getBlogAuthor(userId);
    }
    getUserProfile(email) {
        return this.userService.getuserprofile(email);
    }
};
__decorate([
    (0, common_1.Post)('signup'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_credentials_dto_1.AuthCredentialsDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('signin'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_credentials_dto_1.AuthCredentialsDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "signIn", null);
__decorate([
    (0, common_1.Put)('updateprofile'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [profile_dto_1.ProfileDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Post)('getblogauthor'),
    __param(0, (0, common_1.Body)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getBlogAuthor", null);
__decorate([
    (0, common_1.Post)('getuserprofile'),
    __param(0, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUserProfile", null);
UserController = __decorate([
    (0, common_1.Controller)('bloggers'),
    __metadata("design:paramtypes", [users_service_1.UserServices])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=users.controller.js.map