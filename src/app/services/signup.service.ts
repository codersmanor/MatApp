import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../models/user-registration';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private url = '/assets/data/registration.json';

  constructor(private http:HttpClient) { }

   signUp(userData:User){
    let headers = new HttpHeaders();
    headers.set('content/type','application/json')
    let data = JSON.stringify(userData);
   return this.http.post(`${this.url}`, data, {headers: headers});
   }

  
}
