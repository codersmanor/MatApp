import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(cred:any){
    if(cred.username === 'prashant' && cred.password === 'koshta'){
      localStorage.setItem('username', cred.username);
      return "login successfully";
    }
    else{
      return "username and password wrong";
    }
  }

  showUsername(){
    return localStorage.getItem('username');
  }
}
