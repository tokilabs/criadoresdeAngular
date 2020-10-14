import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AuthService } from './../../services/firebase/auth.service';
import { MatTab } from '@angular/material/tabs';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-adm-bar',
  templateUrl: './adm-bar.component.html',
  styleUrls: ['./adm-bar.component.css']
})
export class AdmBarComponent implements OnInit {

  userOn: boolean;
  userName: String;


  constructor(
    public authS: AuthService,
    private router: Router
  ) {
    this.userOn = false;
  }

  ngOnInit(): void {

    var currUser = firebase.auth().currentUser;
    console.log(currUser);

    if (currUser === null) {
      this.userOn = false;
      this.router.navigate(['/adm']);

    } else { this.userOn = true; }
    this.userName = JSON.stringify(firebase.auth().currentUser.displayName);
    console.log(this.userOn);

  }

}
