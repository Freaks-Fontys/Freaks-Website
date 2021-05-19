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
  listItems: any[] = [];
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

  ngOnInit(): void {
    this.fetchMore();
  }

  onSubmit(): void{
    this.postService.create(this.post);
  }

  addAttachment(): void{

  }

  fetchMore(): void {

    const images = ['IuLgi9PWETU', 'fIq0tET6llw', 'xcBWeU4ybqs', 'YW3F-C5e8SE', 'H90Af2TFqng'];

    const newItems = [];
    for (let i = 0; i < 20; i++) {
      const randomListNumber = Math.round(Math.random() * 100);
      const randomPhotoId = Math.round(Math.random() * 4);
      newItems.push({
        title: 'List Item ' + randomListNumber,
        content: 'This is some description of the list - item # ' + randomListNumber,
        image: `https://source.unsplash.com/${images[randomPhotoId]}/50x50`
      });
    }

    this.listItems = [...this.listItems, ...newItems];
  }
}
