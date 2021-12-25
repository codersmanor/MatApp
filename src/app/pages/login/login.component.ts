import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Login } from './login-form';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   title = 'Welcome to metrimony'
   fp='Forgot Password'
  login:Login;
  forgot_password:boolean=false;

  constructor(private fb: FormBuilder, private auth : LoginService, private router: Router) { }
  loginDetails = this.fb.group({
   username:[''],
   password:['']
  });

  forgotP  = this.fb.group({
    username:[''],
    mobile:['']
   });


   getForgotPassword(){
     this.auth.forgotPassword(this.forgotP.value)
     .subscribe((data)=>{
      console.log(data);
     this.router.navigate(['/login'])
     });
   }


  forgot(){
    this.forgot_password=true;
  }
  saveForm(){
   this.auth.login(this.loginDetails.value)   
    .subscribe(data=>{
      // here  need to store the response data username to the localstorage to use guard
     localStorage.setItem('user', data.username);
        this.router.navigate(['/deshboard']);
      
    })
    
  }
  

}
