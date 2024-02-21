import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:8181/';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(data:any): Observable<any>{
    return this.http.post(apiUrl+'signup', data);
  }

  signin(data:any): Observable<any>{
    return this.http.post(apiUrl+'signin', data);
  }
}
