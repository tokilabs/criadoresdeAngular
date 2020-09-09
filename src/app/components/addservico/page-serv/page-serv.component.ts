import { ServService } from './../../../services/serv.service';
import { Serv } from './../../../models/Service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-page-serv',
  templateUrl: './page-serv.component.html',
  styleUrls: ['./page-serv.component.css']
})
export class PageServComponent implements OnInit {

  serv: Serv;

  servs: Serv[];




  constructor(public afs: AngularFireStorage, private servServ: ServService) {
    this.servs = [];
  }

  ngOnInit(): void {

    this.servServ.fireGet(this.serv, this.servs);

  }


}
