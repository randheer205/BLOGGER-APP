/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength, MinLength } from "class-validator";


export class AuthCredentialsDto {

    firstName: string;

    lastName: string;

    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(25)
    userEmail: string;

    @IsNotEmpty()
    @MaxLength(25)
    @MinLength(5)
    userPassword: string;
}