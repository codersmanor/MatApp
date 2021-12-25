import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';                                          
import {MatIconModule} from '@angular/material/icon';                                          
import {MatButtonModule} from '@angular/material/button';                                          
import {MatButtonToggleModule} from '@angular/material/button-toggle';                                          
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { DeshboardComponent } from './pages/deshboard/deshboard.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    UserRegistrationComponent,
    ForgotPasswordComponent,
    DeshboardComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
     
    ),
    HttpClientModule,
    ReactiveFormsModule,
    MatTabsModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
