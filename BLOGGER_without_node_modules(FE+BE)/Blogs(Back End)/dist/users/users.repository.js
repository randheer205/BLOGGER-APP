"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const user_entity_1 = require("../entity/user.entity");
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async signup(authCredentialsdto) {
        const user = new user_entity_1.UserEntity();
        user.firstName = authCredentialsdto.firstName;
        user.lastName = authCredentialsdto.lastName;
        user.userEmail = authCredentialsdto.userEmail;
        user.userPassword = authCredentialsdto.userPassword;
        await user.save();
    }
    async signin(authCredentialsDto) {
        const { firstName, lastName, userEmail, userPassword } = authCredentialsDto;
        const user = this.findOne({ userEmail });
        if (await user) {
            if ((await user).userPassword === authCredentialsDto.userPassword) {
                return await user;
            }
        }
        throw new common_1.NotFoundException('User not found');
    }
    async updateProfile(profileDto) {
        const { firstName, lastName, userEmail, userPassword, userCity, userState, userCountry, userPostalCode, userBirthDate, userGender } = profileDto;
        const user = await this.findOne({ userEmail });
        if (user) {
            if (firstName) {
                user.firstName = firstName;
            }
            if (lastName) {
                user.lastName = lastName;
            }
            if (userEmail) {
                user.userEmail = userEmail;
            }
            if (userPassword) {
                user.userPassword = userPassword;
            }
            if (userCity) {
                user.userCity = userCity;
            }
            if (userState) {
                user.userState = userState;
            }
            if (userCountry) {
                user.userCountry = userCountry;
            }
            if (userPostalCode) {
                user.userPostalCode = userPostalCode;
            }
            if (userBirthDate) {
                user.userBirthDate = userBirthDate;
            }
            if (userGender) {
                user.userGender = userGender;
            }
            user.save();
            return user;
        }
        else {
            throw new common_1.NotFoundException('User not found');
        }
    }
    async getUser(userId) {
        const query = this.createQueryBuilder('bloggers');
        query.select("bloggers.firstName");
        query.andWhere('id=:id', { id: userId });
        const u = await query.getOne();
        query.select("bloggers.lastName");
        query.andWhere('id=:id', { id: userId });
        const u1 = await query.getOne();
        query.select("bloggers.userEmail");
        query.andWhere('id=:id', { id: userId });
        const u2 = await query.getOne();
        var ua = [u.firstName, u1.lastName, u2.userEmail];
        return ua;
    }
    async getprofile(email) {
        const query = this.createQueryBuilder('bloggers');
        query.andWhere('userEmail=:userEmail', { userEmail: email });
        const u = await query.getOne();
        var ua = [u.firstName, u.lastName, u.userBirthDate, u.userCity, u.userCountry, u.userPostalCode, u.userGender, u.userState];
        return ua;
    }
};
UserRepository = __decorate([
    (0, typeorm_1.EntityRepository)(user_entity_1.UserEntity)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=users.repository.js.map