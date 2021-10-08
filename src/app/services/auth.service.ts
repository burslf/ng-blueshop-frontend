import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: any) {
    return this.http.post(`${environment.api}/login`, user, { observe: "body", responseType: "json" })
  }

  signup(user: any) {
    return this.http.post(`${environment.api}/signup`, user, { observe: "body", responseType: "json" })
  }
}

