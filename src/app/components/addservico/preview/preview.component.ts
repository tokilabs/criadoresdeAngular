import { Serv } from './../../../models/Service';
import { AuthService } from './../../../services/firebase/auth.service';
import { ServService } from './../../../services/serv.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  servs: Serv[];

  constructor(private servServ: ServService, public authS: AuthService, private storage: AngularFireStorage) {

    this.servs = [JSON.parse(localStorage.getItem('servs'))];

  }

  ngOnInit(): void {

  }

  addFire(serv: Serv) {


    this.authS.updateServData(serv);

  }

}
