import { AuthService } from './../../services/firebase/auth.service';
import { Component, OnInit } from '@angular/core';
import { bounceAnimation } from 'angular-animations';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-general-nav',
  templateUrl: './general-nav.component.html',
  styleUrls: ['./general-nav.component.css'],
  animations: [
    bounceAnimation({ anchor: 'bounce', duration: 1000, direction: '<=>' }),
  ],
})
export class GeneralNavComponent implements OnInit {

  ImgSrc: any;
  userOn: boolean;


  constructor(
    public authS: AuthService
  ) {
    this.ImgSrc = 'assets/svg/CriadoresLogoOut.svg';
  }

  ngOnInit(): void {
    var currUser = firebase.auth().currentUser;
    console.log(currUser);

    if (currUser === null) {
      this.userOn = false;
    } else { this.userOn = true; }

    console.log(this.userOn);
  }

}
