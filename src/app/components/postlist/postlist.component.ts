import { Component, OnInit } from '@angular/core';
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
    this.initializeList();
  }

  onSubmit(): void{
    this.postService.create(this.post);
  }

  addAttachment(): void{
    throw new Error('Not implemented');
  }

  onScrollDown(ev: any): void {
    console.log('scrolled down!!', ev);
    this.generateDummyData();

    const numOfItemsToBeLoaded = 5;

    this.postService.getMultiple(this.listItems.length, this.listItems.length + numOfItemsToBeLoaded);
  }

  onUp(ev: any): void {
    console.log('scrolled up!', ev);

    this.loadMore();
  }

  // TODO
  initializeList(): void {
    this.generateDummyData();
    // const numOfItemsToBeLoaded = 10;

    // this.postService.getMultiple(this.listItems.length, this.listItems.length + numOfItemsToBeLoaded);
  }

  // TODO
  loadMore(): void {
    this.generateDummyData();
    // const numOfItemsToBeLoaded = 5;

    // this.postService.getMultiple(this.listItems.length, this.listItems.length + numOfItemsToBeLoaded);
  }

  generateDummyData(): void {
    for (let i = 0; i < 15; i++){
      this.listItems.push({
        image: '../../assets/images/img_avatar.png',
        title: 'Hi this is a test',
        content: 'Im very pleased with this content'
      });
    }
  }
}
