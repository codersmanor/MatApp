import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user-registration';

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  title='Forgot Password';
  user:User;
  constructor(private fb: FormBuilder, 
      private auth : LoginService,
      private router: Router,
      private toastr:ToastrService) { }
      
  ngOnInit(): void {
  }

  forgotP  = this.fb.group({
    username:[''],
    mobile:['']
   });


   getForgotPassword(){
    return this.auth.forgotPassword(this.forgotP.value)
     .subscribe(data=>{
      this.user =  data;
      let result = this.user;
      // need to get the response and set to toaster messege
      this.toastr.warning('message', 'Password',{
        timeOut:2000,
        progressBar: true,
        progressAnimation: "increasing"
      });
      console.log("Users data", this.user);
     this.router.navigate(['/login'])
     });
   }

}
