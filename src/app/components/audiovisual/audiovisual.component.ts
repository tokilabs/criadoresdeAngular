import { ServService } from './../../services/serv.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Serv } from './../../models/Service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audiovisual',
  templateUrl: './audiovisual.component.html',
  styleUrls: ['./audiovisual.component.css', './../../index/index.component.css']
})
export class AudiovisualComponent implements OnInit {


  serv: Serv;
  servs: Serv[];
  p: number = 1;
  collection: any[];



  constructor(public afs: AngularFireStorage, private servServ: ServService) {
    this.servs = [];
    this.collection = this.servs;
  }

  ngOnInit(): void {

    this.servServ.fireGetAvisual(this.serv, this.servs);

  }

}
