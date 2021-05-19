import { Car } from './car';

export class User {
    id: string;
    userName: string;
    car: Car;
    description: string;
    avatarURL?: string;
    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    constructor(
        id: string,
        userName: string,
        car: Car,
        description: string,
        createdAt: Date,
        avatarURL?: string,
        updatedAt?: Date,
        deletedAt?: Date
        ){
        this.id = id;
        this.userName = userName;
        this.car = car;
        this.description = description;
        this.avatarURL = avatarURL;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
}
