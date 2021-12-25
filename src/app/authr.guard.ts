import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthrGuard implements CanActivate {
  
  constructor(private loginService: LoginService, private router: Router){}

  canActivate(): boolean{
   return true;
  }
  
}
