import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient
  ) { }

  get(id: string): Promise<User>{
    return this.http.get<User>(`${environment.apiUrl}api/User` + id).toPromise();
  }

  create(user: User): Promise<User>{
    return this.http.post<User>(`${environment.apiUrl}api/User`, user).toPromise();
  }

  update(user: User): Promise<User>{
    return this.http.put<User>(`${environment.apiUrl}api/User`, user).toPromise();
  }

  // delete(user: User): Promise<User>{
  //   return this.http.delete(`${environment.apiUrl}api/User`, user.id).toPromise();
  // }

}
