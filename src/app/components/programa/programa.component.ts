import { ServService } from './../../services/serv.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Serv } from './../../models/Service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.css', './../../index/index.component.css']
})
export class ProgramaComponent implements OnInit {


  serv: Serv;
  servs: Serv[];
  p: number = 1;
  collection: any[];



  constructor(public afs: AngularFireStorage, private servServ: ServService) {
    this.servs = [];
    this.collection = this.servs;
  }

  ngOnInit(): void {

    this.servServ.fireGetPrograma(this.serv, this.servs);

  }



}
