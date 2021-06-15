import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserLoginMsg } from '../models/messages/user-login-msg';
import { UserRegisterMsg } from '../models/messages/user-register-msg';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedUserSubject: BehaviorSubject<any>;
  public loggedInUser: Observable<any>;

  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService
  ) {
    const getLoggedUser = JSON.parse(localStorage.getItem('token') || '{}');
    this.loggedUserSubject = new BehaviorSubject(getLoggedUser);
    this.loggedInUser = this.loggedUserSubject.asObservable();
  }

  getRegisteredUser(id: number): Promise<User> {
    return this.http.get<User>(`${environment.apiUrl}api/Register` + id).toPromise();
  }

  register(register: UserRegisterMsg): Promise<User> {
    return this.http.post<User>(`${environment.apiUrl}api/Register`, register).toPromise();
  }

  login(login: UserLoginMsg): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}api/Login`, login)
      .pipe(map((response: User) => {
        localStorage.setItem('token', JSON.stringify(response));
        this.loggedUserSubject.next(response);
        return response;
      }));
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedUserSubject.next(null);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token') || '{}';
    // Check whether the token is expired and return
    // true or false
    if (token === '{}'){
      return false;
    } else {
      return !this.jwtHelper.isTokenExpired(token);
    }
  }

  public get loggedInUserValue(): any {
    return this.loggedUserSubject.value;
  }
}
