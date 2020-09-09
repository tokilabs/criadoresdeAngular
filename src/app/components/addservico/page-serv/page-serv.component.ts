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

  // async getAll() {
  //   const firestore = firebase.firestore();
  //   const ref = firestore.collection('addserv');
  //   const snapshot = await ref.get();
  //   console.log(snapshot.size);
  //   if (snapshot.size === 0) {
  //     console.log("null");
  //     alert("Nenhum Documento");
  //   } else {
  //     snapshot.forEach(doc => {
  //       if (doc.exists) {
  //         var docId = doc.id;
  //         var docData = doc.data();
  //         console.log(docData);
  //         console.log(docId);
  //         this.serv = docData as Serv;
  //         this.servs.unshift(this.serv);
  //         console.log(this.serv);
  //         console.log(this.servs);


  //         // this.addnaPage(this.serv);
  //       } else {
  //         console.log("null");
  //         alert("Nenhum Documento");
  //       }
  //     });
  //   }
  // }


}
