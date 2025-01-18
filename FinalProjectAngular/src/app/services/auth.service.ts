import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'https://api.escuelajs.co/api/v1/auth/login';
  private usersUrl = 'https://api.escuelajs.co/api/v1/users';

  constructor(private http: HttpClient) {
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(this.loginUrl, credentials);
  }
  getUsers(): Observable<any> {
    return this.http.get(this.usersUrl);
  }
  isLoggedIn():boolean{
    const token = localStorage.getItem('token')  
    return !!token
 }
}
