import { ServService } from './../../../services/serv.service';
import { Serv } from './../../../models/Service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-page-serv',
  templateUrl: './page-serv.component.html',
  styleUrls: ['./page-serv.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageServComponent implements OnInit {

  serv: Serv;
  servs: Serv[];
  items = [];
  pageOfItems: Array<any>;




  constructor(public afs: AngularFireStorage, private servServ: ServService) {
    this.servs = [];
  }

  ngOnInit(): void {

    this.servServ.fireGet(this.serv, this.servs);

    this.items.push(item => { this.serv = item; });
    console.log(this.items);

  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }


}
