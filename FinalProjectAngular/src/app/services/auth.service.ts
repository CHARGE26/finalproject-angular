import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  login(data:any):Observable<any>{
    console.log("I am Server");
    return this.http.post('https://login-signup.p.rapidapi.com/public/v1/login.php ',data)
  }
}
