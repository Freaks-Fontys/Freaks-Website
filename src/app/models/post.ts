export class Post {
    id: string;
    userId: string;
    title: string;
    description: string;
    imageURL?: string;
    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    constructor(
        id: string,
        userId: string,
        title: string,
        description: string,
        createdAt: Date,
        imageURL?: string,
        updatedAt?: Date,
        deletedAt?: Date
        ){
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.description = description;
        this.imageURL = imageURL;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
}
