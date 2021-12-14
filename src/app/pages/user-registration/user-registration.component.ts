import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  loginDetails = this.fb.group({
   username:[''],
   password:[''],
   email:[''],
   mobile:['']
  })

  ngOnInit(): void {
  }


  singUp(){

  }
}
