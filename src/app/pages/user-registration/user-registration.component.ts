import { Component, OnInit } from '@angular/core';
import db  from 'src/assets/data/db.json';
import { User } from 'src/app/models/user-registration.js';
import { HttpClient } from '@angular/common/http';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})


export class UserRegistrationComponent implements OnInit {

  public user:User={
    "id":0,
    "username":"",
    "password":"",
    "mobile":0,
    "email":""
  }
  
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

  getById(id:number){
    return this.signupService.getUserById(id)
               .subscribe((data)=>{
                 console.log(data);
               },
               (error)=>{
                 console.log(error);
               })
  }

  updateById(){
    return this.signupService.updateUserById(this.user)
    .subscribe((data)=>{
      console.log(data);
    },
    (error)=>{
      console.log(error);
    })
  }
}
