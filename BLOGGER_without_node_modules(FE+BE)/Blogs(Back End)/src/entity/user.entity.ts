/* eslint-disable prettier/prettier */
import { enc } from 'crypto-js';
import { type } from 'os';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity, Unique } from 'typeorm';
import { BlogEntity } from './blog.entity';
import * as crypto from 'crypto-js';
import { MaxLength, MinLength } from 'class-validator';

@Entity('bloggers')
@Unique(['userEmail'])
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    userEmail: string;

    @Column()
    userPassword: string;

    @Column()
    userCity: string;

    @Column()
    userState: string;

    @Column()
    userCountry: string;

    @Column()
    @MinLength(6)
    @MaxLength(6)
    userPostalCode: number;

    @Column()
    userBirthDate: Date;

    @Column()
    userGender: string;

    @OneToMany(type => BlogEntity, blog => blog.user, { eager: true, onDelete: 'SET NULL' })
    blogs: BlogEntity[];
}

