import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dialoge:MatDialog) { }

  ngOnInit(): void {
  }

  openDialogue(){
    this.dialoge.open(LoginComponent);
  }

}
