import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user-registration';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:3000/users';
 // private og='http://localhost:3000/users?username=koshta&password=dasckasnc';
  headers = new Headers().set('Content-Type', 'application/json')
  
  constructor(private http:HttpClient) {   }

  login(userData:User):Observable<User>{
    return this.http.get<User>(`${this.url}?username=${userData.username}&password=${userData.password}`)
           .pipe(
             catchError(this.handleError)
           );
   }

   forgotPassword(userData:User): Observable<User>{
   return this.http.get<User>(`${this.url}?username=${userData.username}&mobile=${userData.mobile}`)
    .pipe(
      catchError(this.handleError)
    );
   }

   getAllUsers(){
    return this.http.get<User[]>(`${this.url}`)
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
