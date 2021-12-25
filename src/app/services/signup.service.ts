import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user-registration';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private url = 'http://localhost:3000/users';
  headers = new Headers().set('Content-Type', 'application/json')

  constructor(private http:HttpClient) { 
    
  }

   signUp(userData:User):Observable<User>{
    return this.http.post<User>(`${this.url}`, userData)
           .pipe(
             catchError(this.handleError)
           )
    ;
   }

   getUserById(id:number):Observable<User>{
     let API_URL = `${this.url}/+id`;
     return this.http.get<User>(API_URL)
     .pipe(
      catchError(this.handleError)
    );
   }
  
   updateUserById(user:User):Observable<User>{
    let API_URL = `${this.url}/`+user.id;
    return this.http.put<User>(API_URL, user)
    .pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error occured: ', error.error.message);
    }else{
      console.error(`Backend returned code: ${error.status}, `+ `body was: ${error.error}`);
    }
    return throwError('SOmething bad happend; please try again later.')
  }
}
