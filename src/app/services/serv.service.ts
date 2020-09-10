
import { AuthService } from './firebase/auth.service';
import { switchMap, map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Serv } from './../models/Service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
// Create a new transfer object to get data from server
interface ServerData {
  servicos: Array<Serv>;
}
@Injectable({
  providedIn: 'root'
})

export class ServService {

  // servUrl: string = 'https://jsonplaceholder.typicode.com/Servs';
  serv: Serv;

  servs: Serv[];
  serv$: Observable<Serv>;
  observServ: Observable<Serv[]>;

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient,
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
    this.getServFb();
  }

  getServFb() {
    this.observServ = this.http.get<Serv[]>(this.ROOT_URL + '/servs');
  }

  // findAllServs(): Observable<Serv[]> {
  //   return this.http.get<ServerData>('api/api-data.json').pipe(map(res => res.servicos));
  // }

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
          this.http.post(this.ROOT_URL + '/servs', servs);


          // this.addnaPage(this.serv);
        } else {
          console.log("null");
          alert("Nenhum Documento");
        }
      });
    }
  }

  fbGet(titulo): Observable<Serv> {
    return this.afs.doc<Serv>(`addserv/${titulo}`).valueChanges();
  }


  async fireServ(titulo, serv: Serv) {

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
          // console.log(docData);
          // console.log(docId);
          if (docId === titulo) {
            console.log(titulo);
            console.log(docData);
            serv = docData as Serv;
            console.log(serv);

          }
          // serv = docData as Serv;
          // servs.unshift(serv);
          // console.log(serv);
          // console.log(servs);


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
    serv.img = localStorage.getItem('imgPath');
    localStorage.setItem('servs', JSON.stringify(this.serv));
    localStorage.setItem('serv', JSON.stringify(serv));

    // serv.uid = this.afs.createId();
    console.log(serv);



    // this.authS.updateServData(serv);
    console.log(this.servs);
  }





}
