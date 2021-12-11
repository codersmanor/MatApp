import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(cred:any){
    if(cred.username === 'prashant' && cred.password === 'koshta'){
      return "login successfully";
    }
    else{
      return "username and password wrong";
    }
  }
}
