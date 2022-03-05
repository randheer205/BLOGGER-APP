/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength, MinLength } from "class-validator";


export class ProfileDto {

    firstName: string;

    lastName: string;

    userEmail: string;

    userPassword: string;

    userCity: string;

    userState: string;

    userCountry: string;

    @MinLength(6)
    @MaxLength(6)
    userPostalCode: number;

    userBirthDate: Date;

    userGender: string;
}