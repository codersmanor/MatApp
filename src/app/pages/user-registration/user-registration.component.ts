import { Component, OnInit } from '@angular/core';
import registration  from 'src/assets/data/registration.json';
import { User } from 'src/app/models/user-registration.js';
import { HttpClient } from '@angular/common/http';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})


export class UserRegistrationComponent implements OnInit {

  user:User=registration;
  
  constructor(private signupService:SignupService) { 
    
  }
  

  ngOnInit(): void {
  }


  singUp(){
   return this.signupService.signUp(this.user)
   .subscribe((data)=>{
     console.log(data);
   })
  }
}
