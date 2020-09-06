import { AuthService } from './firebase/auth.service';
import { switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Serv } from './../models/Service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServService {

  // servUrl: string = 'https://jsonplaceholder.typicode.com/Servs';

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
