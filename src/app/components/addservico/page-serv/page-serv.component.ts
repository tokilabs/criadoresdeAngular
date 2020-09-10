import { ServService } from './../../../services/serv.service';
import { Serv } from './../../../models/Service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-page-serv',
  templateUrl: './page-serv.component.html',
  styleUrls: ['./page-serv.component.css']
})
export class PageServComponent implements OnInit {

  serv: Serv;
  servs: Serv[];
  p: number = 1;
  collection: any[] = this.servs;



  constructor(public afs: AngularFireStorage, private servServ: ServService) {
    this.servs = [];
  }

  ngOnInit(): void {

    this.servServ.fireGet(this.serv, this.servs);

  }


}
