/* eslint-disable prettier/prettier */
import { UserEntity } from "src/entity/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth.credentials.dto";
import * as crypto from 'crypto-js';
import { Body, NotFoundException } from "@nestjs/common";
import { use } from "passport";
import { validate } from "class-validator";
import { ProfileDto } from "./dto/profile.dto";
import { UserServices } from "./users.service";


@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity>{


    async signup(authCredentialsdto: AuthCredentialsDto) {
        const user = new UserEntity()

        user.firstName = authCredentialsdto.firstName;
        user.lastName = authCredentialsdto.lastName
        user.userEmail = authCredentialsdto.userEmail;
        user.userPassword = authCredentialsdto.userPassword;

        await user.save();
    }

    async signin(authCredentialsDto: AuthCredentialsDto) {

        const { firstName, lastName, userEmail, userPassword } = authCredentialsDto;

        //console.log(authCredentialsDto.userEmail)
        const user = this.findOne({ userEmail });
        //console.log(user)
        if (await user) {
            if ((await user).userPassword === authCredentialsDto.userPassword) {
                return await user;
            }
        }
        throw new NotFoundException('User not found');
    }

    async updateProfile(profileDto: ProfileDto) {
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
            user.save()
            return user;
        }
        else {
            throw new NotFoundException('User not found')
        }
    }

    async getUser(userId:number)
    {
        const query= this.createQueryBuilder('bloggers')
        query.select("bloggers.firstName")
        query.andWhere('id=:id',{id:userId})
        const u=await query.getOne()
        query.select("bloggers.lastName")
        query.andWhere('id=:id',{id:userId})
        const u1=await query.getOne()
        query.select("bloggers.userEmail")
        query.andWhere('id=:id',{id:userId})
        const u2=await query.getOne()
        var ua=[u.firstName,u1.lastName,u2.userEmail]
        //return u.firstName+" "+u1.lastName
        return ua
    }

    async getprofile(email:string)
    {
        const query= this.createQueryBuilder('bloggers')
        query.andWhere('userEmail=:userEmail',{userEmail:email})
        const u=await query.getOne()
        /*query.select("bloggers.lastName")
        query.andWhere('userEmail=:userEmail',{userEmail:email})
        const u1=await query.getOne()
        query.select("bloggers.userCity")
        query.andWhere('userEmail=:userEmail',{userEmail:email})
        const u3=await query.getOne()
        query.select("bloggers.userState")
        query.andWhere('userEmail=:userEmail',{userEmail:email})
        const u4=await query.getOne()
        /*query.select("bloggers.userCountry")
        query.andWhere('userEmail=:userEmail',{userEmail:email})
        const u5=await query.getOne()
        query.select("bloggers.userPostalCode")
        query.andWhere('userEmail=:userEmail',{userEmail:email})
        const u6=await query.getOne()
        query.select("bloggers.userBirthDate")
        query.andWhere('userEmail=:userEmail',{userEmail:email})
        const u7=await query.getOne()
        query.select("bloggers.userGender")
        query.andWhere('userEmail=:userEmail',{userEmail:email})
        const u8=await query.getOne()
        var ua=[u.firstName,u1.lastName,u3.userEmail,u4.userState,u5.userCountry,u6.userPostalCode,u7.userBirthDate,u8.userGender]   */
        //return u.firstName+" "+u1.lastName
        //return ua
        var ua=[u.firstName,u.lastName,u.userBirthDate,u.userCity,u.userCountry,u.userPostalCode,u.userGender,u.userState]
        //console.log(u.firstName+u.lastName+u.userCity+u.userPostalCode)
        return ua
    }

}