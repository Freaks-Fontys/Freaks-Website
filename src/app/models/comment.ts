import { Post } from './post';

export class Comment extends Post {
    postId: string;
    constructor(
        id: string,
        userId: string,
        postId: string,
        title: string,
        description: string,
        createdAt: Date,
        imageURL?: string,
        updatedAt?: Date,
        deletedAt?: Date
        ){
        super(id, userId, title, description, createdAt, imageURL, updatedAt, deletedAt);
        this.postId = postId;
    }
}
