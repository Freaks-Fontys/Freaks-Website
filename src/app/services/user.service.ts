import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL = 'https://localhost:44360/api/User';

  constructor(
    private http: HttpClient
  ) { }

  get(id: string): Promise<User>{
    return this.http.get<User>(this.baseURL + '/' + id).toPromise();
  }

  create(user: User): Promise<User>{
    return this.http.post<User>(this.baseURL, user).toPromise();
  }

  update(user: User): Promise<User>{
    return this.http.put<User>(this.baseURL, user).toPromise();
  }

  // delete(user: User): Promise<User>{
  //   return this.http.delete(this.baseURL, user.id).toPromise();
  // }

}
