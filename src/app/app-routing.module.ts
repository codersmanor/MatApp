import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DeshboardComponent } from './pages/deshboard/deshboard.component';
import { AuthrGuard } from './authr.guard';

const routes: Routes = [
 {path:'',pathMatch: 'full', component: NavbarComponent},
 {path:'login', component: LoginComponent},
 {path:'deshboard', component: DeshboardComponent},
 {path:'forgot-password', component: ForgotPasswordComponent},
 

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
