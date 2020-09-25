import { Router } from '@angular/router';
import { Serv } from './../../models/Service';
import { AngularFireStorage } from '@angular/fire/storage';
import { ServService } from './../../services/serv.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css', './../../index/index.component.css']
})
export class ConteudoComponent implements OnInit {


  serv: Serv;
  servs: Serv[];
  p: number = 1;
  collection: any[];



  constructor(
    public afs: AngularFireStorage,
    private servServ: ServService,
    public router: Router,
  ) {
    this.servs = [];
    this.collection = this.servs;
  }

  ngOnInit(): void {

    console.log(this.router.url);

    this.servServ.fireGetConteudo(this.serv, this.servs);

  }


}
