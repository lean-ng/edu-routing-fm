import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authenticated: boolean;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.authenticated$.subscribe(auth => this.authenticated = auth);
  }

  login(): void {
    this.auth.logOn();
  }

  logoff(): void {
    this.auth.logOff();
  }
}
