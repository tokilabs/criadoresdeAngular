import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css', './../../../index/index.component.css']
})
export class EntrarComponent implements OnInit {

  showLg: boolean;
  userOn: boolean;


  constructor() {

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
