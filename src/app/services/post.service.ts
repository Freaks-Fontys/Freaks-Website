import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseURL = 'https://localhost:44360/api/Post';

  constructor(
    private http: HttpClient
  ) { }

  get(id: number): Promise<Post>{
    return this.http.get<Post>(this.baseURL + '/' + id).toPromise();
  }

  getMultiple(paginationStart: number, paginationEnd: number): Promise<Post[]>{
    const params = new HttpParams();
    params.set('start', paginationStart.toString());
    params.set('end', paginationEnd.toString());
    return this.http.get<Post[]>(this.baseURL, {params}).toPromise();
  }

  create(post: Post): Promise<Post>{
    return this.http.post<Post>(this.baseURL, post).toPromise();
  }

  update(post: Post): Promise<Post>{
    return this.http.put<Post>(this.baseURL, post).toPromise();
  }

  // delete(post: Post): Promise<Post>{
  //   return this.http.delete(this.baseURL, post.id).toPromise();
  // }

}
