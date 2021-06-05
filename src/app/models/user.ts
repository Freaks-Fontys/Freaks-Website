import { Car } from './car';

export class User {
    id: string;
    userName: string;
    email: string;
    passWord: string;
    car: Car;
    description: string;
    avatarURL?: string;
    registeredAt: Date;
    updatedAt?: Date;
    latestLoginAt?: Date;
    deletedAt?: Date;

    constructor(
        id: string,
        userName: string,
        email: string,
        passWord: string,
        car: Car,
        description: string,
        registeredAt: Date,
        avatarURL?: string,
        updatedAt?: Date,
        latestLoginAt?: Date,
        deletedAt?: Date
        ){
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.passWord = passWord;
        this.car = car;
        this.description = description;
        this.avatarURL = avatarURL;
        this.registeredAt = registeredAt;
        this.updatedAt = updatedAt;
        this.latestLoginAt = latestLoginAt;
        this.deletedAt = deletedAt;
    }
}
