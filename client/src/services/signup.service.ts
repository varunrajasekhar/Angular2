import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  User } from '../models/user';

@Injectable()
export class SignUpService {
  _url = 'http://localhost:9090/api/postEmpsData';
  constructor(private http: HttpClient) {
    
  }
  enroll(user: User) {
    return this.http.post<any>(this._url, user)
  }
}

export default SignUpService;