/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param, Patch, Delete, ValidationPipe, UsePipes, UseGuards, Put } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport'
import { UserEntity } from "src/entity/user.entity";
import { AuthCredentialsDto } from "./dto/auth.credentials.dto";
import { ProfileDto } from "./dto/profile.dto";
import { GetUser } from "./get.user.decorator";
import { UserServices } from "./users.service";


@Controller('bloggers')
export class UserController {

    constructor(private readonly userService: UserServices) {

    }

    @Post('signup')
    @UsePipes(ValidationPipe)
    signUp(@Body() authCredentialsDto: AuthCredentialsDto) {
        /* console.log(authCredentialsDto.userEmail)
        console.log(authCredentialsDto.userPassword)
        console.log(authCredentialsDto.lastName)
        console.log(authCredentialsDto.firstName) */
        return this.userService.signup(authCredentialsDto);
    }


    @Post('signin')
    @UsePipes(ValidationPipe)
    signIn(@Body() authCredentialsDto: AuthCredentialsDto) {
        /* console.log(authCredentialsDto.userEmail)
        console.log(authCredentialsDto.userPassword) */
        return this.userService.signin(authCredentialsDto);
    }

    @Put('updateprofile')
    @UseGuards(AuthGuard())
    updateProfile(@Body() profileDto: ProfileDto) {
        console.log(profileDto.userEmail)
        return this.userService.updateProfile(profileDto);
    }

    @Post('getblogauthor')
    getBlogAuthor(@Body('userId')userId:number)
    {
        return this.userService.getBlogAuthor(userId)
    }

    @Post('getuserprofile')
    getUserProfile(@Body('email')email:string)
    {
        return this.userService.getuserprofile(email)
    }


}