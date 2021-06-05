import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  get(id: number): Promise<Post>{
    return this.http.get<Post>(`${environment.apiUrl}api/Post` + id).toPromise();
  }

  getMultiple(paginationStart: number, paginationEnd: number): Promise<Post[]>{
    const params = new HttpParams();
    params.set('start', paginationStart.toString());
    params.set('end', paginationEnd.toString());
    return this.http.get<Post[]>(`${environment.apiUrl}api/Post`, {params}).toPromise();
  }

  create(post: Post): Promise<Post>{
    return this.http.post<Post>(`${environment.apiUrl}api/Post`, post).toPromise();
  }

  update(post: Post): Promise<Post>{
    return this.http.put<Post>(`${environment.apiUrl}api/Post`, post).toPromise();
  }

  // delete(post: Post): Promise<Post>{
  //   return this.http.delete(`${environment.apiGatewayHost}api/Post`, post.id).toPromise();
  // }

}
