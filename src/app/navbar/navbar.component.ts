import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../services/login.service';
import { LoginComponent } from '../pages/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dialoge:MatDialog, auth:LoginService) { }

  ngOnInit(): void {
  }

  openDialogue(){
    this.dialoge.open(LoginComponent);
  }

}
