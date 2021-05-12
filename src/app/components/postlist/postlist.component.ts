import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
  posts: Post[] = [];
  post: Post;

  constructor(
    private postService: PostService
  ) {
    this.post = {
    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    userId: 'string',
    title: 'Test',
    description: '0',
    createdAt: new Date('2021-04-22T18:01:34.984Z')
    };
  }

  ngOnInit(): void {}

  createPost(): void{
    this.postService.create(this.post);
  }

  addAttachment(): void{

  }

}
