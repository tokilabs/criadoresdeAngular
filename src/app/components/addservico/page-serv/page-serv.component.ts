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




  constructor(public afs: AngularFireStorage) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  async getAll() {
    const firestore = firebase.firestore();
    const ref = firestore.collection('addserv');
    const snapshot = await ref.get();
    console.log(snapshot.size);
    if (snapshot.size === 0) {
      console.log("null");
      alert("Nenhum Documento");
    } else {
      snapshot.forEach(doc => {
        if (doc.exists) {
          var docId = doc.id;
          var docData = doc.data();
          console.log(docData);
          console.log(docId);
          this.serv = docData as Serv;
          console.log(this.serv);

          // this.addnaPage(this.serv);
        } else {
          console.log("null");
          alert("Nenhum Documento");
        }
      });
    }
  }


}
