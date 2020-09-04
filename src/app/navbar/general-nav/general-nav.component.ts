import { Component, OnInit } from '@angular/core';
import { bounceAnimation } from 'angular-animations';


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
  constructor() {
    this.ImgSrc = './../../../assets/svg/CriadoresLogoOut.svg';
  }

  ngOnInit(): void {

  }

}
