import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Login } from './login-form';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login:Login;

  constructor(private fb: FormBuilder, private auth : LoginService) { }
  loginDetails = this.fb.group({
   username:[''],
   password:['']
  })

  
  

  saveForm(){
    let result= this.auth.login(this.loginDetails.value);
    console.log(result);
  }

}
