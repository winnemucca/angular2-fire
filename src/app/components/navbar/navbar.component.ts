import { Component, OnInit } from '@angular/core';

import { AngularFire } from 'angularfire2';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title: string;
  constructor( public af: AngularFire) { }

  ngOnInit() {
    this.title = 'test';
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }

}
