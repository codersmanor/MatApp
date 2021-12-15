import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';                                          
import {MatIconModule} from '@angular/material/icon';                                          
import {MatButtonModule} from '@angular/material/button';                                          
import {MatButtonToggleModule} from '@angular/material/button-toggle';                                          
import { MatDialogModule } from '@angular/material/dialog';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    UserRegistrationComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTabsModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
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
