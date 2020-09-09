import { AuthService } from './firebase/auth.service';
import { switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Serv } from './../models/Service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})

export class ServService {

  // servUrl: string = 'https://jsonplaceholder.typicode.com/Servs';
  serv: Serv;

  servs: Serv[];
  serv$: Observable<Serv>;


  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public authS: AuthService,

  ) {
    this.servs = [];
    this.serv$ = this.afAuth.authState.pipe(
      switchMap(serv => {
        if (serv) {
          return this.afs.doc<Serv>(`addserv/${serv.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async fireGet(serv: Serv, servs: Serv[]) {
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
          serv = docData as Serv;
          servs.unshift(serv);
          console.log(serv);
          console.log(servs);


          // this.addnaPage(this.serv);
        } else {
          console.log("null");
          alert("Nenhum Documento");
        }
      });
    }
  }

  getServs(): Observable<Serv[]> {

    if (localStorage.getItem('servs') === null) {
      this.servs = [];
    } else {
      this.servs = JSON.parse(localStorage.getItem('servs'));
    }
    console.log(this.servs);

    return of(this.servs.sort((a, b) => {
      return b.id = a.id;
    }));


  }

  saveServ(serv: Serv) {
    // return this.http.post<Serv>(this.servUrl, serv, httpOptions);
    this.servs.unshift(serv);
    localStorage.setItem('servs', JSON.stringify(this.servs));
    // serv.uid = this.afs.createId();
    console.log(serv);

    this.authS.updateServData(serv);
    console.log(this.servs);
  }




}
