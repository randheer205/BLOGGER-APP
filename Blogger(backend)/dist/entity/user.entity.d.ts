import { BaseEntity } from 'typeorm';
import { BlogEntity } from './blog.entity';
export declare class UserEntity extends BaseEntity {
    id: number;
    firstName: string;
    lastName: string;
    userEmail: string;
    userPassword: string;
    userCity: string;
    userState: string;
    userCountry: string;
    userPostalCode: number;
    userBirthDate: Date;
    userGender: string;
    blogs: BlogEntity[];
}
