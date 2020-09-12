import { AuthService } from './../../../services/firebase/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './../../../index/index.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
